// Code Models 排行榜数据
window.rankingData = {
    title: "Code Models",
    icon: "💻",
    rerankAfterFilter: false, // 筛选后是否重新排名
    data: [
        {
                rank: 1,
                model: "claude-fable-5",
                company: "Anthropic",
                logo: "",
                score: 1653,
                isChinese: false
        },
        {
                rank: 2,
                model: "glm-5.2 (max)",
                company: "Z.ai",
                logo: "",
                score: 1584,
                isChinese: true
        },
        {
                rank: 3,
                model: "claude-opus-4-8-thinking",
                company: "Anthropic",
                logo: "",
                score: 1561,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 10,
                                model: "claude-opus-4-8",
                                company: "Anthropic",
                                logo: "",
                                score: 1535,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 4,
                model: "claude-opus-4-7-thinking",
                company: "Anthropic",
                logo: "",
                score: 1559,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 5,
                                model: "claude-opus-4-7",
                                company: "Anthropic",
                                logo: "",
                                score: 1557,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 6,
                model: "claude-sonnet-5-thinking",
                company: "Anthropic",
                logo: "",
                score: 1551,
                isChinese: false
        },
        {
                rank: 7,
                model: "claude-opus-4-6-thinking",
                company: "Anthropic",
                logo: "",
                score: 1542,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 9,
                                model: "claude-opus-4-6",
                                company: "Anthropic",
                                logo: "",
                                score: 1536,
                                isChinese: false
                        },
                        {
                                rank: 13,
                                model: "claude-sonnet-4-6",
                                company: "Anthropic",
                                logo: "",
                                score: 1522,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 8,
                model: "seed-2.1-pro-preview",
                company: "Bytedance",
                logo: "",
                score: 1539,
                isChinese: true
        },
        {
                rank: 11,
                model: "qwen3.7-max-20260517",
                company: "Alibaba",
                logo: "",
                score: 1526,
                isChinese: true
        },
        {
                rank: 12,
                model: "glm-5.1",
                company: "Z.ai",
                logo: "",
                score: 1523,
                isChinese: true
        },
        {
                rank: 14,
                model: "kimi-k2.6",
                company: "Moonshot",
                logo: "",
                score: 1514,
                isChinese: true
        },
        {
                rank: 15,
                model: "gemini-3.5-flash",
                company: "Google",
                logo: "",
                score: 1510,
                isChinese: false
        },
        {
                rank: 16,
                model: "minimax-m3",
                company: "MiniMax",
                logo: "",
                score: 1501,
                isChinese: true
        },
        {
                rank: 17,
                model: "gpt-5.5-xhigh (codex-harness)",
                company: "OpenAI",
                logo: "",
                score: 1501,
                isChinese: false
        },
        {
                rank: 18,
                model: "claude-opus-4-5-20251101-thinking-32k",
                company: "Anthropic",
                logo: "",
                score: 1490,
                isChinese: false
        },
        {
                rank: 19,
                model: "gpt-5.5-high (codex-harness)",
                company: "OpenAI",
                logo: "",
                score: 1483,
                isChinese: false
        },
        {
                rank: 20,
                model: "qwen3.6-max-preview",
                company: "Alibaba",
                logo: "",
                score: 1482,
                isChinese: true
        },
        {
                rank: 21,
                model: "mimo-v2.5-pro",
                company: "Xiaomi",
                logo: "",
                score: 1473,
                isChinese: true
        },
        {
                rank: 22,
                model: "kimi-k2.7-code",
                company: "Moonshot",
                logo: "",
                score: 1471,
                isChinese: true
        },
        {
                rank: 23,
                model: "claude-opus-4-5-20251101",
                company: "Anthropic",
                logo: "",
                score: 1466,
                isChinese: false
        },
        {
                rank: 24,
                model: "qwen3.6-plus",
                company: "Alibaba",
                logo: "",
                score: 1461,
                isChinese: true
        },
        {
                rank: 25,
                model: "gpt-5.4-high (codex-harness)",
                company: "OpenAI",
                logo: "",
                score: 1457,
                isChinese: false
        },
        {
                rank: 26,
                model: "deepseek-v4-pro-thinking",
                company: "DeepSeek",
                logo: "",
                score: 1457,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 28,
                                model: "deepseek-v4-pro",
                                company: "DeepSeek",
                                logo: "",
                                score: 1446,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 27,
                model: "gpt-5.5 (codex-harness)",
                company: "OpenAI",
                logo: "",
                score: 1448,
                isChinese: false
        },
        {
                rank: 29,
                model: "gemini-3.1-pro-preview",
                company: "Google",
                logo: "",
                score: 1445,
                isChinese: false
        },
        {
                rank: 30,
                model: "glm-4.7",
                company: "Z.ai",
                logo: "",
                score: 1440,
                isChinese: true
        },
        {
                rank: 31,
                model: "gemini-3-pro",
                company: "Google",
                logo: "",
                score: 1439,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 33,
                                model: "gemini-3-flash",
                                company: "Google",
                                logo: "",
                                score: 1437,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 32,
                model: "gpt-5.4-medium (codex-harness)",
                company: "OpenAI",
                logo: "",
                score: 1437,
                isChinese: false
        },
        {
                rank: 34,
                model: "mimo-v2-pro",
                company: "Xiaomi",
                logo: "",
                score: 1432,
                isChinese: true
        },
        {
                rank: 35,
                model: "kimi-k2.5-thinking",
                company: "Moonshot",
                logo: "",
                score: 1431,
                isChinese: true
        },
        {
                rank: 36,
                model: "mimo-v2.5",
                company: "Xiaomi",
                logo: "",
                score: 1430,
                isChinese: true
        },
        {
                rank: 37,
                model: "glm-5",
                company: "Z.ai",
                logo: "",
                score: 1430,
                isChinese: true
        },
        {
                rank: 38,
                model: "kimi-k2.5-instant",
                company: "Moonshot",
                logo: "",
                score: 1408,
                isChinese: true
        },
        {
                rank: 39,
                model: "gpt-5.3-codex (codex-harness)",
                company: "OpenAI",
                logo: "",
                score: 1406,
                isChinese: false
        },
        {
                rank: 40,
                model: "gpt-5.2",
                company: "OpenAI",
                logo: "",
                score: 1405,
                isChinese: false
        },
        {
                rank: 41,
                model: "gpt-5.4-mini-high",
                company: "OpenAI",
                logo: "",
                score: 1398,
                isChinese: false
        },
        {
                rank: 42,
                model: "minimax-m2.7",
                company: "MiniMax",
                logo: "",
                score: 1396,
                isChinese: true
        },
        {
                rank: 43,
                model: "qwen3.5-397b-a17b",
                company: "Alibaba",
                logo: "",
                score: 1396,
                isChinese: true
        },
        {
                rank: 44,
                model: "gpt-5-medium",
                company: "OpenAI",
                logo: "",
                score: 1395,
                isChinese: false
        },
        {
                rank: 45,
                model: "gpt-5.4",
                company: "OpenAI",
                logo: "",
                score: 1394,
                isChinese: false
        },
        {
                rank: 46,
                model: "minimax-m2.1-preview",
                company: "MiniMax",
                logo: "",
                score: 1391,
                isChinese: true
        },
        {
                rank: 47,
                model: "gpt-5.1-medium",
                company: "OpenAI",
                logo: "",
                score: 1391,
                isChinese: false
        },
        {
                rank: 48,
                model: "claude-sonnet-4-5-20250929-thinking-32k",
                company: "Anthropic",
                logo: "",
                score: 1388,
                isChinese: false
        },
        {
                rank: 49,
                model: "gemini-3-flash (thinking-minimal)",
                company: "Google",
                logo: "",
                score: 1387,
                isChinese: false
        },
        {
                rank: 50,
                model: "claude-sonnet-4-5-20250929",
                company: "Anthropic",
                logo: "",
                score: 1386,
                isChinese: false
        }
]
};
