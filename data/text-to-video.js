// Text to Video 排行榜数据
window.rankingData = {
    title: "Text to Video",
    icon: "🎥",
    rerankAfterFilter: false, // 筛选后是否重新排名
    data: [
        {
                rank: 1,
                model: "gemini-omni-1.1-flash",
                company: "Google",
                logo: "",
                score: 1515,
                isChinese: false
        },
        {
                rank: 2,
                model: "gemini-omni-flash",
                company: "Google",
                logo: "",
                score: 1511,
                isChinese: false
        },
        {
                rank: 3,
                model: "wan3.0",
                company: "Alibaba",
                logo: "",
                score: 1494,
                isChinese: true
        },
        {
                rank: 4,
                model: "flux-3-video",
                company: "Black Forest Labs",
                logo: "",
                score: 1494,
                isChinese: false
        },
        {
                rank: 5,
                model: "grok-imagine-video-1.5-agent",
                company: "SpaceXAI",
                logo: "",
                score: 1491,
                isChinese: false
        },
        {
                rank: 6,
                model: "dreamina-seedance-2.5-720p",
                company: "Bytedance",
                logo: "",
                score: 1482,
                isChinese: true
        },
        {
                rank: 7,
                model: "dreamina-seedance-2.0-720p",
                company: "Bytedance",
                logo: "",
                score: 1479,
                isChinese: true
        },
        {
                rank: 8,
                model: "minimax-h3",
                company: "MiniMax",
                logo: "",
                score: 1462,
                isChinese: true
        },
        {
                rank: 9,
                model: "muse-video",
                company: "Meta",
                logo: "",
                score: 1456,
                isChinese: false
        },
        {
                rank: 10,
                model: "happyhorse-1.0",
                company: "Alibaba-ATH",
                logo: "",
                score: 1427,
                isChinese: true
        },
        {
                rank: 11,
                model: "sora-2-pro",
                company: "OpenAI",
                logo: "",
                score: 1367,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 18,
                                model: "sora-2",
                                company: "OpenAI",
                                logo: "",
                                score: 1342,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 12,
                model: "veo-3.1-audio",
                company: "Google",
                logo: "",
                score: 1364,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 13,
                                model: "veo-3.1-audio-1080p",
                                company: "Google",
                                logo: "",
                                score: 1363,
                                isChinese: false
                        },
                        {
                                rank: 14,
                                model: "veo-3.1-fast-audio",
                                company: "Google",
                                logo: "",
                                score: 1362,
                                isChinese: false
                        },
                        {
                                rank: 15,
                                model: "veo-3.1-fast-audio-1080p",
                                company: "Google",
                                logo: "",
                                score: 1358,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 16,
                model: "veo-3-fast-audio",
                company: "Google",
                logo: "",
                score: 1348,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 20,
                                model: "veo-3-audio",
                                company: "Google",
                                logo: "",
                                score: 1340,
                                isChinese: false
                        },
                        {
                                rank: 23,
                                model: "veo-3",
                                company: "Google",
                                logo: "",
                                score: 1253,
                                isChinese: false
                        },
                        {
                                rank: 24,
                                model: "veo-3-fast",
                                company: "Google",
                                logo: "",
                                score: 1248,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 17,
                model: "grok-imagine-video-720p",
                company: "SpaceXAI",
                logo: "",
                score: 1343,
                isChinese: false
        },
        {
                rank: 19,
                model: "wan2.7-t2v",
                company: "Alibaba",
                logo: "",
                score: 1341,
                isChinese: true
        },
        {
                rank: 21,
                model: "wan2.6-t2v",
                company: "Alibaba",
                logo: "",
                score: 1328,
                isChinese: true
        },
        {
                rank: 22,
                model: "seedance-v1.5-pro",
                company: "Bytedance",
                logo: "",
                score: 1256,
                isChinese: true
        },
        {
                rank: 25,
                model: "wan2.5-t2v-preview",
                company: "Alibaba",
                logo: "",
                score: 1246,
                isChinese: true
        },
        {
                rank: 26,
                model: "pixverse-v5.6",
                company: null,
                logo: "",
                score: 1239,
                isChinese: false
        },
        {
                rank: 27,
                model: "runway-gen-4.5",
                company: "Runway",
                logo: "",
                score: 1224,
                isChinese: false
        },
        {
                rank: 28,
                model: "kling-2.5-turbo-1080p",
                company: "KlingAI",
                logo: "",
                score: 1219,
                isChinese: true
        },
        {
                rank: 29,
                model: "kling-2.6-pro",
                company: "KlingAI",
                logo: "",
                score: 1216,
                isChinese: true
        },
        {
                rank: 30,
                model: "p-video",
                company: null,
                logo: "",
                score: 1207,
                isChinese: false
        },
        {
                rank: 31,
                model: "ray-3",
                company: "Luma AI",
                logo: "",
                score: 1205,
                isChinese: false
        },
        {
                rank: 32,
                model: "hailuo-2.3",
                company: "MiniMax",
                logo: "",
                score: 1205,
                isChinese: true
        },
        {
                rank: 33,
                model: "kling-o1-pro",
                company: "KlingAI",
                logo: "",
                score: 1205,
                isChinese: true
        },
        {
                rank: 34,
                model: "hailuo-02-pro",
                company: "MiniMax",
                logo: "",
                score: 1198,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 36,
                                model: "hailuo-02-standard",
                                company: "MiniMax",
                                logo: "",
                                score: 1181,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 35,
                model: "seedance-v1-pro",
                company: "Bytedance",
                logo: "",
                score: 1190,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 44,
                                model: "seedance-v1-lite",
                                company: "Bytedance",
                                logo: "",
                                score: 1112,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 37,
                model: "kandinsky-5.0-t2v-pro",
                company: "Kandinsky",
                logo: "",
                score: 1172,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 43,
                                model: "kandinsky-5.0-t2v-lite",
                                company: "Kandinsky",
                                logo: "",
                                score: 1113,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 38,
                model: "hunyuan-video-1.5",
                company: "Tencent",
                logo: "",
                score: 1169,
                isChinese: true
        },
        {
                rank: 39,
                model: "veo-2",
                company: "Google",
                logo: "",
                score: 1164,
                isChinese: false
        },
        {
                rank: 40,
                model: "kling-v2.1-master",
                company: "KlingAI",
                logo: "",
                score: 1162,
                isChinese: true
        },
        {
                rank: 41,
                model: "ltx-2-19b",
                company: null,
                logo: "",
                score: 1154,
                isChinese: false
        },
        {
                rank: 42,
                model: "wan-v2.2-a14b",
                company: "Alibaba",
                logo: "",
                score: 1132,
                isChinese: true
        },
        {
                rank: 45,
                model: "sora",
                company: "OpenAI",
                logo: "",
                score: 1069,
                isChinese: false
        },
        {
                rank: 46,
                model: "ray2",
                company: "Luma AI",
                logo: "",
                score: 1065,
                isChinese: false
        },
        {
                rank: 47,
                model: "pika-v2.2",
                company: "Pika",
                logo: "",
                score: 1009,
                isChinese: false
        },
        {
                rank: 48,
                model: "mochi-v1",
                company: "Genmo AI",
                logo: "",
                score: 1006,
                isChinese: false
        }
]
};
