// Text to Image 排行榜数据
window.rankingData = {
    title: "Text to Image",
    icon: "🎨",
    rerankAfterFilter: false, // 筛选后是否重新排名
    data: [
        {
                rank: 1,
                model: "gpt-image-2 (medium)",
                company: "OpenAI",
                logo: "",
                score: 1507,
                isChinese: false
        },
        {
                rank: 2,
                model: "gemini-3.1-flash-image-preview (nano-banana-2) [web-search]",
                company: "Google",
                logo: "",
                score: 1271,
                isChinese: false
        },
        {
                rank: 3,
                model: "gemini-3-pro-image-preview-2k (nano-banana-pro)",
                company: "Google",
                logo: "",
                score: 1244,
                isChinese: false
        },
        {
                rank: 4,
                model: "gpt-image-1.5-high-fidelity",
                company: "OpenAI",
                logo: "",
                score: 1242,
                isChinese: false
        },
        {
                rank: 5,
                model: "gemini-3-pro-image-preview (nano-banana-pro)",
                company: "Google",
                logo: "",
                score: 1232,
                isChinese: false
        },
        {
                rank: 6,
                model: "mai-image-2",
                company: "Microsoft AI",
                logo: "",
                score: 1183,
                isChinese: false
        },
        {
                rank: 7,
                model: "reve-v1.5",
                company: "Reve",
                logo: "",
                score: 1177,
                isChinese: false
        },
        {
                rank: 8,
                model: "grok-imagine-image",
                company: "xAI",
                logo: "",
                score: 1170,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 11,
                                model: "grok-imagine-image-pro",
                                company: "xAI",
                                logo: "",
                                score: 1158,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 9,
                model: "qwen-image-2.0-pro-2026-04-22",
                company: "Alibaba",
                logo: "",
                score: 1168,
                isChinese: true
        },
        {
                rank: 10,
                model: "flux-2-max",
                company: "Black Forest Labs",
                logo: "",
                score: 1166,
                isChinese: false
        },
        {
                rank: 12,
                model: "flux-2-pro",
                company: "Black Forest Labs",
                logo: "",
                score: 1157,
                isChinese: false
        },
        {
                rank: 13,
                model: "flux-2-flex",
                company: "Black Forest Labs",
                logo: "",
                score: 1156,
                isChinese: false
        },
        {
                rank: 14,
                model: "gemini-2.5-flash-image-preview (nano-banana)",
                company: "Google",
                logo: "",
                score: 1152,
                isChinese: false
        },
        {
                rank: 15,
                model: "hunyuan-image-3.0",
                company: "Tencent",
                logo: "",
                score: 1151,
                isChinese: true
        },
        {
                rank: 16,
                model: "flux-2-dev",
                company: "Black Forest Labs",
                logo: "",
                score: 1149,
                isChinese: false
        },
        {
                rank: 17,
                model: "imagen-ultra-4.0-generate-001",
                company: "Google",
                logo: "",
                score: 1148,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 22,
                                model: "imagen-4.0-generate-001",
                                company: "Google",
                                logo: "",
                                score: 1130,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 18,
                model: "seedream-4.5",
                company: "Bytedance",
                logo: "",
                score: 1142,
                isChinese: true
        },
        {
                rank: 19,
                model: "seedream-4-2k",
                company: "Bytedance",
                logo: "",
                score: 1140,
                isChinese: true
        },
        {
                rank: 20,
                model: "qwen-image-2512",
                company: "Alibaba",
                logo: "",
                score: 1133,
                isChinese: true
        },
        {
                rank: 21,
                model: "wan2.6-t2i",
                company: "Alibaba",
                logo: "",
                score: 1132,
                isChinese: true
        },
        {
                rank: 23,
                model: "wan2.5-t2i-preview",
                company: "Alibaba",
                logo: "",
                score: 1117,
                isChinese: true
        },
        {
                rank: 24,
                model: "seedream-5.0-lite",
                company: "Bytedance",
                logo: "",
                score: 1117,
                isChinese: true
        },
        {
                rank: 25,
                model: "qwen-image-2.0-2026-03-03",
                company: "Alibaba",
                logo: "",
                score: 1117,
                isChinese: true
        },
        {
                rank: 26,
                model: "seedream-4-fal",
                company: "Bytedance",
                logo: "",
                score: 1116,
                isChinese: true
        },
        {
                rank: 27,
                model: "gpt-image-1",
                company: "OpenAI",
                logo: "",
                score: 1115,
                isChinese: false
        },
        {
                rank: 28,
                model: "seedream-4-high-res-fal",
                company: "Bytedance",
                logo: "",
                score: 1112,
                isChinese: true
        },
        {
                rank: 29,
                model: "recraft-v4",
                company: "Recraft",
                logo: "",
                score: 1109,
                isChinese: false
        },
        {
                rank: 30,
                model: "gpt-image-1-mini",
                company: "OpenAI",
                logo: "",
                score: 1105,
                isChinese: false
        },
        {
                rank: 31,
                model: "wan2.7-image-pro",
                company: "Alibaba",
                logo: "",
                score: 1104,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 32,
                                model: "wan2.7-image",
                                company: "Alibaba",
                                logo: "",
                                score: 1099,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 33,
                model: "mai-image-1",
                company: "Microsoft AI",
                logo: "",
                score: 1093,
                isChinese: false
        },
        {
                rank: 34,
                model: "z-image-turbo",
                company: "Alibaba",
                logo: "",
                score: 1083,
                isChinese: true
        },
        {
                rank: 35,
                model: "seedream-3",
                company: "Bytedance",
                logo: "",
                score: 1082,
                isChinese: true
        },
        {
                rank: 36,
                model: "flux-1-kontext-max",
                company: "Black Forest Labs",
                logo: "",
                score: 1074,
                isChinese: false
        },
        {
                rank: 37,
                model: "flux-2-klein-9b",
                company: "Black Forest Labs",
                logo: "",
                score: 1069,
                isChinese: false
        },
        {
                rank: 38,
                model: "qwen-image-prompt-extend",
                company: "Alibaba",
                logo: "",
                score: 1060,
                isChinese: true
        },
        {
                rank: 39,
                model: "flux-1-kontext-pro",
                company: "Black Forest Labs",
                logo: "",
                score: 1059,
                isChinese: false
        },
        {
                rank: 40,
                model: "imagen-3.0-generate-002",
                company: "Google",
                logo: "",
                score: 1058,
                isChinese: false
        },
        {
                rank: 41,
                model: "qwen-image",
                company: "Alibaba",
                logo: "",
                score: 1057,
                isChinese: true
        },
        {
                rank: 42,
                model: "ideogram-v3-quality",
                company: "Ideogram",
                logo: "",
                score: 1049,
                isChinese: false
        },
        {
                rank: 43,
                model: "p-image",
                company: "Pruna",
                logo: "",
                score: 1036,
                isChinese: true
        },
        {
                rank: 44,
                model: "photon",
                company: "Luma AI",
                logo: "",
                score: 1035,
                isChinese: false
        },
        {
                rank: 45,
                model: "flux-2-klein-4b",
                company: "Black Forest Labs",
                logo: "",
                score: 1027,
                isChinese: false
        },
        {
                rank: 46,
                model: "runway-gen4",
                company: "Runway",
                logo: "",
                score: 1026,
                isChinese: false
        },
        {
                rank: 47,
                model: "recraft-v3",
                company: "Recraft",
                logo: "",
                score: 1021,
                isChinese: false
        },
        {
                rank: 48,
                model: "flux-1.1-pro",
                company: "Black Forest Labs",
                logo: "",
                score: 1016,
                isChinese: false
        },
        {
                rank: 49,
                model: "ideogram-v2",
                company: "Ideogram",
                logo: "",
                score: 1013,
                isChinese: false
        },
        {
                rank: 50,
                model: "lucid-origin",
                company: "Leonardo AI",
                logo: "",
                score: 1013,
                isChinese: false
        },
        {
                rank: 51,
                model: "glm-image",
                company: "Z.ai",
                logo: "",
                score: 1011,
                isChinese: true
        },
        {
                rank: 52,
                model: "gemini-2.0-flash-preview-image-generation",
                company: "Google",
                logo: "",
                score: 975,
                isChinese: false
        },
        {
                rank: 53,
                model: "flux-1-dev-fp8",
                company: "Black Forest Labs",
                logo: "",
                score: 969,
                isChinese: false
        },
        {
                rank: 54,
                model: "dall-e-3",
                company: "OpenAI",
                logo: "",
                score: 968,
                isChinese: false
        },
        {
                rank: 55,
                model: "flux-1-kontext-dev",
                company: "Black Forest Labs",
                logo: "",
                score: 940,
                isChinese: false
        },
        {
                rank: 56,
                model: "stable-diffusion-v35-large",
                company: "Stability AI",
                logo: "",
                score: 938,
                isChinese: false
        },
        {
                rank: 57,
                model: "bagel",
                company: "Bytedance",
                logo: "",
                score: 898,
                isChinese: true
        }
]
};
