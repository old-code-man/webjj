// Image to Video 排行榜数据
window.rankingData = {
    title: "Image to Video",
    icon: "🎬",
    rerankAfterFilter: false, // 筛选后是否重新排名
    data: [
        {
                rank: 1,
                model: "gemini-omni-flash",
                company: "Google",
                logo: "",
                score: 1475,
                isChinese: false
        },
        {
                rank: 2,
                model: "dreamina-seedance-2.0-720p",
                company: "Bytedance",
                logo: "",
                score: 1475,
                isChinese: true
        },
        {
                rank: 3,
                model: "grok-imagine-video-1.5-preview-720p",
                company: "xAI",
                logo: "",
                score: 1467,
                isChinese: false
        },
        {
                rank: 4,
                model: "happyhorse-1.0",
                company: "Alibaba-ATH",
                logo: "",
                score: 1446,
                isChinese: true
        },
        {
                rank: 5,
                model: "grok-imagine-video-720p",
                company: "xAI",
                logo: "",
                score: 1422,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 9,
                                model: "grok-imagine-video-480p",
                                company: "xAI",
                                logo: "",
                                score: 1384,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 6,
                model: "veo-3.1-audio",
                company: "Google",
                logo: "",
                score: 1398,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 7,
                                model: "veo-3.1-audio-1080p",
                                company: "Google",
                                logo: "",
                                score: 1393,
                                isChinese: false
                        },
                        {
                                rank: 8,
                                model: "veo-3.1-fast-audio",
                                company: "Google",
                                logo: "",
                                score: 1385,
                                isChinese: false
                        },
                        {
                                rank: 10,
                                model: "veo-3.1-fast-audio-1080p",
                                company: "Google",
                                logo: "",
                                score: 1375,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 11,
                model: "vidu-q3-pro",
                company: "Shengshu",
                logo: "",
                score: 1361,
                isChinese: true
        },
        {
                rank: 12,
                model: "kling-v3-pro",
                company: "KlingAI",
                logo: "",
                score: 1359,
                isChinese: true
        },
        {
                rank: 13,
                model: "veo-3-audio",
                company: "Google",
                logo: "",
                score: 1330,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 14,
                                model: "veo-3-fast-audio",
                                company: "Google",
                                logo: "",
                                score: 1324,
                                isChinese: false
                        },
                        {
                                rank: 23,
                                model: "veo-3-fast",
                                company: "Google",
                                logo: "",
                                score: 1257,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 15,
                model: "wan2.5-i2v-preview",
                company: "Alibaba",
                logo: "",
                score: 1321,
                isChinese: true
        },
        {
                rank: 16,
                model: "wan2.6-i2v",
                company: "Alibaba",
                logo: "",
                score: 1317,
                isChinese: true
        },
        {
                rank: 17,
                model: "seedance-v1.5-pro",
                company: "Bytedance",
                logo: "",
                score: 1308,
                isChinese: true
        },
        {
                rank: 18,
                model: "pixverse-v5.6",
                company: "Pixverse",
                logo: "",
                score: 1300,
                isChinese: false
        },
        {
                rank: 19,
                model: "kling-2.6-pro",
                company: "KlingAI",
                logo: "",
                score: 1294,
                isChinese: true
        },
        {
                rank: 20,
                model: "kling-2.5-turbo-1080p",
                company: "KlingAI",
                logo: "",
                score: 1275,
                isChinese: true
        },
        {
                rank: 21,
                model: "seedance-v1-pro",
                company: "Bytedance",
                logo: "",
                score: 1272,
                isChinese: true
        },
        {
                rank: 22,
                model: "hailuo-2.3",
                company: "MiniMax",
                logo: "",
                score: 1260,
                isChinese: true
        },
        {
                rank: 24,
                model: "veo-3",
                company: "Google",
                logo: "",
                score: 1256,
                isChinese: false
        },
        {
                rank: 25,
                model: "p-video",
                company: "Pruna",
                logo: "",
                score: 1244,
                isChinese: true
        },
        {
                rank: 26,
                model: "vidu-q2-turbo",
                company: "Shengshu",
                logo: "",
                score: 1242,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 32,
                                model: "vidu-q2-pro",
                                company: "Shengshu",
                                logo: "",
                                score: 1222,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 27,
                model: "kling-v2.1-master",
                company: "KlingAI",
                logo: "",
                score: 1234,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 29,
                                model: "kling-v2.1-standard",
                                company: "KlingAI",
                                logo: "",
                                score: 1227,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 28,
                model: "hailuo-02-pro",
                company: "MiniMax",
                logo: "",
                score: 1228,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 31,
                                model: "hailuo-02-standard",
                                company: "MiniMax",
                                logo: "",
                                score: 1222,
                                isChinese: true
                        },
                        {
                                rank: 34,
                                model: "hailuo-02-fast",
                                company: "MiniMax",
                                logo: "",
                                score: 1193,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 30,
                model: "ray-3",
                company: "Luma AI",
                logo: "",
                score: 1225,
                isChinese: false
        },
        {
                rank: 33,
                model: "hunyuan-video-1.5",
                company: "Tencent",
                logo: "",
                score: 1196,
                isChinese: true
        },
        {
                rank: 35,
                model: "seedance-v1-lite",
                company: "Bytedance",
                logo: "",
                score: 1184,
                isChinese: true
        },
        {
                rank: 36,
                model: "wan-v2.2-a14b",
                company: "Alibaba",
                logo: "",
                score: 1169,
                isChinese: true
        },
        {
                rank: 37,
                model: "veo-2",
                company: "Google",
                logo: "",
                score: 1165,
                isChinese: false
        },
        {
                rank: 38,
                model: "ltx-2-19b",
                company: "lightricks",
                logo: "",
                score: 1147,
                isChinese: false
        },
        {
                rank: 39,
                model: "ray2",
                company: "Luma AI",
                logo: "",
                score: 1107,
                isChinese: false
        },
        {
                rank: 40,
                model: "runway-gen4-turbo",
                company: "Runway",
                logo: "",
                score: 1051,
                isChinese: false
        },
        {
                rank: 41,
                model: "pika-v2.2",
                company: "Pika",
                logo: "",
                score: 996,
                isChinese: false
        }
]
};
