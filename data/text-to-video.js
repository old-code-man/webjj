// Text to Video 排行榜数据
window.rankingData = {
    title: "Text to Video",
    icon: "🎥",
    rerankAfterFilter: false, // 筛选后是否重新排名
    data: [
        {
                rank: 1,
                model: "veo-3.1-audio-1080p",
                company: "Google",
                logo: "./assets/logos/google.svg",
                score: 1381,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 2,
                                model: "veo-3.1-fast-audio-1080p",
                                company: "Google",
                                logo: "./assets/logos/google.svg",
                                score: 1378,
                                isChinese: false
                        },
                        {
                                rank: 3,
                                model: "veo-3.1-audio",
                                company: "Google",
                                logo: "./assets/logos/google.svg",
                                score: 1371,
                                isChinese: false
                        },
                        {
                                rank: 5,
                                model: "veo-3.1-fast-audio",
                                company: "Google",
                                logo: "./assets/logos/google.svg",
                                score: 1366,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 4,
                model: "sora-2-pro",
                company: "OpenAI",
                logo: "./assets/logos/openai.svg",
                score: 1367,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 9,
                                model: "sora-2",
                                company: "OpenAI",
                                logo: "./assets/logos/openai.svg",
                                score: 1342,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 6,
                model: "grok-imagine-video-720p",
                company: "xAI",
                logo: "",
                score: 1358,
                isChinese: false
        },
        {
                rank: 7,
                model: "veo-3-fast-audio",
                company: "Google",
                logo: "./assets/logos/google.svg",
                score: 1351,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 10,
                                model: "veo-3-audio",
                                company: "Google",
                                logo: "./assets/logos/google.svg",
                                score: 1341,
                                isChinese: false
                        },
                        {
                                rank: 12,
                                model: "veo-3",
                                company: "Google",
                                logo: "./assets/logos/google.svg",
                                score: 1257,
                                isChinese: false
                        },
                        {
                                rank: 14,
                                model: "veo-3-fast",
                                company: "Google",
                                logo: "./assets/logos/google.svg",
                                score: 1251,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 8,
                model: "wan2.6-t2v",
                company: "Alibaba",
                logo: "./assets/logos/alibaba.svg",
                score: 1347,
                isChinese: true
        },
        {
                rank: 11,
                model: "wan2.5-t2v-preview",
                company: "Alibaba",
                logo: "./assets/logos/alibaba.svg",
                score: 1268,
                isChinese: true
        },
        {
                rank: 13,
                model: "seedance-v1.5-pro",
                company: "Bytedance",
                logo: "./assets/logos/bytedance.svg",
                score: 1255,
                isChinese: true
        },
        {
                rank: 15,
                model: "pixverse-v5.6",
                company: "Pixverse",
                logo: "",
                score: 1228,
                isChinese: false
        },
        {
                rank: 16,
                model: "kling-2.5-turbo-1080p",
                company: "KlingAI",
                logo: "",
                score: 1221,
                isChinese: true
        },
        {
                rank: 17,
                model: "kling-2.6-pro",
                company: "KlingAI",
                logo: "",
                score: 1219,
                isChinese: true
        },
        {
                rank: 18,
                model: "runway-gen-4.5",
                company: "Runway",
                logo: "./assets/logos/runway.svg",
                score: 1214,
                isChinese: false
        },
        {
                rank: 19,
                model: "kling-o1-pro",
                company: "KlingAI",
                logo: "",
                score: 1208,
                isChinese: true
        },
        {
                rank: 20,
                model: "ray-3",
                company: "Luma AI",
                logo: "",
                score: 1204,
                isChinese: false
        },
        {
                rank: 21,
                model: "hailuo-02-pro",
                company: "MiniMax",
                logo: "",
                score: 1200,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 24,
                                model: "hailuo-02-standard",
                                company: "MiniMax",
                                logo: "",
                                score: 1181,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 22,
                model: "hailuo-2.3",
                company: "MiniMax",
                logo: "",
                score: 1196,
                isChinese: true
        },
        {
                rank: 23,
                model: "seedance-v1-pro",
                company: "Bytedance",
                logo: "./assets/logos/bytedance.svg",
                score: 1192,
                isChinese: true,
                collapsible: true,
                children: [
                        {
                                rank: 32,
                                model: "seedance-v1-lite",
                                company: "Bytedance",
                                logo: "./assets/logos/bytedance.svg",
                                score: 1114,
                                isChinese: true
                        }
                ]
        },
        {
                rank: 25,
                model: "p-video",
                company: "Pruna",
                logo: "",
                score: 1180,
                isChinese: true
        },
        {
                rank: 26,
                model: "kandinsky-5.0-t2v-pro",
                company: "Kandinsky",
                logo: "",
                score: 1179,
                isChinese: false,
                collapsible: true,
                children: [
                        {
                                rank: 33,
                                model: "kandinsky-5.0-t2v-lite",
                                company: "Kandinsky",
                                logo: "",
                                score: 1112,
                                isChinese: false
                        }
                ]
        },
        {
                rank: 27,
                model: "hunyuan-video-1.5",
                company: "Tencent",
                logo: "./assets/logos/tencent.svg",
                score: 1171,
                isChinese: true
        },
        {
                rank: 28,
                model: "kling-v2.1-master",
                company: "KlingAI",
                logo: "",
                score: 1168,
                isChinese: true
        },
        {
                rank: 29,
                model: "veo-2",
                company: "Google",
                logo: "./assets/logos/google.svg",
                score: 1166,
                isChinese: false
        },
        {
                rank: 30,
                model: "wan-v2.2-a14b",
                company: "Alibaba",
                logo: "./assets/logos/alibaba.svg",
                score: 1130,
                isChinese: true
        },
        {
                rank: 31,
                model: "ltx-2-19b",
                company: "lightricks",
                logo: "",
                score: 1122,
                isChinese: false
        },
        {
                rank: 34,
                model: "sora",
                company: "OpenAI",
                logo: "./assets/logos/openai.svg",
                score: 1071,
                isChinese: false
        },
        {
                rank: 35,
                model: "ray2",
                company: "Luma AI",
                logo: "",
                score: 1066,
                isChinese: false
        },
        {
                rank: 36,
                model: "pika-v2.2",
                company: "Pika",
                logo: "",
                score: 1011,
                isChinese: false
        },
        {
                rank: 37,
                model: "mochi-v1",
                company: "Genmo AI",
                logo: "",
                score: 999,
                isChinese: false
        }
]
};
