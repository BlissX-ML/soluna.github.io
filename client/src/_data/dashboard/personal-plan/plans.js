export const FUTURE_PLANS = [
    { category: 'all', key: 'all', title: '全部', canIterate: false },
    {
        category: 'work-related',
        key: 'work-related',
        title: '工作相关',
        canIterate: true,
        details: [
            {
                category: 'apply-for-a-job',
                key: 'apply-for-a-job',
                title: '找到一份新工作',
                completionTime: null
            },
            {
                category: 'save-money',
                key: 'save-money',
                title: '攒够 20,000 元（约为每月 2,000 元）',
                completionTime: null
            }
        ]
    },
    {
        category: 'self-improvement',
        key: 'self-improvement',
        title: '自我提升',
        canIterate: true,
        details: [
            {
                category: 'd3-visualization',
                key: 'd3-visualization',
                title: 'D3.js 可视化学习',
                completionTime: '2026.01.03',
                onlineCourse: [
                    {
                        platform: 'Youtube',
                        heading: 'D3.js - A Practical Introduction'
                    },
                    {
                        platform: 'Youtube',
                        heading:
                            'Data Visualization with D3 – Full Course for Beginners'
                    }
                ]
            },
            {
                category: 'three-visualization',
                key: 'three-visualization',
                title: 'Three.js 可视化学习',
                completionTime: null,
                onlineCourse: [
                    {
                        platform: 'Youtube',
                        heading:
                            'Three.js 101 Crash Course: Beginner’s Guide to 3D Web Design (7 HOURS!)'
                    }
                ]
            },
            {
                category: 'react-native',
                key: 'react-native',
                title: 'React Native 系统学习',
                completionTime: null,
                onlineCourse: [
                    {
                        platform: 'Coursera',
                        heading: 'Meta React Native Specialization'
                    },
                    {
                        platform: 'Udemy',
                        heading: 'React Native - The Practical Guide'
                    }
                ]
            },
            {
                category: 'python',
                key: 'python',
                title: 'Python 系统学习',
                completionTime: null,
                onlineCourse: [
                    {
                        platform: 'Coursera',
                        heading: 'Python for Everybody Specialization'
                    },
                    {
                        platform: 'Udemy',
                        heading:
                            'Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!'
                    }
                ]
            },
            {
                category: 'sql',
                key: 'sql',
                title: 'SQL 系统学习',
                completionTime: null,
                onlineCourse: [
                    {
                        platform: 'Youtube',
                        heading:
                            'Learn SQL Beginner to Advanced in Under 4 Hours'
                    },
                    {
                        platform: 'Youtube',
                        heading:
                            'SQL Full Course for Beginners (30 Hours) – From Zero to Hero'
                    },
                    {
                        platform: 'Coursera',
                        heading:
                            'Databases and SQL for Data Science with Python'
                    }
                ]
            },
            {
                category: 'node-js',
                key: 'node-js',
                title: 'Node.js 系统学习',
                completionTime: null,
                onlineCourse: [
                    {
                        platform: 'Udemy',
                        heading:
                            'Master Node JS & Deno.js, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!'
                    }
                ]
            },
            {
                category: 'korean',
                key: 'korean',
                title: '韩语语言入门',
                completionTime: null,
                onlineCourse: [
                    {
                        platform: 'B站',
                        heading:
                            '【教程】韩语发音教学2017新版【合集】养乐多老师制作-韩语入门-自学韩语'
                    }
                ]
            },
            {
                category: 'ielts',
                key: 'ielts',
                title: '雅思 IELTS 备考（≥7.0）',
                completionTime: null,
                onlineCourse: [
                    {
                        platform: 'Youtube',
                        heading: 'IELTS 2026 Complete 11 Hour Course'
                    }
                ]
            }
        ]
    },
    {
        category: 'travel-relaxation',
        key: 'travel-relaxation',
        title: '旅游放松',
        canIterate: true,
        details: [
            {
                category: 'hangzhou',
                key: 'hangzhou',
                title: '杭州旅游',
                completionTime: null
            },
            {
                category: 'chengdu',
                key: 'chengdu',
                title: '成都',
                completionTime: null
            },
            {
                category: 'chongqing',
                key: 'chongqing',
                title: '重庆',
                completionTime: null
            },
            {
                category: 'jizhoudao',
                key: 'jizhoudao',
                title: '<韩国>济州岛',
                completionTime: null
            }
        ]
    },
    {
        category: 'interest-hobby',
        key: 'interest-hobby',
        title: '兴趣爱好',
        canIterate: true,
        details: [
            {
                category: 'sanda',
                key: 'sanda',
                title: '散打体验',
                completionTime: null
            },
            {
                category: 'shoot',
                key: 'shoot',
                title: '射击体验',
                completionTime: null
            },

            {
                category: 'guqin',
                key: 'guqin',
                title: '古琴体验',
                completionTime: null
            },
            {
                category: 'tennis',
                key: 'tennis',
                title: '网球体验',
                completionTime: null
            },

            {
                category: 'pilates',
                key: 'pilates',
                title: '普拉提体验',
                completionTime: null
            },
            {
                category: 'jazz-dance',
                key: 'jazz-dance',
                title: 'Jazz 舞蹈学习 30 次',
                completionTime: null
            },
            {
                category: 'bow',
                key: 'bow',
                title: '传统弓训练 15 次',
                completionTime: null
            }
        ]
    },
    {
        category: 'lifestyle-habit',
        key: 'lifestyle-habit',
        title: '生活习惯',
        canIterate: true,
        details: [
            {
                category: 'lose-weight',
                key: 'lose-weight',
                title: '减脂到 125 斤',
                completionTime: null
            },
            {
                category: 'health-examination',
                key: 'health-examination',
                title: '部分体检小套餐',
                completionTime: null
            },
            {
                category: 'schedule',
                key: 'schedule',
                title: '早睡早起 22:30 - 7:00',
                completionTime: null
            }
        ]
    }
];

export const PLAN_COLORS = [
    { fill: '#F2C6CF', stroke: '#E39AA8' }, // 柔玫粉
    { fill: '#D6EADF', stroke: '#AFCFC0' }, // 雾薄荷
    { fill: '#F3D6B8', stroke: '#DDB68E' }, // 奶杏
    { fill: '#DCE4F2', stroke: '#B3C3E6' }, // 雾蓝
    { fill: '#E7D9F2', stroke: '#C9B2E0' }, // 淡紫

    { fill: '#EADFCB', stroke: '#D0C2A0' }, // 暖米
    { fill: '#D8EDF0', stroke: '#ADD7DE' }, // 浅湖蓝
    { fill: '#F2D0C4', stroke: '#E2A99A' }, // 浅珊瑚
    { fill: '#E1E8D6', stroke: '#BCCCA4' }, // 灰豆绿
    { fill: '#E6DCEB', stroke: '#C6B2D6' }, // 雾薰衣

    { fill: '#F0E3E6', stroke: '#D9B8C3' }, // 灰玫瑰
    { fill: '#D3E6E1', stroke: '#A9CEC5' }, // 冷薄荷
    { fill: '#F2E1B8', stroke: '#E0C985' }, // 浅秋黄
    { fill: '#D9E0EF', stroke: '#B1C1E0' }, // 冷灰蓝
    { fill: '#EAD7E3', stroke: '#D0A9C2' }, // 雾粉紫

    { fill: '#E5E8D8', stroke: '#BEC6A6' }, // 灰草绿
    { fill: '#F2D6DE', stroke: '#E0A8BA' }, // 浅蔷薇
    { fill: '#DCE8E6', stroke: '#A9CFCB' }, // 冷青灰
    { fill: '#EFE1D8', stroke: '#D3B8A6' }, // 杏灰
    { fill: '#E0D6F0', stroke: '#BFADE0' } // 冷紫
];
