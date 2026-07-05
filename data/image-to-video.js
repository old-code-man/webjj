// Image to Video 排行榜数据
window.rankingData = {
    title: "Image to Video",
    icon: "🎬",
    rerankAfterFilter: false, // 筛选后是否重新排名
    data: [
        {
                rank: 1,
                model: "dreamina-seedance-2.0-720p",
                company: "Bytedance",
                logo: "",
                score: 1474,
                isChinese: true
        },
        {
                rank: 2,
                model: "gemini-omni-flash",
                company: "Google",
                logo: "",
                score: 1469,
                isChinese: false
        },
        {
                rank: 3,
                model: "grok-imagine-video-1.5-preview-720p",
                company: "xAI",
                logo: "",
                score: 1466,
                isChinese: false
        },
        {
                rank: 4,
                model: "happyhorse-1.0",
                company: "Alibaba-ATH",
                logo: "",
                score: 1444,
                isChinese: true
        },
        {
                rank: 5,
                model: "wan2.7-i2v",
                company: "Alibaba",
                logo: "",
                score: 1434,
                isChinese: true
        },
        {
                rank: 6,
                model: "grok-imagine-video-720p",
                company: "xAI",
                logo: "",
                score: 1422,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 10,
                                model: "grok-imagine-video-480p",
                                company: "xAI",
                                logo: "",
                                score: 1384,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 7,
                model: "veo-3.1-audio",
                company: "Google",
                logo: "",
                score: 1398,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 8,
                                model: "veo-3.1-audio-1080p",
                                company: "Google",
                                logo: "",
                                score: 1391,
                                isChinese: false
                        },
                        {
                                rank: 9,
                                model: "veo-3.1-fast-audio",
                                company: "Google",
                                logo: "",
                                score: 1385,
                                isChinese: false
                        },
                        {
                                rank: 11,
                                model: "veo-3.1-fast-audio-1080p",
                                company: "Google",
                                logo: "",
                                score: 1374,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 12,
                model: "vidu-q3-pro",
                company: "Shengshu",
                logo: "",
                score: 1361,
                isChinese: true
        },
        {
                rank: 13,
                model: "kling-v3-pro",
                company: "KlingAI",
                logo: "",
                score: 1360,
                isChinese: true
        },
        {
                rank: 14,
                model: "veo-3-audio",
                company: "Google",
                logo: "",
                score: 1330,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 15,
                                model: "veo-3-fast-audio",
                                company: "Google",
                                logo: "",
                                score: 1325,
                                isChinese: false
                        },
                        {
                                rank: 24,
                                model: "veo-3-fast",
                                company: "Google",
                                logo: "",
                                score: 1257,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 16,
                model: "wan2.5-i2v-preview",
                company: "Alibaba",
                logo: "",
                score: 1323,
                isChinese: true
        },
        {
                rank: 17,
                model: "wan2.6-i2v",
                company: "Alibaba",
                logo: "",
                score: 1316,
                isChinese: true
        },
        {
                rank: 18,
                model: "seedance-v1.5-pro",
                company: "Bytedance",
                logo: "",
                score: 1308,
                isChinese: true
        },
        {
                rank: 19,
                model: "pixverse-v5.6",
                company: "Pixverse",
                logo: "",
                score: 1300,
                isChinese: false
        },
        {
                rank: 20,
                model: "kling-2.6-pro",
                company: "KlingAI",
                logo: "",
                score: 1294,
                isChinese: true
        },
        {
                rank: 21,
                model: "kling-2.5-turbo-1080p",
                company: "KlingAI",
                logo: "",
                score: 1275,
                isChinese: true
        },
        {
                rank: 22,
                model: "seedance-v1-pro",
                company: "Bytedance",
                logo: "",
                score: 1272,
                isChinese: true
        },
        {
                rank: 23,
                model: "hailuo-2.3",
                company: "MiniMax",
                logo: "",
                score: 1260,
                isChinese: true
        },
        {
                rank: 25,
                model: "veo-3",
                company: "Google",
                logo: "",
                score: 1256,
                isChinese: false
        },
        {
                rank: 26,
                model: "p-video",
                company: "Pruna",
                logo: "",
                score: 1244,
                isChinese: true
        },
        {
                rank: 27,
                model: "vidu-q2-turbo",
                company: "Shengshu",
                logo: "",
                score: 1243,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 33,
                                model: "vidu-q2-pro",
                                company: "Shengshu",
                                logo: "",
                                score: 1222,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 28,
                model: "kling-v2.1-master",
                company: "KlingAI",
                logo: "",
                score: 1234,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 30,
                                model: "kling-v2.1-standard",
                                company: "KlingAI",
                                logo: "",
                                score: 1228,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 29,
                model: "hailuo-02-pro",
                company: "MiniMax",
                logo: "",
                score: 1228,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 32,
                                model: "hailuo-02-standard",
                                company: "MiniMax",
                                logo: "",
                                score: 1223,
                                isChinese: true
                        },
                        {
                                rank: 35,
                                model: "hailuo-02-fast",
                                company: "MiniMax",
                                logo: "",
                                score: 1193,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 31,
                model: "ray-3",
                company: "Luma AI",
                logo: "",
                score: 1225,
                isChinese: false
        },
        {
                rank: 34,
                model: "hunyuan-video-1.5",
                company: "Tencent",
                logo: "",
                score: 1196,
                isChinese: true
        },
        {
                rank: 36,
                model: "seedance-v1-lite",
                company: "Bytedance",
                logo: "",
                score: 1184,
                isChinese: true
        },
        {
                rank: 37,
                model: "wan-v2.2-a14b",
                company: "Alibaba",
                logo: "",
                score: 1169,
                isChinese: true
        },
        {
                rank: 38,
                model: "veo-2",
                company: "Google",
                logo: "",
                score: 1165,
                isChinese: false
        },
        {
                rank: 39,
                model: "ltx-2-19b",
                company: "lightricks",
                logo: "",
                score: 1147,
                isChinese: false
        },
        {
                rank: 40,
                model: "ray2",
                company: "Luma AI",
                logo: "",
                score: 1107,
                isChinese: false
        },
        {
                rank: 41,
                model: "runway-gen4-turbo",
                company: "Runway",
                logo: "",
                score: 1051,
                isChinese: false
        },
        {
                rank: 42,
                model: "pika-v2.2",
                company: "Pika",
                logo: "",
                score: 996,
                isChinese: false
        }
]
};
