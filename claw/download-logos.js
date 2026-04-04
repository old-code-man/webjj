const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Logo输出目录
const LOGO_DIR = path.join(__dirname, '..', 'assets', 'logos');

// 公司列表（从JSON数据中提取的公司名）
const COMPANIES = [
    // 国外公司
    'Anthropic', 'OpenAI', 'Google', 'Meta', 'Microsoft', 'xAI',
    'Mistral', 'Cohere', 'Stability', 'Midjourney', 'Runway',
    'Pika', 'Luma', 'Sora',
    // 中国公司
    'Alibaba', 'Tencent', 'Baidu', 'ByteDance',
    'KlingAI', 'Shengshu', 'MiniMax', 'Zhipu',
    'DeepSeek', 'Moonshot', 'StepFun', '01.AI',
    'SenseTime', 'iFLYTEK', 'THUDM', 'ModelBest',
    'Xiaomi', 'Kwai', 'Huawei', 'Pruna'
];

// Simple Icons CDN - 开源品牌SVG图标库
// https://simpleicons.org/
const SIMPLE_ICONS_MAP = {
    'Google': 'google',
    'Meta': 'meta',
    'Microsoft': 'microsoft',
    'Alibaba': 'alibaba',
    'Tencent': 'tencent',
    'Baidu': 'baidu',
    'Xiaomi': 'xiaomi',
    'Huawei': 'huawei',
    'DeepSeek': 'deepseek',
    'ByteDance': 'bytedance',
    'Moonshot': 'moonshot',
    'SenseTime': 'sensetime',
    'Stability': 'stabilityai',
    'Mistral': 'mistral',
    'Cohere': 'cohere',
    'Runway': 'runway',
    'Midjourney': 'midjourney',
    'OpenAI': 'openai',
    'Anthropic': 'anthropic',
    'Kwai': 'kuaishou'
};

// Clearbit Logo API - 根据域名获取公司logo
// https://clearbit.com/logo-api
const CLEARBIT_DOMAIN_MAP = {
    'Anthropic': 'anthropic.com',
    'OpenAI': 'openai.com',
    'Google': 'google.com',
    'Meta': 'meta.com',
    'Microsoft': 'microsoft.com',
    'xAI': 'x.ai',
    'Mistral': 'mistral.ai',
    'Cohere': 'cohere.com',
    'Stability': 'stability.ai',
    'Midjourney': 'midjourney.com',
    'Runway': 'runwayml.com',
    'Pika': 'pika.art',
    'Luma': 'lumalabs.ai',
    'Sora': 'openai.com',
    'Alibaba': 'alibaba.com',
    'Tencent': 'tencent.com',
    'Baidu': 'baidu.com',
    'ByteDance': 'bytedance.com',
    'KlingAI': 'klingai.com',
    'Shengshu': 'shengshu.ai',
    'MiniMax': 'minimaxi.com',
    'Zhipu': 'zhipuai.cn',
    'DeepSeek': 'deepseek.com',
    'Moonshot': 'moonshot.cn',
    'StepFun': 'stepfun.com',
    '01.AI': '01.ai',
    'SenseTime': 'sensetime.com',
    'iFLYTEK': 'iflytek.com',
    'THUDM': 'tsinghua.edu.cn',
    'ModelBest': 'modelbest.cn',
    'Xiaomi': 'xiaomi.com',
    'Kwai': 'kuaishou.com',
    'Huawei': 'huawei.com',
    'Pruna': 'pruna.ai'
};

// 确保目录存在
if (!fs.existsSync(LOGO_DIR)) {
    fs.mkdirSync(LOGO_DIR, { recursive: true });
}

// 下载函数
function downloadFile(url, outputPath) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;
        const file = fs.createWriteStream(outputPath);

        protocol.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        }, (response) => {
            // 处理重定向
            if (response.statusCode === 301 || response.statusCode === 302) {
                const redirectUrl = response.headers.location;
                downloadFile(redirectUrl, outputPath).then(resolve).catch(reject);
                return;
            }

            if (response.statusCode !== 200) {
                reject(new Error(`HTTP ${response.statusCode}`));
                return;
            }

            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(outputPath, () => {});
            reject(err);
        });
    });
}

// 检查文件是否有效（非空）
function isValidFile(filePath) {
    try {
        const stats = fs.statSync(filePath);
        return stats.size > 0;
    } catch {
        return false;
    }
}

// 下载单个logo
async function downloadLogo(company) {
    const slug = SIMPLE_ICONS_MAP[company];
    const domain = CLEARBIT_DOMAIN_MAP[company];

    // 优先尝试 Simple Icons (SVG格式)
    if (slug) {
        const simpleIconsUrl = `https://cdn.simpleicons.org/${slug}`;
        const svgPath = path.join(LOGO_DIR, `${company.toLowerCase().replace(/[^a-z0-9]/g, '')}.svg`);

        try {
            await downloadFile(simpleIconsUrl, svgPath);
            if (isValidFile(svgPath)) {
                console.log(`✓ ${company}: 从 Simple Icons 下载成功 (SVG)`);
                return true;
            }
        } catch (e) {
            // Simple Icons 失败，尝试其他方式
        }
    }

    // 尝试 Clearbit Logo API (PNG格式)
    if (domain) {
        const clearbitUrl = `https://logo.clearbit.com/${domain}?size=128`;
        const pngPath = path.join(LOGO_DIR, `${company.toLowerCase().replace(/[^a-z0-9]/g, '')}.png`);

        try {
            await downloadFile(clearbitUrl, pngPath);
            if (isValidFile(pngPath)) {
                console.log(`✓ ${company}: 从 Clearbit 下载成功 (PNG)`);
                return true;
            }
        } catch (e) {
            // Clearbit 也失败
        }
    }

    console.log(`✗ ${company}: 下载失败`);
    return false;
}

// 主函数
async function main() {
    console.log('开始下载公司商标...\n');
    console.log(`目标目录: ${LOGO_DIR}\n`);

    let success = 0;
    let failed = 0;

    for (const company of COMPANIES) {
        const result = await downloadLogo(company);
        if (result) {
            success++;
        } else {
            failed++;
        }
        // 添加延迟避免请求过快
        await new Promise(resolve => setTimeout(resolve, 200));
    }

    console.log(`\n下载完成！成功: ${success}, 失败: ${failed}`);
    console.log(`\n商标文件保存在: ${LOGO_DIR}`);
}

main().catch(console.error);
