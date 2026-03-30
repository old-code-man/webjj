// Text to Image 排行榜数据
window.rankingData = {
    title: "Text to Image",
    icon: "🎨",
    rerankAfterFilter: false, // 筛选后是否重新排名
    data: [
        {
                rank: 1,
                model: "gemini-3.1-flash-image-preview (nano-banana-2) [web-search]",
                company: "Google",
                score: 1265,
                isChinese: false
        },
        {
                rank: 2,
                model: "gpt-image-1.5-high-fidelity",
                company: "OpenAI",
                score: 1244,
                isChinese: false
        },
        {
                rank: 3,
                model: "gemini-3-pro-image-preview-2k (nano-banana-pro)",
                company: "Google",
                score: 1233,
                isChinese: false
        },
        {
                rank: 4,
                model: "gemini-3-pro-image-preview (nano-banana-pro)",
                company: "Google",
                score: 1232,
                isChinese: false
        },
        {
                rank: 5,
                model: "mai-image-2",
                company: "Microsoft AI",
                score: 1190,
                isChinese: false
        },
        {
                rank: 6,
                model: "reve-v1.5",
                company: "Reve",
                score: 1177,
                isChinese: false
        },
        {
                rank: 7,
                model: "grok-imagine-image",
                company: "xAI",
                score: 1173,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 9,
                                model: "grok-imagine-image-pro",
                                company: "xAI",
                                score: 1162,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 8,
                model: "flux-2-max",
                company: "Black Forest Labs",
                score: 1166,
                isChinese: false
        },
        {
                rank: 10,
                model: "flux-2-flex",
                company: "Black Forest Labs",
                score: 1158,
                isChinese: false
        },
        {
                rank: 11,
                model: "flux-2-pro",
                company: "Black Forest Labs",
                score: 1158,
                isChinese: false
        },
        {
                rank: 12,
                model: "gemini-2.5-flash-image-preview (nano-banana)",
                company: "Google",
                score: 1155,
                isChinese: false
        },
        {
                rank: 13,
                model: "hunyuan-image-3.0",
                company: "Tencent",
                score: 1151,
                isChinese: true
        },
        {
                rank: 14,
                model: "flux-2-dev",
                company: "Black Forest Labs",
                score: 1148,
                isChinese: false
        },
        {
                rank: 15,
                model: "imagen-ultra-4.0-generate-001",
                company: "Google",
                score: 1148,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 20,
                                model: "imagen-4.0-generate-001",
                                company: "Google",
                                score: 1132,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 16,
                model: "seedream-4.5",
                company: "Bytedance",
                score: 1144,
                isChinese: true
        },
        {
                rank: 17,
                model: "seedream-4-2k",
                company: "Bytedance",
                score: 1141,
                isChinese: true
        },
        {
                rank: 18,
                model: "qwen-image-2512",
                company: "Alibaba",
                score: 1136,
                isChinese: true
        },
        {
                rank: 19,
                model: "wan2.6-t2i",
                company: "Alibaba",
                score: 1135,
                isChinese: true
        },
        {
                rank: 21,
                model: "wan2.5-t2i-preview",
                company: "Alibaba",
                score: 1117,
                isChinese: true
        },
        {
                rank: 22,
                model: "seedream-4-fal",
                company: "Bytedance",
                score: 1117,
                isChinese: true
        },
        {
                rank: 23,
                model: "gpt-image-1",
                company: "OpenAI",
                score: 1115,
                isChinese: false
        },
        {
                rank: 24,
                model: "seedream-5.0-lite",
                company: "Bytedance",
                score: 1115,
                isChinese: true
        },
        {
                rank: 25,
                model: "seedream-4-high-res-fal",
                company: "Bytedance",
                score: 1113,
                isChinese: true
        },
        {
                rank: 26,
                model: "gpt-image-1-mini",
                company: "OpenAI",
                score: 1104,
                isChinese: false
        },
        {
                rank: 27,
                model: "recraft-v4",
                company: "Recraft",
                score: 1099,
                isChinese: false
        },
        {
                rank: 28,
                model: "mai-image-1",
                company: "Microsoft AI",
                score: 1093,
                isChinese: false
        },
        {
                rank: 29,
                model: "seedream-3",
                company: "Bytedance",
                score: 1083,
                isChinese: true
        },
        {
                rank: 30,
                model: "z-image-turbo",
                company: "Alibaba",
                score: 1077,
                isChinese: true
        },
        {
                rank: 31,
                model: "flux-1-kontext-max",
                company: "Black Forest Labs",
                score: 1075,
                isChinese: false
        },
        {
                rank: 32,
                model: "flux-2-klein-9b",
                company: "Black Forest Labs",
                score: 1067,
                isChinese: false
        },
        {
                rank: 33,
                model: "qwen-image-prompt-extend",
                company: "Alibaba",
                score: 1061,
                isChinese: true
        },
        {
                rank: 34,
                model: "flux-1-kontext-pro",
                company: "Black Forest Labs",
                score: 1059,
                isChinese: false
        },
        {
                rank: 35,
                model: "imagen-3.0-generate-002",
                company: "Google",
                score: 1058,
                isChinese: false
        },
        {
                rank: 36,
                model: "qwen-image",
                company: "Alibaba",
                score: 1057,
                isChinese: true
        },
        {
                rank: 37,
                model: "ideogram-v3-quality",
                company: "Ideogram",
                score: 1049,
                isChinese: false
        },
        {
                rank: 38,
                model: "photon",
                company: "Luma AI",
                score: 1035,
                isChinese: false
        },
        {
                rank: 39,
                model: "p-image",
                company: "Pruna",
                score: 1034,
                isChinese: true
        },
        {
                rank: 40,
                model: "flux-2-klein-4b",
                company: "Black Forest Labs",
                score: 1021,
                isChinese: false
        },
        {
                rank: 41,
                model: "recraft-v3",
                company: "Recraft",
                score: 1021,
                isChinese: false
        },
        {
                rank: 42,
                model: "runway-gen4",
                company: "Runway",
                score: 1016,
                isChinese: false
        },
        {
                rank: 43,
                model: "flux-1.1-pro",
                company: "Black Forest Labs",
                score: 1016,
                isChinese: false
        },
        {
                rank: 44,
                model: "lucid-origin",
                company: "Leonardo AI",
                score: 1013,
                isChinese: false
        },
        {
                rank: 45,
                model: "ideogram-v2",
                company: "Ideogram",
                score: 1013,
                isChinese: false
        },
        {
                rank: 46,
                model: "glm-image",
                company: "Z.ai",
                score: 1010,
                isChinese: false
        },
        {
                rank: 47,
                model: "gemini-2.0-flash-preview-image-generation",
                company: "Google",
                score: 975,
                isChinese: false
        },
        {
                rank: 48,
                model: "flux-1-dev-fp8",
                company: "Black Forest Labs",
                score: 970,
                isChinese: false
        },
        {
                rank: 49,
                model: "dall-e-3",
                company: "OpenAI",
                score: 968,
                isChinese: false
        },
        {
                rank: 50,
                model: "flux-1-kontext-dev",
                company: "Black Forest Labs",
                score: 941,
                isChinese: false
        },
        {
                rank: 51,
                model: "stable-diffusion-v35-large",
                company: "Stability AI",
                score: 938,
                isChinese: false
        },
        {
                rank: 52,
                model: "bagel",
                company: "Bytedance",
                score: 898,
                isChinese: true
        }
]
};
