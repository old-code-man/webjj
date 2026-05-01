// Text to Video 排行榜数据
window.rankingData = {
    title: "Text to Video",
    icon: "🎥",
    rerankAfterFilter: false, // 筛选后是否重新排名
    data: [
        {
                rank: 1,
                model: "dreamina-seedance-2.0-720p",
                company: "Bytedance",
                logo: "",
                score: 1460,
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
                model: "veo-3.1-audio-1080p",
                company: "Google",
                logo: "",
                score: 1375,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 4,
                                model: "veo-3.1-fast-audio-1080p",
                                company: "Google",
                                logo: "",
                                score: 1368,
                                isChinese: false
                        },
                        {
                                rank: 6,
                                model: "veo-3.1-audio",
                                company: "Google",
                                logo: "",
                                score: 1366,
                                isChinese: false
                        },
                        {
                                rank: 7,
                                model: "veo-3.1-fast-audio",
                                company: "Google",
                                logo: "",
                                score: 1364,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 5,
                model: "sora-2-pro",
                company: "OpenAI",
                logo: "",
                score: 1366,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 12,
                                model: "sora-2",
                                company: "OpenAI",
                                logo: "",
                                score: 1340,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 8,
                model: "grok-imagine-video-720p",
                company: "xAI",
                logo: "",
                score: 1359,
                isChinese: false
        },
        {
                rank: 9,
                model: "veo-3-fast-audio",
                company: "Google",
                logo: "",
                score: 1349,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 11,
                                model: "veo-3-audio",
                                company: "Google",
                                logo: "",
                                score: 1341,
                                isChinese: false
                        },
                        {
                                rank: 15,
                                model: "veo-3",
                                company: "Google",
                                logo: "",
                                score: 1254,
                                isChinese: false
                        },
                        {
                                rank: 16,
                                model: "veo-3-fast",
                                company: "Google",
                                logo: "",
                                score: 1249,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 10,
                model: "wan2.6-t2v",
                company: "Alibaba",
                logo: "",
                score: 1345,
                isChinese: true
        },
        {
                rank: 13,
                model: "wan2.5-t2v-preview",
                company: "Alibaba",
                logo: "",
                score: 1259,
                isChinese: true
        },
        {
                rank: 14,
                model: "seedance-v1.5-pro",
                company: "Bytedance",
                logo: "",
                score: 1259,
                isChinese: true
        },
        {
                rank: 17,
                model: "pixverse-v5.6",
                company: "Pixverse",
                logo: "",
                score: 1242,
                isChinese: false
        },
        {
                rank: 18,
                model: "runway-gen-4.5",
                company: "Runway",
                logo: "",
                score: 1239,
                isChinese: false
        },
        {
                rank: 19,
                model: "kling-2.5-turbo-1080p",
                company: "KlingAI",
                logo: "",
                score: 1220,
                isChinese: true
        },
        {
                rank: 20,
                model: "kling-2.6-pro",
                company: "KlingAI",
                logo: "",
                score: 1219,
                isChinese: true
        },
        {
                rank: 21,
                model: "ray-3",
                company: "Luma AI",
                logo: "",
                score: 1207,
                isChinese: false
        },
        {
                rank: 22,
                model: "kling-o1-pro",
                company: "KlingAI",
                logo: "",
                score: 1207,
                isChinese: true
        },
        {
                rank: 23,
                model: "p-video",
                company: "Pruna",
                logo: "",
                score: 1206,
                isChinese: true
        },
        {
                rank: 24,
                model: "hailuo-02-pro",
                company: "MiniMax",
                logo: "",
                score: 1199,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 27,
                                model: "hailuo-02-standard",
                                company: "MiniMax",
                                logo: "",
                                score: 1181,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 25,
                model: "hailuo-2.3",
                company: "MiniMax",
                logo: "",
                score: 1198,
                isChinese: true
        },
        {
                rank: 26,
                model: "seedance-v1-pro",
                company: "Bytedance",
                logo: "",
                score: 1192,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 35,
                                model: "seedance-v1-lite",
                                company: "Bytedance",
                                logo: "",
                                score: 1114,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 28,
                model: "kandinsky-5.0-t2v-pro",
                company: "Kandinsky",
                logo: "",
                score: 1176,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 34,
                                model: "kandinsky-5.0-t2v-lite",
                                company: "Kandinsky",
                                logo: "",
                                score: 1115,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 29,
                model: "hunyuan-video-1.5",
                company: "Tencent",
                logo: "",
                score: 1170,
                isChinese: true
        },
        {
                rank: 30,
                model: "veo-2",
                company: "Google",
                logo: "",
                score: 1164,
                isChinese: false
        },
        {
                rank: 31,
                model: "kling-v2.1-master",
                company: "KlingAI",
                logo: "",
                score: 1164,
                isChinese: true
        },
        {
                rank: 32,
                model: "wan-v2.2-a14b",
                company: "Alibaba",
                logo: "",
                score: 1133,
                isChinese: true
        },
        {
                rank: 33,
                model: "ltx-2-19b",
                company: "lightricks",
                logo: "",
                score: 1131,
                isChinese: false
        },
        {
                rank: 36,
                model: "sora",
                company: "OpenAI",
                logo: "",
                score: 1070,
                isChinese: false
        },
        {
                rank: 37,
                model: "ray2",
                company: "Luma AI",
                logo: "",
                score: 1066,
                isChinese: false
        },
        {
                rank: 38,
                model: "pika-v2.2",
                company: "Pika",
                logo: "",
                score: 1009,
                isChinese: false
        },
        {
                rank: 39,
                model: "mochi-v1",
                company: "Genmo AI",
                logo: "",
                score: 1007,
                isChinese: false
        }
]
};
