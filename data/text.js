// Text Models 排行榜数据
window.rankingData = {
    title: "Text Models",
    icon: "📝",
    rerankAfterFilter: false, // 筛选后是否重新排名
    data: [
        {
                rank: 1,
                model: "claude-opus-4-6-thinking",
                company: "Anthropic",
                score: 1504,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 2,
                                model: "claude-opus-4-6",
                                company: "Anthropic",
                                score: 1500,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 3,
                model: "gemini-3.1-pro-preview",
                company: "Google",
                score: 1493,
                isChinese: false
        },
        {
                rank: 4,
                model: "grok-4.20-beta1",
                company: "xAI",
                score: 1491,
                isChinese: false
        },
        {
                rank: 5,
                model: "gemini-3-pro",
                company: "Google",
                score: 1486,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 9,
                                model: "gemini-3-flash",
                                company: "Google",
                                score: 1474,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 6,
                model: "gpt-5.4-high",
                company: "OpenAI",
                score: 1484,
                isChinese: false
        },
        {
                rank: 7,
                model: "grok-4.20-beta-0309-reasoning",
                company: "xAI",
                score: 1483,
                isChinese: false
        },
        {
                rank: 8,
                model: "gpt-5.2-chat-latest-20260210",
                company: "OpenAI",
                score: 1480,
                isChinese: false
        },
        {
                rank: 10,
                model: "claude-opus-4-5-20251101-thinking-32k",
                company: "Anthropic",
                score: 1474,
                isChinese: false
        },
        {
                rank: 11,
                model: "grok-4.1-thinking",
                company: "xAI",
                score: 1471,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 19,
                                model: "grok-4.1",
                                company: "xAI",
                                score: 1461,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 12,
                model: "claude-opus-4-5-20251101",
                company: "Anthropic",
                score: 1468,
                isChinese: false
        },
        {
                rank: 13,
                model: "gpt-5.4",
                company: "OpenAI",
                score: 1466,
                isChinese: false
        },
        {
                rank: 14,
                model: "qwen3.5-max-preview",
                company: "Alibaba",
                score: 1465,
                isChinese: true
        },
        {
                rank: 15,
                model: "gpt-5.3-chat-latest",
                company: "OpenAI",
                score: 1464,
                isChinese: false
        },
        {
                rank: 16,
                model: "gemini-3-flash (thinking-minimal)",
                company: "Google",
                score: 1463,
                isChinese: false
        },
        {
                rank: 17,
                model: "claude-sonnet-4-6",
                company: "Anthropic",
                score: 1463,
                isChinese: false
        },
        {
                rank: 18,
                model: "dola-seed-2.0-preview",
                company: "Bytedance",
                score: 1463,
                isChinese: true
        },
        {
                rank: 20,
                model: "glm-5",
                company: "Z.ai",
                score: 1456,
                isChinese: false
        },
        {
                rank: 21,
                model: "gpt-5.1-high",
                company: "OpenAI",
                score: 1455,
                isChinese: false
        },
        {
                rank: 22,
                model: "gpt-5.4-mini-high",
                company: "OpenAI",
                score: 1454,
                isChinese: false
        },
        {
                rank: 23,
                model: "kimi-k2.5-thinking",
                company: "Moonshot",
                score: 1454,
                isChinese: true
        },
        {
                rank: 24,
                model: "claude-sonnet-4-5-20250929-thinking-32k",
                company: "Anthropic",
                score: 1453,
                isChinese: false
        },
        {
                rank: 25,
                model: "claude-sonnet-4-5-20250929",
                company: "Anthropic",
                score: 1453,
                isChinese: false
        },
        {
                rank: 26,
                model: "ernie-5.0-0110",
                company: "Baidu",
                score: 1452,
                isChinese: true
        },
        {
                rank: 27,
                model: "qwen3.5-397b-a17b",
                company: "Alibaba",
                score: 1450,
                isChinese: true
        },
        {
                rank: 28,
                model: "ernie-5.0-preview-1203",
                company: "Baidu",
                score: 1450,
                isChinese: true
        },
        {
                rank: 29,
                model: "claude-opus-4-1-20250805-thinking-16k",
                company: "Anthropic",
                score: 1449,
                isChinese: false
        },
        {
                rank: 30,
                model: "gemini-2.5-pro",
                company: "Google",
                score: 1448,
                isChinese: false
        },
        {
                rank: 31,
                model: "claude-opus-4-1-20250805",
                company: "Anthropic",
                score: 1447,
                isChinese: false
        },
        {
                rank: 32,
                model: "mimo-v2-pro",
                company: "Xiaomi",
                score: 1446,
                isChinese: true
        },
        {
                rank: 33,
                model: "gpt-4.5-preview-2025-02-27",
                company: "OpenAI",
                score: 1444,
                isChinese: false
        },
        {
                rank: 34,
                model: "chatgpt-4o-latest-20250326",
                company: "OpenAI",
                score: 1443,
                isChinese: false
        },
        {
                rank: 35,
                model: "glm-4.7",
                company: "Z.ai",
                score: 1443,
                isChinese: false
        },
        {
                rank: 36,
                model: "gpt-5.2-high",
                company: "OpenAI",
                score: 1442,
                isChinese: false
        },
        {
                rank: 37,
                model: "gpt-5.2",
                company: "OpenAI",
                score: 1440,
                isChinese: false
        },
        {
                rank: 38,
                model: "gpt-5.1",
                company: "OpenAI",
                score: 1439,
                isChinese: false
        },
        {
                rank: 39,
                model: "gemini-3.1-flash-lite-preview",
                company: "Google",
                score: 1438,
                isChinese: false
        },
        {
                rank: 40,
                model: "qwen3-max-preview",
                company: "Alibaba",
                score: 1435,
                isChinese: true
        },
        {
                rank: 41,
                model: "gpt-5-high",
                company: "OpenAI",
                score: 1434,
                isChinese: false
        },
        {
                rank: 42,
                model: "kimi-k2.5-instant",
                company: "Moonshot",
                score: 1433,
                isChinese: true
        },
        {
                rank: 43,
                model: "o3-2025-04-16",
                company: "OpenAI",
                score: 1431,
                isChinese: false
        },
        {
                rank: 44,
                model: "grok-4-1-fast-reasoning",
                company: "xAI",
                score: 1431,
                isChinese: false
        },
        {
                rank: 45,
                model: "kimi-k2-thinking-turbo",
                company: "Moonshot",
                score: 1430,
                isChinese: true
        },
        {
                rank: 46,
                model: "amazon-nova-experimental-chat-26-02-10",
                company: "Amazon",
                score: 1429,
                isChinese: false
        },
        {
                rank: 47,
                model: "gpt-5-chat",
                company: "OpenAI",
                score: 1426,
                isChinese: false
        },
        {
                rank: 48,
                model: "glm-4.6",
                company: "Z.ai",
                score: 1426,
                isChinese: false
        },
        {
                rank: 49,
                model: "deepseek-v3.2-exp-thinking",
                company: "DeepSeek",
                score: 1425,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 53,
                                model: "deepseek-v3.2-exp",
                                company: "DeepSeek",
                                score: 1423,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 50,
                model: "qwen3-max-2025-09-23",
                company: "Alibaba",
                score: 1424,
                isChinese: true
        },
        {
                rank: 51,
                model: "claude-opus-4-20250514-thinking-16k",
                company: "Anthropic",
                score: 1424,
                isChinese: false
        },
        {
                rank: 52,
                model: "deepseek-v3.2",
                company: "DeepSeek",
                score: 1424,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 55,
                                model: "deepseek-v3.2-thinking",
                                company: "DeepSeek",
                                score: 1422,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 54,
                model: "qwen3-235b-a22b-instruct-2507",
                company: "Alibaba",
                score: 1422,
                isChinese: true
        },
        {
                rank: 56,
                model: "deepseek-r1-0528",
                company: "DeepSeek",
                score: 1422,
                isChinese: true
        },
        {
                rank: 57,
                model: "grok-4-fast-chat",
                company: "xAI",
                score: 1421,
                isChinese: false
        },
        {
                rank: 58,
                model: "ernie-5.0-preview-1022",
                company: "Baidu",
                score: 1419,
                isChinese: true
        },
        {
                rank: 59,
                model: "deepseek-v3.1",
                company: "DeepSeek",
                score: 1418,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 63,
                                model: "deepseek-v3.1-thinking",
                                company: "DeepSeek",
                                score: 1417,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 60,
                model: "qwen3.5-122b-a10b",
                company: "Alibaba",
                score: 1418,
                isChinese: true
        },
        {
                rank: 61,
                model: "kimi-k2-0905-preview",
                company: "Moonshot",
                score: 1418,
                isChinese: true
        },
        {
                rank: 62,
                model: "kimi-k2-0711-preview",
                company: "Moonshot",
                score: 1417,
                isChinese: true
        },
        {
                rank: 64,
                model: "deepseek-v3.1-terminus-thinking",
                company: "DeepSeek",
                score: 1416,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 67,
                                model: "deepseek-v3.1-terminus",
                                company: "DeepSeek",
                                score: 1416,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 65,
                model: "qwen3-vl-235b-a22b-instruct",
                company: "Alibaba",
                score: 1416,
                isChinese: true
        },
        {
                rank: 66,
                model: "mistral-large-3",
                company: "Mistral",
                score: 1416,
                isChinese: false
        },
        {
                rank: 68,
                model: "amazon-nova-experimental-chat-26-01-10",
                company: "Amazon",
                score: 1415,
                isChinese: false
        },
        {
                rank: 69,
                model: "gpt-4.1-2025-04-14",
                company: "OpenAI",
                score: 1413,
                isChinese: false
        },
        {
                rank: 70,
                model: "claude-opus-4-20250514",
                company: "Anthropic",
                score: 1412,
                isChinese: false
        },
        {
                rank: 71,
                model: "grok-3-preview-02-24",
                company: "xAI",
                score: 1412,
                isChinese: false
        }
]
};
