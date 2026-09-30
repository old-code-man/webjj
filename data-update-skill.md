# webjj 数据更新 Skill

本 skill 描述如何更新 `webjj`（`code/`）的两个静态数据：**AI 模型排行榜**（6 个榜单）与 **AI 资讯**（`news.html`）。
项目为纯静态前端（无后端、无数据库），数据为本地 JS/JSON 文件，更新后**刷新浏览器**即可生效，无需重启。

> 工作目录 = git 仓库根目录（本 `code/`）。以下命令均在该目录执行。

---

## 一、排行榜数据更新（6 个榜单）

排行榜页 `ranking.html` 通过 6 个 `<iframe>` 内嵌各榜单页，数据来自：

| 榜单页 `rankings/*.html` | 数据文件 `data/*.js` |
| --- | --- |
| code.html | data/code.js |
| text.html | data/text.js |
| text-to-image.html | data/text-to-image.js |
| image-edit.html | data/image-edit.js |
| text-to-video.html | data/text-to-video.js |
| image-to-video.html | data/image-to-video.js |

### 步骤 1：拉取最新榜单 JSON

```bash
# 默认只抓取上述 6 个榜单（与页面一一对应）
python claw/arena_api.py -o claw/api_data
```

- 数据源：Claw Arena API（`https://api.wulong.dev/arena-ai-leaderboards/v1`），失败时自动回退到 GitHub raw。
- 输出：`claw/api_data/*.json`（6 个）。
- 可选：`--list` 查看可用榜单；`--name <n>` 只抓单个；`--date YYYY-MM-DD` 指定日期。

### 步骤 2：转换 JSON → JS

```bash
node claw/convert-json-to-js.js
```

- 读取 `claw/api_data/*.json`，写出 `data/*.js`（前端直接引用）。
- 同时**自动重生成 `data/update.js`**（`window.lastUpdated` 取当日日期，勿手动改）。

### 步骤 3：校验

```bash
# 逐文件语法校验（纯 JS，浏览器脚本使用 window，node --check 可判定语法）
for f in data/*.js; do node --check "$f" && echo "OK $f"; done

# 可选：加载验证（确认 window 可写、数据完整）
node -e "global.window={};require('./data/code.js');console.log(window.rankingData.data.length,'models')"
```

**异常判定（任一即视为失败，勿提交）：**
- 任一 `node --check` 报语法错误。
- 任一榜单模型数量小于 10（空榜单/抓取失败）。
- `data/*.js` 中 `model` 字段为空或全部为 `-1` 分。
- `update.js` 的 `lastUpdated` 未更新。

### 步骤 4：提交并推送到 git

```bash
# 仅提交本次刷新相关的文件（6 个 JS + update.js + 对应 api_data JSON）
git add data/*.js claw/api_data/*.json
git diff --stat          # 快速核对改动
git commit -m "更新AI模型排行榜数据（6个榜单）至$(date +%F)"
git push origin main
```

> 推送成功会输出类似 `To github.com:old-code-man/webjj.git main -> main`。

---

## 二、AI 资讯更新（news.html）

`news.html` 数据来自 `data/news.js`，含三个模块，对应三个数组：

- `news[]` 最新资讯：`date / category / title / summary / source / url`
- `quotes[]` 名人言论：`name / role / quote / date / source / url`
- `products[]` 新产品：`name / company / category / date / status / description / url`

### 步骤 1：编辑 `data/news.js`

```bash
code/data/news.js
```

- 在对应数组追加/更新条目，字段键名需与上表一致。
- `news[]` 中的 `category` 会自动生成筛选标签，无需改页面。

### 步骤 2：同步 `updated` 字段

- 页面标题处展示更新时间，请同步 `news.js` 中的 `updated` 字段为当日。

### 步骤 3：校验 + 提交

```bash
node --check data/news.js     # 语法校验
git add data/news.js
git commit -m "更新AI资讯至$(date +%F)"
git push origin main
```

---

## 三、目录结构（数据相关）

```
code/
├── index.html                 # 总览页
├── ranking.html               # 排行榜页（6 个 iframe）
├── news.html                  # AI 资讯页
├── data/
│   ├── code.js                # Code 榜单（JS）
│   ├── text.js                # Text 榜单（JS）
│   ├── text-to-image.js       # 文生图（JS）
│   ├── image-edit.js          # 图像编辑（JS）
│   ├── text-to-video.js       # 文生视频（JS）
│   ├── image-to-video.js      # 图生视频（JS）
│   ├── news.js                # AI 资讯（资讯/言论/产品）
│   └── update.js              # window.lastUpdated（自动生成交）
├── rankings/
│   └── assets/logos/          # 各厂商 logo（svg）
├── claw/
│   ├── arena_api.py           # 排行榜拉取（6 榜单，回退 GitHub）
│   ├── convert-json-to-js.js  # JSON→JS + 自动生成 update.js
│   ├── download-logos.js      # 下载 logo 图片
│   └── api_data/              # 拉取的 JSON（6 个）
├── scrape_arena.bat           # Windows 一键拉取（6 榜单）
└── .git                       # git 仓库（本目录）
```

---

## 四、注意事项

- **纯静态**：更新 `data/*.js` 后只需刷新浏览器，无需重启静态服务器。
- **6 个榜单**：页面仅用 6 个榜单。抓取时若出现 `document / search / video-edit / vision` 等多余 JSON，可删除（`claw/api_data` 与 `data/` 同名文件），保持仓库与页面一致。
- **不要手动改 `data/update.js`**：由转换脚本自动生成交；`window.lastUpdated` 即当日。
- **校验先行**：提交前务必跑 `node --check` 与“每榜单 ≥10 模型”判定，避免空数据上线。
- **git 根目录**：本 `code/` 即仓库根，远程 `github.com:old-code-man/webjj.git`，分支 `main`。
- **Windows 用户**：可用 `scrape_arena.bat` 一键完成拉取 + 转换。

---

## 五、一键快速命令（Mac/Linux）

```bash
cd code
python claw/arena_api.py -o claw/api_data        # 1) 拉取 6 榜单
node claw/convert-json-to-js.js                  # 2) JSON→JS + update.js
for f in data/*.js; do node --check "$f" && echo OK $f; done   # 3) 校验
git add data/*.js claw/api_data/*.json
git commit -m "更新AI模型排行榜数据（6个榜单）至$(date +%F)"   # 4) 提交
git push origin main                              # 5) 推送
```
