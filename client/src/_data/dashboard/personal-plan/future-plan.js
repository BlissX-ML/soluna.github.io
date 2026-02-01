export const FUTURE_PLANS = [
    { category: 'all', key: 'all', title: '全部' },
    {
        category: 'work-related',
        key: 'work-related',
        title: '工作相关',
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
        details: [
            {
                category: 'd3-visualization',
                key: 'd3-visualization',
                title: 'D3.js 可视化学习',
                completionTime: null,
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
