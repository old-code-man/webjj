// Image Edit 排行榜数据
window.rankingData = {
    title: "Image Edit",
    icon: "✏️",
    rerankAfterFilter: false, // 筛选后是否重新排名
    data: [
        {
                rank: 1,
                model: "chatgpt-image-latest-high-fidelity (20251216)",
                company: "OpenAI",
                score: 1398,
                isChinese: false
        },
        {
                rank: 2,
                model: "gemini-3-pro-image-preview-2k (nano-banana-pro)",
                company: "Google",
                score: 1391,
                isChinese: false
        },
        {
                rank: 3,
                model: "gemini-3-pro-image-preview (nano-banana-pro)",
                company: "Google",
                score: 1389,
                isChinese: false
        },
        {
                rank: 4,
                model: "gemini-3.1-flash-image-preview (nano-banana-2) [web-search]",
                company: "Google",
                score: 1387,
                isChinese: false
        },
        {
                rank: 5,
                model: "gpt-image-1.5-high-fidelity",
                company: "OpenAI",
                score: 1381,
                isChinese: false
        },
        {
                rank: 6,
                model: "grok-imagine-image",
                company: "xAI",
                score: 1338,
                isChinese: false
        },
        {
                rank: 7,
                model: "grok-imagine-image-pro (20260207)",
                company: "xAI",
                score: 1320,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 8,
                                model: "grok-imagine-image (20260207)",
                                company: "xAI",
                                score: 1314,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 9,
                model: "seedream-4.5",
                company: "Bytedance",
                score: 1307,
                isChinese: true
        },
        {
                rank: 10,
                model: "hunyuan-image-3.0-instruct",
                company: "Tencent",
                score: 1307,
                isChinese: true
        },
        {
                rank: 11,
                model: "gemini-2.5-flash-image-preview (nano-banana)",
                company: "Google",
                score: 1305,
                isChinese: false
        },
        {
                rank: 12,
                model: "seedream-5.0-lite",
                company: "Bytedance",
                score: 1300,
                isChinese: true
        },
        {
                rank: 13,
                model: "seedream-4-2k",
                company: "Bytedance",
                score: 1276,
                isChinese: true
        },
        {
                rank: 14,
                model: "flux-2-max",
                company: "Black Forest Labs",
                score: 1263,
                isChinese: false
        },
        {
                rank: 15,
                model: "reve-v1.1",
                company: "Reve",
                score: 1261,
                isChinese: false
        },
        {
                rank: 16,
                model: "flux-2-pro",
                company: "Black Forest Labs",
                score: 1244,
                isChinese: false
        },
        {
                rank: 17,
                model: "reve-v1",
                company: "Reve",
                score: 1239,
                isChinese: false
        },
        {
                rank: 18,
                model: "qwen-image-edit",
                company: "Alibaba",
                score: 1237,
                isChinese: true
        },
        {
                rank: 19,
                model: "qwen-image-edit-2511",
                company: "Alibaba",
                score: 1234,
                isChinese: true
        },
        {
                rank: 20,
                model: "seedream-4-high-res-fal",
                company: "Bytedance",
                score: 1230,
                isChinese: true
        },
        {
                rank: 21,
                model: "flux-2-flex",
                company: "Black Forest Labs",
                score: 1230,
                isChinese: false
        },
        {
                rank: 22,
                model: "wan2.6-image",
                company: "Alibaba",
                score: 1228,
                isChinese: true
        },
        {
                rank: 23,
                model: "flux-2-dev",
                company: "Black Forest Labs",
                score: 1227,
                isChinese: false
        },
        {
                rank: 24,
                model: "flux-2-klein-9b",
                company: "Black Forest Labs",
                score: 1226,
                isChinese: false
        },
        {
                rank: 25,
                model: "seedream-4-fal",
                company: "Bytedance",
                score: 1215,
                isChinese: true
        },
        {
                rank: 26,
                model: "p-image-edit",
                company: "Pruna",
                score: 1211,
                isChinese: true
        },
        {
                rank: 27,
                model: "reve-v1.1-fast",
                company: "Reve",
                score: 1210,
                isChinese: false
        },
        {
                rank: 28,
                model: "reve-edit-fast",
                company: "Reve",
                score: 1203,
                isChinese: false
        },
        {
                rank: 29,
                model: "flux-2-klein-4b",
                company: "Black Forest Labs",
                score: 1189,
                isChinese: false
        },
        {
                rank: 30,
                model: "wan2.5-i2i-preview",
                company: "Alibaba",
                score: 1186,
                isChinese: true
        },
        {
                rank: 31,
                model: "flux-1-kontext-max",
                company: "Black Forest Labs",
                score: 1186,
                isChinese: false
        },
        {
                rank: 32,
                model: "flux-1-kontext-pro",
                company: "Black Forest Labs",
                score: 1180,
                isChinese: false
        },
        {
                rank: 33,
                model: "flux-1-kontext-dev",
                company: "Black Forest Labs",
                score: 1154,
                isChinese: false
        },
        {
                rank: 34,
                model: "seededit-3.0",
                company: "Bytedance",
                score: 1144,
                isChinese: true
        },
        {
                rank: 35,
                model: "gpt-image-1",
                company: "OpenAI",
                score: 1143,
                isChinese: false
        },
        {
                rank: 36,
                model: "gpt-image-1-mini",
                company: "OpenAI",
                score: 1126,
                isChinese: false
        },
        {
                rank: 37,
                model: "gemini-2.0-flash-preview-image-generation",
                company: "Google",
                score: 1085,
                isChinese: false
        },
        {
                rank: 38,
                model: "bagel",
                company: "Bytedance",
                score: 1030,
                isChinese: true
        },
        {
                rank: 39,
                model: "step1x-edit",
                company: "StepFun",
                score: 1003,
                isChinese: true
        }
]
};
