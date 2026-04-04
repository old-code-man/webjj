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
                logo: "./assets/logos/google.svg",
                score: 1265,
                isChinese: false
        },
        {
                rank: 2,
                model: "gpt-image-1.5-high-fidelity",
                company: "OpenAI",
                logo: "./assets/logos/openai.svg",
                score: 1244,
                isChinese: false
        },
        {
                rank: 3,
                model: "gemini-3-pro-image-preview-2k (nano-banana-pro)",
                company: "Google",
                logo: "./assets/logos/google.svg",
                score: 1233,
                isChinese: false
        },
        {
                rank: 4,
                model: "gemini-3-pro-image-preview (nano-banana-pro)",
                company: "Google",
                logo: "./assets/logos/google.svg",
                score: 1232,
                isChinese: false
        },
        {
                rank: 5,
                model: "mai-image-2",
                company: "Microsoft AI",
                logo: "./assets/logos/microsoft.svg",
                score: 1190,
                isChinese: false
        },
        {
                rank: 6,
                model: "reve-v1.5",
                company: "Reve",
                logo: "",
                score: 1177,
                isChinese: false
        },
        {
                rank: 7,
                model: "grok-imagine-image",
                company: "xAI",
                logo: "",
                score: 1173,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 9,
                                model: "grok-imagine-image-pro",
                                company: "xAI",
                                logo: "",
                                score: 1162,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 8,
                model: "flux-2-max",
                company: "Black Forest Labs",
                logo: "",
                score: 1166,
                isChinese: false
        },
        {
                rank: 10,
                model: "flux-2-flex",
                company: "Black Forest Labs",
                logo: "",
                score: 1158,
                isChinese: false
        },
        {
                rank: 11,
                model: "flux-2-pro",
                company: "Black Forest Labs",
                logo: "",
                score: 1158,
                isChinese: false
        },
        {
                rank: 12,
                model: "gemini-2.5-flash-image-preview (nano-banana)",
                company: "Google",
                logo: "./assets/logos/google.svg",
                score: 1155,
                isChinese: false
        },
        {
                rank: 13,
                model: "hunyuan-image-3.0",
                company: "Tencent",
                logo: "./assets/logos/tencent.svg",
                score: 1151,
                isChinese: true
        },
        {
                rank: 14,
                model: "flux-2-dev",
                company: "Black Forest Labs",
                logo: "",
                score: 1148,
                isChinese: false
        },
        {
                rank: 15,
                model: "imagen-ultra-4.0-generate-001",
                company: "Google",
                logo: "./assets/logos/google.svg",
                score: 1148,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 20,
                                model: "imagen-4.0-generate-001",
                                company: "Google",
                                logo: "./assets/logos/google.svg",
                                score: 1132,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 16,
                model: "seedream-4.5",
                company: "Bytedance",
                logo: "./assets/logos/bytedance.svg",
                score: 1144,
                isChinese: true
        },
        {
                rank: 17,
                model: "seedream-4-2k",
                company: "Bytedance",
                logo: "./assets/logos/bytedance.svg",
                score: 1141,
                isChinese: true
        },
        {
                rank: 18,
                model: "qwen-image-2512",
                company: "Alibaba",
                logo: "./assets/logos/alibaba.svg",
                score: 1136,
                isChinese: true
        },
        {
                rank: 19,
                model: "wan2.6-t2i",
                company: "Alibaba",
                logo: "./assets/logos/alibaba.svg",
                score: 1135,
                isChinese: true
        },
        {
                rank: 21,
                model: "wan2.5-t2i-preview",
                company: "Alibaba",
                logo: "./assets/logos/alibaba.svg",
                score: 1117,
                isChinese: true
        },
        {
                rank: 22,
                model: "seedream-4-fal",
                company: "Bytedance",
                logo: "./assets/logos/bytedance.svg",
                score: 1117,
                isChinese: true
        },
        {
                rank: 23,
                model: "gpt-image-1",
                company: "OpenAI",
                logo: "./assets/logos/openai.svg",
                score: 1115,
                isChinese: false
        },
        {
                rank: 24,
                model: "seedream-5.0-lite",
                company: "Bytedance",
                logo: "./assets/logos/bytedance.svg",
                score: 1115,
                isChinese: true
        },
        {
                rank: 25,
                model: "seedream-4-high-res-fal",
                company: "Bytedance",
                logo: "./assets/logos/bytedance.svg",
                score: 1113,
                isChinese: true
        },
        {
                rank: 26,
                model: "gpt-image-1-mini",
                company: "OpenAI",
                logo: "./assets/logos/openai.svg",
                score: 1104,
                isChinese: false
        },
        {
                rank: 27,
                model: "recraft-v4",
                company: "Recraft",
                logo: "",
                score: 1099,
                isChinese: false
        },
        {
                rank: 28,
                model: "mai-image-1",
                company: "Microsoft AI",
                logo: "./assets/logos/microsoft.svg",
                score: 1093,
                isChinese: false
        },
        {
                rank: 29,
                model: "seedream-3",
                company: "Bytedance",
                logo: "./assets/logos/bytedance.svg",
                score: 1083,
                isChinese: true
        },
        {
                rank: 30,
                model: "z-image-turbo",
                company: "Alibaba",
                logo: "./assets/logos/alibaba.svg",
                score: 1077,
                isChinese: true
        },
        {
                rank: 31,
                model: "flux-1-kontext-max",
                company: "Black Forest Labs",
                logo: "",
                score: 1075,
                isChinese: false
        },
        {
                rank: 32,
                model: "flux-2-klein-9b",
                company: "Black Forest Labs",
                logo: "",
                score: 1067,
                isChinese: false
        },
        {
                rank: 33,
                model: "qwen-image-prompt-extend",
                company: "Alibaba",
                logo: "./assets/logos/alibaba.svg",
                score: 1061,
                isChinese: true
        },
        {
                rank: 34,
                model: "flux-1-kontext-pro",
                company: "Black Forest Labs",
                logo: "",
                score: 1059,
                isChinese: false
        },
        {
                rank: 35,
                model: "imagen-3.0-generate-002",
                company: "Google",
                logo: "./assets/logos/google.svg",
                score: 1058,
                isChinese: false
        },
        {
                rank: 36,
                model: "qwen-image",
                company: "Alibaba",
                logo: "./assets/logos/alibaba.svg",
                score: 1057,
                isChinese: true
        },
        {
                rank: 37,
                model: "ideogram-v3-quality",
                company: "Ideogram",
                logo: "",
                score: 1049,
                isChinese: false
        },
        {
                rank: 38,
                model: "photon",
                company: "Luma AI",
                logo: "",
                score: 1035,
                isChinese: false
        },
        {
                rank: 39,
                model: "p-image",
                company: "Pruna",
                logo: "",
                score: 1034,
                isChinese: true
        },
        {
                rank: 40,
                model: "flux-2-klein-4b",
                company: "Black Forest Labs",
                logo: "",
                score: 1021,
                isChinese: false
        },
        {
                rank: 41,
                model: "recraft-v3",
                company: "Recraft",
                logo: "",
                score: 1021,
                isChinese: false
        },
        {
                rank: 42,
                model: "runway-gen4",
                company: "Runway",
                logo: "./assets/logos/runway.svg",
                score: 1016,
                isChinese: false
        },
        {
                rank: 43,
                model: "flux-1.1-pro",
                company: "Black Forest Labs",
                logo: "",
                score: 1016,
                isChinese: false
        },
        {
                rank: 44,
                model: "lucid-origin",
                company: "Leonardo AI",
                logo: "",
                score: 1013,
                isChinese: false
        },
        {
                rank: 45,
                model: "ideogram-v2",
                company: "Ideogram",
                logo: "",
                score: 1013,
                isChinese: false
        },
        {
                rank: 46,
                model: "glm-image",
                company: "Z.ai",
                logo: "",
                score: 1010,
                isChinese: true
        },
        {
                rank: 47,
                model: "gemini-2.0-flash-preview-image-generation",
                company: "Google",
                logo: "./assets/logos/google.svg",
                score: 975,
                isChinese: false
        },
        {
                rank: 48,
                model: "flux-1-dev-fp8",
                company: "Black Forest Labs",
                logo: "",
                score: 970,
                isChinese: false
        },
        {
                rank: 49,
                model: "dall-e-3",
                company: "OpenAI",
                logo: "./assets/logos/openai.svg",
                score: 968,
                isChinese: false
        },
        {
                rank: 50,
                model: "flux-1-kontext-dev",
                company: "Black Forest Labs",
                logo: "",
                score: 941,
                isChinese: false
        },
        {
                rank: 51,
                model: "stable-diffusion-v35-large",
                company: "Stability AI",
                logo: "./assets/logos/stability.svg",
                score: 938,
                isChinese: false
        },
        {
                rank: 52,
                model: "bagel",
                company: "Bytedance",
                logo: "./assets/logos/bytedance.svg",
                score: 898,
                isChinese: true
        }
]
};
