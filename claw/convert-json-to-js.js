const fs = require('fs');
const path = require('path');

// 配置
const JSON_DIR = './api_data';
const JS_DIR = '../data';
const DATA_DIR = '../data'; // 存放 update.js 的目录
const RANK_DIFF_THRESHOLD = 10; // rank差异阈值
const RERANK_AFTER_FILTER = false; // 筛选后是否重新排名，默认false保持原始排名

// 确保输出目录存在
if (!fs.existsSync(JS_DIR)) {
    fs.mkdirSync(JS_DIR, { recursive: true });
}

// 判断是否是中国公司
function isChineseCompany(vendor) {
    const chineseCompanies = [
        'Alibaba', 'Tencent', 'Baidu', 'ByteDance', 'Bytedance',
        'KlingAI', 'Shengshu', 'MiniMax', 'Minimax',
        'Zhipu', 'DeepSeek', 'Moonshot', 'StepFun',
        '01.AI', 'Lingyiwanwu', 'SenseTime', 'iFLYTEK',
        'THUDM', 'ModelBest', 'Pruna', 'Xiaomi',
        'KwaiKAT', 'Kwai', 'MoonshotAI', 'Huawei'
    ];
    return chineseCompanies.some(cn =>
        vendor.toLowerCase().includes(cn.toLowerCase())
    );
}

// 提取模型系列（去除变体名，只保留核心名称）
function getModelSeries(modelId) {
    // 移除常见的模型变体名称，保留核心系列名
    return modelId
        .replace(/-(opus|sonnet|haiku|flash|pro|ultra|turbo|standard|master|fast|lite|thinking|preview|instruct)/gi, '')
        .replace(/-\d+p$/, '') // 移除分辨率
        .replace(/-audio$/, '') // 移除audio后缀
        .toLowerCase();
}

// 提取版本号
function extractVersion(modelId) {
    // 匹配各种版本号格式：4-6, 4.6, v4-6, v4.6, 2.1, v2.1等
    const versionMatch = modelId.match(/[-_]v?(\d+(?:[.-]\d+)+)/);
    if (versionMatch) {
        return versionMatch[1].replace(/\./g, '-'); // 统一用连字符 4.6 -> 4-6
    }
    return null;
}

// 获取分组键：公司+模型系列+版本号
function getGroupKey(item) {
    const series = getModelSeries(item.model);
    const version = extractVersion(item.model);
    return `${item.company}|${series}|${version || 'no-version'}`;
}

// 处理children逻辑
function processChildren(items) {
    const processed = [];
    const used = new Set();

    // 按公司+模型+版本分组
    const byGroupKey = {};
    items.forEach((item, index) => {
        const groupKey = getGroupKey(item);
        if (!byGroupKey[groupKey]) {
            byGroupKey[groupKey] = [];
        }
        byGroupKey[groupKey].push({ ...item, originalIndex: index });
    });

    // 处理每个分组
    Object.values(byGroupKey).forEach(group => {
        if (group.length === 1) {
            // 单个模型，无需children
            const item = group[0];
            if (!used.has(item.originalIndex)) {
                processed.push({
                    rank: item.rank,
                    model: item.model,
                    company: item.company,
                    score: item.score,
                    isChinese: item.isChinese
                });
                used.add(item.originalIndex);
            }
        } else {
            // 多个模型，检查rank差异
            group.sort((a, b) => a.rank - b.rank);
            const parent = group[0];
            const children = [];

            for (let i = 1; i < group.length; i++) {
                const child = group[i];
                if (child.rank - parent.rank <= RANK_DIFF_THRESHOLD) {
                    children.push({
                        rank: child.rank,
                        model: child.model,
                        company: child.company,
                        score: child.score,
                        isChinese: child.isChinese
                    });
                    used.add(child.originalIndex);
                }
            }

            if (children.length > 0 && !used.has(parent.originalIndex)) {
                processed.push({
                    rank: parent.rank,
                    model: parent.model,
                    company: parent.company,
                    score: parent.score,
                    isChinese: parent.isChinese,
                    collapsible: true,
                    children: children
                });
                used.add(parent.originalIndex);
            } else if (!used.has(parent.originalIndex)) {
                processed.push({
                    rank: parent.rank,
                    model: parent.model,
                    company: parent.company,
                    score: parent.score,
                    isChinese: parent.isChinese
                });
                used.add(parent.originalIndex);
            }

            // 处理未被归类的children
            for (let i = 1; i < group.length; i++) {
                const item = group[i];
                if (!used.has(item.originalIndex)) {
                    processed.push({
                        rank: item.rank,
                        model: item.model,
                        company: item.company,
                        score: item.score,
                        isChinese: item.isChinese
                    });
                    used.add(item.originalIndex);
                }
            }
        }
    });

    // 按原始rank排序
    return processed.sort((a, b) => a.rank - b.rank);
}

// 转换JSON文件到JS
function convertJSONToJS(jsonFilePath) {
    const jsonContent = fs.readFileSync(jsonFilePath, 'utf-8');
    const jsonData = JSON.parse(jsonContent);

    // 检查是否是有效的arena leaderboard JSON格式
    if (!jsonData.models || !Array.isArray(jsonData.models)) {
        throw new Error('Invalid JSON format: missing models array');
    }

    const items = [];

    jsonData.models.forEach(model => {
        const item = {
            rank: model.rank,
            model: model.model,
            company: model.vendor,
            score: model.score,
            isChinese: isChineseCompany(model.vendor)
        };
        items.push(item);
    });

    // 处理children逻辑
    const processedData = processChildren(items);

    // 生成文件名和标题
    const fileName = path.basename(jsonFilePath, '.json');
    const titleMap = {
        'image-to-video': 'Image to Video',
        'text-to-video': 'Text to Video',
        'text-to-image': 'Text to Image',
        'image-edit': 'Image Edit',
        'text': 'Text Models',
        'code': 'Code Models'
    };
    const iconMap = {
        'image-to-video': '🎬',
        'text-to-video': '🎥',
        'text-to-image': '🎨',
        'image-edit': '✏️',
        'text': '📝',
        'code': '💻'
    };
    const title = titleMap[fileName] || fileName;
    const icon = iconMap[fileName] || '🎬';

    // 生成JS内容
    const jsContent = `// ${title} 排行榜数据
window.rankingData = {
    title: "${title}",
    icon: "${icon}",
    rerankAfterFilter: ${RERANK_AFTER_FILTER}, // 筛选后是否重新排名
    data: ${JSON.stringify(processedData, null, 8).replace(/"([^"]+)":/g, '$1:')}
};
`;

    // 写入JS文件
    const jsFilePath = path.join(JS_DIR, `${fileName}.js`);
    fs.writeFileSync(jsFilePath, jsContent, 'utf-8');
    console.log(`✓ 已转换: ${jsonFilePath} -> ${jsFilePath}`);
}

// 生成HTML文件
function generateHTMLFiles() {
    const titleMap = {
        'image-to-video': 'Image to Video',
        'text-to-video': 'Text to Video',
        'text-to-image': 'Text to Image',
        'image-edit': 'Image Edit',
        'text': 'Text Models',
        'code': 'Code Models'
    };
    const iconMap = {
        'image-to-video': '🎬',
        'text-to-video': '🎥',
        'text-to-image': '🎨',
        'image-edit': '✏️',
        'text': '📝',
        'code': '💻'
    };

    Object.keys(titleMap).forEach(fileName => {
        const title = titleMap[fileName];
        const icon = iconMap[fileName];

        const htmlContent = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../ranking-styles.css">
</head>
<body>
    <div class="ranking-card">
        <!-- 榜单头部 -->
        <div class="ranking-card-header">
            <div class="ranking-card-title">
                <span class="ranking-card-icon">${icon}</span>
                <span>${title}</span>
            </div>
            <div class="ranking-card-filters">
                <button class="filter-tag active" data-filter="all">全部</button>
                <button class="filter-tag" data-filter="chinese">中国</button>
            </div>
        </div>

        <!-- 榜单表格 -->
        <div class="ranking-table-wrapper">
            <table class="ranking-table">
                <thead>
                    <tr>
                        <th class="col-rank">排名</th>
                        <th class="col-model">模型</th>
                        <th class="col-company">公司</th>
                        <th class="col-score">分数</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- 数据将从JS文件加载 -->
                </tbody>
            </table>
        </div>
    </div>

    <script src="../data/${fileName}.js"></script>
    <script src="../ranking-script.js"></script>
</body>
</html>
`;

        const htmlDir = path.join(__dirname, '..', 'rankings');
        if (!fs.existsSync(htmlDir)) {
            fs.mkdirSync(htmlDir, { recursive: true });
        }
        const htmlFilePath = path.join(htmlDir, `${fileName}.html`);
        fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
        console.log(`✓ 已生成HTML: ${htmlFilePath}`);
    });
}

// 处理所有JSON文件
function convertAllJSONFiles() {
    const files = fs.readdirSync(JSON_DIR);
    const jsonFiles = files.filter(file => file.endsWith('.json'));

    console.log(`发现 ${jsonFiles.length} 个JSON文件\n`);

    jsonFiles.forEach(file => {
        const jsonPath = path.join(JSON_DIR, file);
        try {
            convertJSONToJS(jsonPath);
        } catch (error) {
            console.error(`✗ 转换失败: ${file}`, error.message);
        }
    });

    console.log(`\n完成！共转换 ${jsonFiles.length} 个文件`);

    // 生成HTML文件
    console.log(`\n开始生成HTML文件...\n`);
    //generateHTMLFiles();
}

// 生成 update.js（从所有JSON的fetched_at中取最新时间）
function generateUpdateJS() {
    const files = fs.readdirSync(JSON_DIR).filter(f => f.endsWith('.json'));
    let latestTime = null;

    files.forEach(file => {
        try {
            const content = JSON.parse(fs.readFileSync(path.join(JSON_DIR, file), 'utf-8'));
            const fetchedAt = content.meta && content.meta.fetched_at;
            if (fetchedAt) {
                const t = new Date(fetchedAt);
                if (!latestTime || t > latestTime) {
                    latestTime = t;
                }
            }
        } catch (e) {
            // 忽略单文件解析失败
        }
    });

    // 格式化为 YYYY-MM-DD
    const dateStr = latestTime
        ? `${latestTime.getFullYear()}-${String(latestTime.getMonth() + 1).padStart(2, '0')}-${String(latestTime.getDate()).padStart(2, '0')}`
        : new Date().toISOString().slice(0, 10);

    const content = `// 数据更新时间 - 由 convert-json-to-js.js 自动生成，请勿手动修改
window.lastUpdated = "${dateStr}";
`;

    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const outPath = path.join(DATA_DIR, 'update.js');
    fs.writeFileSync(outPath, content, 'utf-8');
    console.log(`✓ 已生成: ${outPath}  (更新时间: ${dateStr})`);
}

// 执行转换
convertAllJSONFiles();
generateUpdateJS();
