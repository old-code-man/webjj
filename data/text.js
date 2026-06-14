// Text Models 排行榜数据
window.rankingData = {
    title: "Text Models",
    icon: "📝",
    rerankAfterFilter: false, // 筛选后是否重新排名
    data: [
        {
                rank: 1,
                model: "claude-fable-5",
                company: "Anthropic",
                logo: "",
                score: 1510,
                isChinese: false
        },
        {
                rank: 2,
                model: "claude-opus-4-6-thinking",
                company: "Anthropic",
                logo: "",
                score: 1504,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 4,
                                model: "claude-opus-4-6",
                                company: "Anthropic",
                                logo: "",
                                score: 1498,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 3,
                model: "claude-opus-4-7-thinking",
                company: "Anthropic",
                logo: "",
                score: 1502,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 5,
                                model: "claude-opus-4-7",
                                company: "Anthropic",
                                logo: "",
                                score: 1492,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 6,
                model: "muse-spark",
                company: "Meta",
                logo: "",
                score: 1487,
                isChinese: false
        },
        {
                rank: 7,
                model: "gemini-3.1-pro-preview",
                company: "Google",
                logo: "",
                score: 1487,
                isChinese: false
        },
        {
                rank: 8,
                model: "gemini-3-pro",
                company: "Google",
                logo: "",
                score: 1486,
                isChinese: false
        },
        {
                rank: 9,
                model: "claude-opus-4-8-thinking",
                company: "Anthropic",
                logo: "",
                score: 1486,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 12,
                                model: "claude-opus-4-8",
                                company: "Anthropic",
                                logo: "",
                                score: 1477,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 10,
                model: "gpt-5.5-high",
                company: "OpenAI",
                logo: "",
                score: 1481,
                isChinese: false
        },
        {
                rank: 11,
                model: "gpt-5.4-high",
                company: "OpenAI",
                logo: "",
                score: 1479,
                isChinese: false
        },
        {
                rank: 13,
                model: "gemini-3.5-flash",
                company: "Google",
                logo: "",
                score: 1477,
                isChinese: false
        },
        {
                rank: 14,
                model: "gpt-5.2-chat-latest-20260210",
                company: "OpenAI",
                logo: "",
                score: 1475,
                isChinese: false
        },
        {
                rank: 15,
                model: "glm-5.1",
                company: "Z.ai",
                logo: "",
                score: 1475,
                isChinese: true
        },
        {
                rank: 16,
                model: "qwen3.7-max-preview",
                company: "Alibaba",
                logo: "",
                score: 1474,
                isChinese: true
        },
        {
                rank: 17,
                model: "grok-4.20-beta1",
                company: "xAI",
                logo: "",
                score: 1474,
                isChinese: false
        },
        {
                rank: 18,
                model: "gpt-5.5",
                company: "OpenAI",
                logo: "",
                score: 1474,
                isChinese: false
        },
        {
                rank: 19,
                model: "grok-4.20-beta-0309-reasoning",
                company: "xAI",
                logo: "",
                score: 1474,
                isChinese: false
        },
        {
                rank: 20,
                model: "gemini-3-flash",
                company: "Google",
                logo: "",
                score: 1473,
                isChinese: false
        }
]
};
