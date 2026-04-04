// Code Models 排行榜数据
window.rankingData = {
    title: "Code Models",
    icon: "💻",
    rerankAfterFilter: false, // 筛选后是否重新排名
    data: [
        {
                rank: 1,
                model: "claude-opus-4-6-thinking",
                company: "Anthropic",
                logo: "./assets/logos/anthropic.svg",
                score: 1546,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 2,
                                model: "claude-opus-4-6",
                                company: "Anthropic",
                                logo: "./assets/logos/anthropic.svg",
                                score: 1543,
                                isChinese: false
                        },
                        {
                                rank: 3,
                                model: "claude-sonnet-4-6",
                                company: "Anthropic",
                                logo: "./assets/logos/anthropic.svg",
                                score: 1521,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 4,
                model: "claude-opus-4-5-20251101-thinking-32k",
                company: "Anthropic",
                logo: "./assets/logos/anthropic.svg",
                score: 1491,
                isChinese: false
        },
        {
                rank: 5,
                model: "claude-opus-4-5-20251101",
                company: "Anthropic",
                logo: "./assets/logos/anthropic.svg",
                score: 1465,
                isChinese: false
        },
        {
                rank: 6,
                model: "gpt-5.4-high (codex-harness)",
                company: "OpenAI",
                logo: "./assets/logos/openai.svg",
                score: 1457,
                isChinese: false
        },
        {
                rank: 7,
                model: "gemini-3.1-pro-preview",
                company: "Google",
                logo: "./assets/logos/google.svg",
                score: 1456,
                isChinese: false
        },
        {
                rank: 8,
                model: "qwen3.6-plus-preview",
                company: "Alibaba",
                logo: "./assets/logos/alibaba.svg",
                score: 1454,
                isChinese: true
        },
        {
                rank: 9,
                model: "glm-5",
                company: "Z.ai",
                logo: "",
                score: 1441,
                isChinese: true
        },
        {
                rank: 10,
                model: "glm-4.7",
                company: "Z.ai",
                logo: "",
                score: 1439,
                isChinese: true
        },
        {
                rank: 11,
                model: "gemini-3-pro",
                company: "Google",
                logo: "./assets/logos/google.svg",
                score: 1438,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 12,
                                model: "gemini-3-flash",
                                company: "Google",
                                logo: "./assets/logos/google.svg",
                                score: 1436,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 13,
                model: "mimo-v2-pro",
                company: "Xiaomi",
                logo: "./assets/logos/xiaomi.svg",
                score: 1433,
                isChinese: true
        },
        {
                rank: 14,
                model: "kimi-k2.5-thinking",
                company: "Moonshot",
                logo: "./assets/logos/moonshot.svg",
                score: 1429,
                isChinese: true
        },
        {
                rank: 15,
                model: "minimax-m2.7",
                company: "MiniMax",
                logo: "",
                score: 1428,
                isChinese: true
        },
        {
                rank: 16,
                model: "gpt-5.4-medium (codex-harness)",
                company: "OpenAI",
                logo: "./assets/logos/openai.svg",
                score: 1427,
                isChinese: false
        },
        {
                rank: 17,
                model: "kimi-k2.5-instant",
                company: "Moonshot",
                logo: "./assets/logos/moonshot.svg",
                score: 1408,
                isChinese: true
        },
        {
                rank: 18,
                model: "gpt-5.3-codex (codex-harness)",
                company: "OpenAI",
                logo: "./assets/logos/openai.svg",
                score: 1407,
                isChinese: false
        },
        {
                rank: 19,
                model: "gpt-5.2",
                company: "OpenAI",
                logo: "./assets/logos/openai.svg",
                score: 1403,
                isChinese: false
        },
        {
                rank: 20,
                model: "minimax-m2.5",
                company: "MiniMax",
                logo: "",
                score: 1396,
                isChinese: true
        },
        {
                rank: 21,
                model: "gpt-5-medium",
                company: "OpenAI",
                logo: "./assets/logos/openai.svg",
                score: 1392,
                isChinese: false
        },
        {
                rank: 22,
                model: "minimax-m2.1-preview",
                company: "MiniMax",
                logo: "",
                score: 1391,
                isChinese: true
        },
        {
                rank: 23,
                model: "gemini-3-flash (thinking-minimal)",
                company: "Google",
                logo: "./assets/logos/google.svg",
                score: 1391,
                isChinese: false
        },
        {
                rank: 24,
                model: "gpt-5.1-medium",
                company: "OpenAI",
                logo: "./assets/logos/openai.svg",
                score: 1390,
                isChinese: false
        },
        {
                rank: 25,
                model: "claude-sonnet-4-5-20250929-thinking-32k",
                company: "Anthropic",
                logo: "./assets/logos/anthropic.svg",
                score: 1388,
                isChinese: false
        },
        {
                rank: 26,
                model: "qwen3.5-397b-a17b",
                company: "Alibaba",
                logo: "./assets/logos/alibaba.svg",
                score: 1386,
                isChinese: true
        },
        {
                rank: 27,
                model: "claude-sonnet-4-5-20250929",
                company: "Anthropic",
                logo: "./assets/logos/anthropic.svg",
                score: 1386,
                isChinese: false
        },
        {
                rank: 28,
                model: "grok-4.20-beta-0309-reasoning",
                company: "xAI",
                logo: "",
                score: 1386,
                isChinese: false
        },
        {
                rank: 29,
                model: "gpt-5.4-mini-high",
                company: "OpenAI",
                logo: "./assets/logos/openai.svg",
                score: 1385,
                isChinese: false
        },
        {
                rank: 30,
                model: "claude-opus-4-1-20250805",
                company: "Anthropic",
                logo: "./assets/logos/anthropic.svg",
                score: 1384,
                isChinese: false
        },
        {
                rank: 31,
                model: "deepseek-v3.2-thinking",
                company: "DeepSeek",
                logo: "./assets/logos/deepseek.svg",
                score: 1368,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 40,
                                model: "deepseek-v3.2",
                                company: "DeepSeek",
                                logo: "./assets/logos/deepseek.svg",
                                score: 1327,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 32,
                model: "qwen3.5-122b-a10b",
                company: "Alibaba",
                logo: "./assets/logos/alibaba.svg",
                score: 1362,
                isChinese: true
        },
        {
                rank: 33,
                model: "glm-4.6",
                company: "Z.ai",
                logo: "",
                score: 1354,
                isChinese: true
        },
        {
                rank: 34,
                model: "qwen3.5-27b",
                company: "Alibaba",
                logo: "./assets/logos/alibaba.svg",
                score: 1344,
                isChinese: true
        },
        {
                rank: 35,
                model: "gpt-5.1",
                company: "OpenAI",
                logo: "./assets/logos/openai.svg",
                score: 1339,
                isChinese: false
        },
        {
                rank: 36,
                model: "mimo-v2-flash (non-thinking)",
                company: "Xiaomi",
                logo: "./assets/logos/xiaomi.svg",
                score: 1337,
                isChinese: true
        },
        {
                rank: 37,
                model: "gpt-5.2-codex",
                company: "OpenAI",
                logo: "./assets/logos/openai.svg",
                score: 1335,
                isChinese: false
        },
        {
                rank: 38,
                model: "kimi-k2-thinking-turbo",
                company: "Moonshot",
                logo: "./assets/logos/moonshot.svg",
                score: 1329,
                isChinese: true
        },
        {
                rank: 39,
                model: "gpt-5.1-codex",
                company: "OpenAI",
                logo: "./assets/logos/openai.svg",
                score: 1328,
                isChinese: false
        },
        {
                rank: 41,
                model: "claude-haiku-4-5-20251001",
                company: "Anthropic",
                logo: "./assets/logos/anthropic.svg",
                score: 1312,
                isChinese: false
        },
        {
                rank: 42,
                model: "minimax-m2",
                company: "MiniMax",
                logo: "",
                score: 1303,
                isChinese: true
        },
        {
                rank: 43,
                model: "mimo-v2-flash (thinking)",
                company: "Xiaomi",
                logo: "./assets/logos/xiaomi.svg",
                score: 1300,
                isChinese: true
        },
        {
                rank: 44,
                model: "deepseek-v3.2-exp",
                company: "DeepSeek",
                logo: "./assets/logos/deepseek.svg",
                score: 1285,
                isChinese: true
        },
        {
                rank: 45,
                model: "qwen3-coder-480b-a35b-instruct",
                company: "Alibaba",
                logo: "./assets/logos/alibaba.svg",
                score: 1280,
                isChinese: true
        },
        {
                rank: 46,
                model: "KAT-Coder-Pro-V1",
                company: "KwaiKAT",
                logo: "./assets/logos/kwai.svg",
                score: 1257,
                isChinese: true
        },
        {
                rank: 47,
                model: "qwen3.5-35b-a3b",
                company: "Alibaba",
                logo: "./assets/logos/alibaba.svg",
                score: 1247,
                isChinese: true
        },
        {
                rank: 48,
                model: "gemini-3.1-flash-lite-preview",
                company: "Google",
                logo: "./assets/logos/google.svg",
                score: 1238,
                isChinese: false
        },
        {
                rank: 49,
                model: "gpt-5.1-codex-mini",
                company: "OpenAI",
                logo: "./assets/logos/openai.svg",
                score: 1238,
                isChinese: false
        },
        {
                rank: 50,
                model: "qwen3.5-flash",
                company: "Alibaba",
                logo: "./assets/logos/alibaba.svg",
                score: 1235,
                isChinese: true
        },
        {
                rank: 51,
                model: "grok-4-1-fast-reasoning",
                company: "xAI",
                logo: "",
                score: 1233,
                isChinese: false
        },
        {
                rank: 52,
                model: "mistral-large-3",
                company: "Mistral",
                logo: "./assets/logos/mistral.svg",
                score: 1221,
                isChinese: false
        },
        {
                rank: 53,
                model: "grok-4.1-thinking",
                company: "xAI",
                logo: "",
                score: 1207,
                isChinese: false
        },
        {
                rank: 54,
                model: "gemini-2.5-pro",
                company: "Google",
                logo: "./assets/logos/google.svg",
                score: 1202,
                isChinese: false
        },
        {
                rank: 55,
                model: "devstral-2",
                company: "Mistral",
                logo: "./assets/logos/mistral.svg",
                score: 1198,
                isChinese: false
        },
        {
                rank: 56,
                model: "mercury-2",
                company: "Inception AI",
                logo: "",
                score: 1182,
                isChinese: false
        },
        {
                rank: 57,
                model: "grok-4-fast-reasoning",
                company: "xAI",
                logo: "",
                score: 1148,
                isChinese: false
        },
        {
                rank: 58,
                model: "grok-code-fast-1",
                company: "xAI",
                logo: "",
                score: 1138,
                isChinese: false
        },
        {
                rank: 59,
                model: "devstral-medium-2507",
                company: "Mistral",
                logo: "./assets/logos/mistral.svg",
                score: 1090,
                isChinese: false
        }
]
};
