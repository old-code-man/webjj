// Image to Video 排行榜数据
window.rankingData = {
    title: "Image to Video",
    icon: "🎬",
    rerankAfterFilter: false, // 筛选后是否重新排名
    data: [
        {
                rank: 1,
                model: "grok-imagine-video-720px",
                company: "AI",
                score: 1404,
                isChinese: false
        },
        {
                rank: 2,
                model: "veo-3.1-audio-1080p",
                company: "Google",
                score: 1402,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 3,
                                model: "veo-3.1-audio",
                                company: "Google",
                                score: 1395,
                                isChinese: false
                        },
                        {
                                rank: 4,
                                model: "veo-3.1-fast-audio-1080p",
                                company: "Google",
                                score: 1383,
                                isChinese: false
                        },
                        {
                                rank: 6,
                                model: "veo-3.1-fast-audio",
                                company: "Google",
                                score: 1380,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 5,
                model: "grok-imagine-video-480px",
                company: "AI",
                score: 1381,
                isChinese: false
        },
        {
                rank: 7,
                model: "vidu-q3-pro",
                company: "Shengshu",
                score: 1353,
                isChinese: true
        },
        {
                rank: 8,
                model: "wan2.5-i2v-preview",
                company: "Alibaba",
                score: 1339,
                isChinese: true
        },
        {
                rank: 9,
                model: "kling-v3-pro",
                company: "KlingAI",
                score: 1334,
                isChinese: true
        },
        {
                rank: 10,
                model: "veo-3-audio",
                company: "Google",
                score: 1331,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 11,
                                model: "veo-3-fast-audio",
                                company: "Google",
                                score: 1322,
                                isChinese: false
                        },
                        {
                                rank: 18,
                                model: "veo-3-fast",
                                company: "Google",
                                score: 1256,
                                isChinese: false
                        },
                        {
                                rank: 20,
                                model: "veo-3",
                                company: "Google",
                                score: 1254,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 12,
                model: "Bytedanceseedance-v1.5-pro",
                company: "Bytedance",
                score: 1300,
                isChinese: true
        },
        {
                rank: 13,
                model: "wan2.6-i2v",
                company: "Alibaba",
                score: 1297,
                isChinese: true
        },
        {
                rank: 14,
                model: "kling-2.6-pro",
                company: "KlingAI",
                score: 1289,
                isChinese: true
        },
        {
                rank: 15,
                model: "pixverse-v5.6",
                company: "Pixverse",
                score: 1279,
                isChinese: false
        },
        {
                rank: 16,
                model: "Bytedanceseedance-v1-pro",
                company: "Bytedance",
                score: 1272,
                isChinese: true
        },
        {
                rank: 17,
                model: "kling-2.5-turbo-1080p",
                company: "KlingAI",
                score: 1272,
                isChinese: true
        },
        {
                rank: 19,
                model: "Minimaxhailuo-2.3",
                company: "MiniMax",
                score: 1255,
                isChinese: true
        },
        {
                rank: 21,
                model: "vidu-q2-turbo",
                company: "Shengshu",
                score: 1244,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 25,
                                model: "vidu-q2-pro",
                                company: "Shengshu",
                                score: 1224,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 22,
                model: "kling-v2.1-master",
                company: "KlingAI",
                score: 1232,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 24,
                                model: "kling-v2.1-standard",
                                company: "KlingAI",
                                score: 1225,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 23,
                model: "Minimaxhailuo-02-pro",
                company: "MiniMax",
                score: 1228,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 26,
                                model: "Minimaxhailuo-02-standard",
                                company: "MiniMax",
                                score: 1222,
                                isChinese: true
                        },
                        {
                                rank: 29,
                                model: "Minimaxhailuo-02-fast",
                                company: "MiniMax",
                                score: 1194,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 27,
                model: "Lumaray-3",
                company: "Luma AI",
                score: 1221,
                isChinese: false
        },
        {
                rank: 28,
                model: "p-video",
                company: "Pruna",
                score: 1195,
                isChinese: true
        },
        {
                rank: 30,
                model: "Tencenthunyuan-video-1.5",
                company: "Tencent",
                score: 1193,
                isChinese: true
        },
        {
                rank: 31,
                model: "Bytedanceseedance-v1-lite",
                company: "Bytedance",
                score: 1182,
                isChinese: true
        },
        {
                rank: 32,
                model: "wan-v2.2-a14b",
                company: "Alibaba",
                score: 1167,
                isChinese: true
        },
        {
                rank: 33,
                model: "veo-2",
                company: "Google",
                score: 1164,
                isChinese: false
        },
        {
                rank: 34,
                model: "Lightricksltx-2-19blightricks · ltx-2-community-license-agreement",
                company: "Unknown",
                score: 1126,
                isChinese: false
        },
        {
                rank: 35,
                model: "Lumaray2",
                company: "Luma AI",
                score: 1104,
                isChinese: false
        },
        {
                rank: 36,
                model: "Runwayrunway-gen4-turbo",
                company: "Runway",
                score: 1047,
                isChinese: false
        },
        {
                rank: 37,
                model: "Pikapika-v2.2",
                company: "Pika",
                score: 994,
                isChinese: false
        }
]
};
