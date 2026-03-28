const fs = require('fs');
const path = require('path');

// 配置
const CSV_DIR = './csv';
const JS_DIR = './js';
const RANK_DIFF_THRESHOLD = 10; // rank差异阈值

// 确保输出目录存在
if (!fs.existsSync(JS_DIR)) {
    fs.mkdirSync(JS_DIR, { recursive: true });
}

// 解析CSV行
function parseCSVLine(line) {
    const parts = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            parts.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    parts.push(current.trim());
    return parts;
}

// 从name字段中提取模型名和公司名
function parseNameField(nameField) {
    // 格式: grok-imagine-video-720pxAI · Proprietary
    const match = nameField.match(/^(.+?)([A-Z][a-zA-Z\s]+)\s*·\s*(.+)$/);
    if (match) {
        const modelId = match[1].trim();
        const company = match[2].trim();
        const license = match[3].trim();
        return { modelId, company, license };
    }
    return { modelId: nameField, company: 'Unknown', license: '' };
}

// 判断是否是中国公司
function isChineseCompany(company) {
    const chineseCompanies = [
        'Alibaba', 'Tencent', 'Baidu', 'ByteDance', 'Bytedance',
        'KlingAI', 'Shengshu', 'MiniMax', 'Minimax',
        'Zhipu', 'DeepSeek', 'Moonshot', 'StepFun',
        '01.AI', 'Lingyiwanwu', 'SenseTime', 'iFLYTEK',
        'THUDM', 'ModelBest', 'Pruna', 'Xiaomi',
        'KwaiKAT', 'Kwai', 'MoonshotAI', 'Huawei'
    ];
    return chineseCompanies.some(cn =>
        company.toLowerCase().includes(cn.toLowerCase())
    );
}

// 从score字段中提取分数
function parseScoreField(scoreField) {
    // 格式: "1404±6 | 66,616" 或 1404±6 | 66,616
    const cleaned = scoreField.replace(/"/g, '');
    const match = cleaned.match(/^(\d+(?:\.\d+)?)/);
    return match ? parseFloat(match[1]) : 0;
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

// 转换CSV文件到JS
function convertCSVToJS(csvFilePath) {
    const csvContent = fs.readFileSync(csvFilePath, 'utf-8');
    const lines = csvContent.split('\n').filter(line => line.trim());

    // 跳过标题行
    const dataLines = lines.slice(1);

    const items = [];

    dataLines.forEach(line => {
        const parts = parseCSVLine(line);
        if (parts.length >= 4) {
            const rank = parseInt(parts[0]);
            // parts[1] 是ID，跳过
            const { modelId, company, license } = parseNameField(parts[2]);
            const score = parseScoreField(parts[3]);
            const isChinese = isChineseCompany(company);

            items.push({
                rank,
                model: modelId,
                company,
                score,
                isChinese
            });
        }
    });

    // 处理children逻辑
    const processedData = processChildren(items);

    // 生成文件名和标题
    const fileName = path.basename(csvFilePath, '.csv');
    const titleMap = {
        'image-to-video': 'Image to Video',
        'text-to-video': 'Text to Video',
        'txttoimage': 'Text to Image',
        'image-edit': 'Image Edit',
        'text': 'Text Models',
        'code': 'Code Models'
    };
    const iconMap = {
        'image-to-video': '🎬',
        'text-to-video': '🎥',
        'txttoimage': '🎨',
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
    data: ${JSON.stringify(processedData, null, 8).replace(/"([^"]+)":/g, '$1:')}
};
`;

    // 写入JS文件
    const jsFilePath = path.join(JS_DIR, `${fileName}.js`);
    fs.writeFileSync(jsFilePath, jsContent, 'utf-8');
    console.log(`✓ 已转换: ${csvFilePath} -> ${jsFilePath}`);
}

// 生成HTML文件
function generateHTMLFiles() {
    const titleMap = {
        'image-to-video': 'Image to Video',
        'text-to-video': 'Text to Video',
        'txttoimage': 'Text to Image',
        'image-edit': 'Image Edit',
        'text': 'Text Models',
        'code': 'Code Models'
    };
    const iconMap = {
        'image-to-video': '🎬',
        'text-to-video': '🎥',
        'txttoimage': '🎨',
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

// 处理所有CSV文件
function convertAllCSVFiles() {
    const files = fs.readdirSync(CSV_DIR);
    const csvFiles = files.filter(file => file.endsWith('.csv'));

    console.log(`发现 ${csvFiles.length} 个CSV文件\n`);

    csvFiles.forEach(file => {
        const csvPath = path.join(CSV_DIR, file);
        try {
            convertCSVToJS(csvPath);
        } catch (error) {
            console.error(`✗ 转换失败: ${file}`, error.message);
        }
    });

    console.log(`\n完成！共转换 ${csvFiles.length} 个文件`);

    // 生成HTML文件
    console.log(`\n开始生成HTML文件...\n`);
    generateHTMLFiles();
}

// 执行转换
convertAllCSVFiles();
