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
                score: 1454,
                isChinese: true
        },
        {
                rank: 2,
                model: "happyhorse-1.0",
                company: "Alibaba-ATH",
                logo: "",
                score: 1444,
                isChinese: true
        },
        {
                rank: 3,
                model: "grok-imagine-video-720p",
                company: "xAI",
                logo: "",
                score: 1421,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 7,
                                model: "grok-imagine-video-480p",
                                company: "xAI",
                                logo: "",
                                score: 1382,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 4,
                model: "veo-3.1-audio-1080p",
                company: "Google",
                logo: "",
                score: 1402,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 5,
                                model: "veo-3.1-audio",
                                company: "Google",
                                logo: "",
                                score: 1396,
                                isChinese: false
                        },
                        {
                                rank: 6,
                                model: "veo-3.1-fast-audio",
                                company: "Google",
                                logo: "",
                                score: 1383,
                                isChinese: false
                        },
                        {
                                rank: 8,
                                model: "veo-3.1-fast-audio-1080p",
                                company: "Google",
                                logo: "",
                                score: 1376,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 9,
                model: "vidu-q3-pro",
                company: "Shengshu",
                logo: "",
                score: 1359,
                isChinese: true
        },
        {
                rank: 10,
                model: "kling-v3-pro",
                company: "KlingAI",
                logo: "",
                score: 1357,
                isChinese: true
        },
        {
                rank: 11,
                model: "wan2.5-i2v-preview",
                company: "Alibaba",
                logo: "",
                score: 1334,
                isChinese: true
        },
        {
                rank: 12,
                model: "veo-3-audio",
                company: "Google",
                logo: "",
                score: 1330,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 13,
                                model: "veo-3-fast-audio",
                                company: "Google",
                                logo: "",
                                score: 1324,
                                isChinese: false
                        },
                        {
                                rank: 20,
                                model: "veo-3-fast",
                                company: "Google",
                                logo: "",
                                score: 1256,
                                isChinese: false
                        },
                        {
                                rank: 21,
                                model: "veo-3",
                                company: "Google",
                                logo: "",
                                score: 1255,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 14,
                model: "wan2.6-i2v",
                company: "Alibaba",
                logo: "",
                score: 1308,
                isChinese: true
        },
        {
                rank: 15,
                model: "seedance-v1.5-pro",
                company: "Bytedance",
                logo: "",
                score: 1304,
                isChinese: true
        },
        {
                rank: 16,
                model: "pixverse-v5.6",
                company: "Pixverse",
                logo: "",
                score: 1298,
                isChinese: false
        },
        {
                rank: 17,
                model: "kling-2.6-pro",
                company: "KlingAI",
                logo: "",
                score: 1290,
                isChinese: true
        },
        {
                rank: 18,
                model: "kling-2.5-turbo-1080p",
                company: "KlingAI",
                logo: "",
                score: 1274,
                isChinese: true
        },
        {
                rank: 19,
                model: "seedance-v1-pro",
                company: "Bytedance",
                logo: "",
                score: 1271,
                isChinese: true
        },
        {
                rank: 22,
                model: "hailuo-2.3",
                company: "MiniMax",
                logo: "",
                score: 1255,
                isChinese: true
        },
        {
                rank: 23,
                model: "vidu-q2-turbo",
                company: "Shengshu",
                logo: "",
                score: 1242,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 30,
                                model: "vidu-q2-pro",
                                company: "Shengshu",
                                logo: "",
                                score: 1222,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 24,
                model: "p-video",
                company: "Pruna",
                logo: "",
                score: 1237,
                isChinese: true
        },
        {
                rank: 25,
                model: "kling-v2.1-master",
                company: "KlingAI",
                logo: "",
                score: 1233,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 27,
                                model: "kling-v2.1-standard",
                                company: "KlingAI",
                                logo: "",
                                score: 1227,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 26,
                model: "hailuo-02-pro",
                company: "MiniMax",
                logo: "",
                score: 1227,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 29,
                                model: "hailuo-02-standard",
                                company: "MiniMax",
                                logo: "",
                                score: 1222,
                                isChinese: true
                        },
                        {
                                rank: 32,
                                model: "hailuo-02-fast",
                                company: "MiniMax",
                                logo: "",
                                score: 1192,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 28,
                model: "ray-3",
                company: "Luma AI",
                logo: "",
                score: 1225,
                isChinese: false
        },
        {
                rank: 31,
                model: "hunyuan-video-1.5",
                company: "Tencent",
                logo: "",
                score: 1195,
                isChinese: true
        },
        {
                rank: 33,
                model: "seedance-v1-lite",
                company: "Bytedance",
                logo: "",
                score: 1183,
                isChinese: true
        },
        {
                rank: 34,
                model: "wan-v2.2-a14b",
                company: "Alibaba",
                logo: "",
                score: 1169,
                isChinese: true
        },
        {
                rank: 35,
                model: "veo-2",
                company: "Google",
                logo: "",
                score: 1164,
                isChinese: false
        },
        {
                rank: 36,
                model: "ltx-2-19b",
                company: "lightricks",
                logo: "",
                score: 1139,
                isChinese: false
        },
        {
                rank: 37,
                model: "ray2",
                company: "Luma AI",
                logo: "",
                score: 1106,
                isChinese: false
        },
        {
                rank: 38,
                model: "runway-gen4-turbo",
                company: "Runway",
                logo: "",
                score: 1051,
                isChinese: false
        },
        {
                rank: 39,
                model: "pika-v2.2",
                company: "Pika",
                logo: "",
                score: 995,
                isChinese: false
        }
]
};
