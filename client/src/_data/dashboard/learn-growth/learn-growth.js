const ONLINE_COURSE = [
    {
        category: 'd3-visualization',
        key: 'd3-visualization',
        title: 'D3.js 可视化学习',
        completionTime: '2026.01.03',
        details: [
            {
                key: 'd3js1',
                platform: 'Youtube',
                percent: 100,
                heading: 'D3.js - A Practical Introduction'
            },
            {
                key: 'd3js2',
                platform: 'Youtube',
                percent: 100,
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
        details: [
            {
                key: 'three1',
                platform: 'Youtube',
                percent: 0,
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
        details: [
            {
                key: 'reactnative1',
                platform: 'Coursera',
                percent: 0,
                heading: 'Meta React Native Specialization'
            },
            {
                key: 'reactnative2',
                platform: 'Udemy',
                percent: 0,
                heading: 'React Native - The Practical Guide'
            }
        ]
    },
    {
        category: 'python',
        key: 'python',
        title: 'Python 系统学习',
        completionTime: null,
        details: [
            {
                key: 'python1',
                platform: 'Coursera',
                percent: 0,
                heading: 'Python for Everybody Specialization'
            },
            {
                key: 'python2',
                platform: 'Udemy',
                percent: 0,
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
        details: [
            {
                key: 'sql1',
                platform: 'Youtube',
                percent: 0,
                heading: 'Learn SQL Beginner to Advanced in Under 4 Hours'
            },
            {
                key: 'sql2',
                platform: 'Youtube',
                percent: 0,
                heading:
                    'SQL Full Course for Beginners (30 Hours) – From Zero to Hero'
            },
            {
                key: 'sql3',
                platform: 'Coursera',
                percent: 0,
                heading: 'Databases and SQL for Data Science with Python'
            }
        ]
    },
    {
        category: 'node-js',
        key: 'node-js',
        title: 'Node.js 系统学习',
        completionTime: null,
        details: [
            {
                key: 'nodejs1',
                platform: 'Udemy',
                percent: 0,
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
        details: [
            {
                key: 'korean1',
                platform: 'B站',
                percent: 0,
                heading: '【教程】韩语发音教学 养乐多老师制作'
            }
        ]
    },
    {
        category: 'ielts',
        key: 'ielts',
        title: '雅思 IELTS 备考（≥7.0）',
        completionTime: null,
        details: [
            {
                key: 'ielt1',
                platform: 'Youtube',
                percent: 0,
                heading: 'IELTS 2026 Complete 11 Hour Course'
            }
        ]
    }
];

const UDEMY_COURSES = [
    {
        category: 'frontend-framework',
        key: 'frontend-framework',
        title: '前端框架',
        completionTime: null,
        details: [
            {
                key: 'react',
                heading: 'React - The Complete Guide (incl. Next.js, Redux)',
                platform: 'Udemy',
                percent: 68
            },
            {
                key: 'nextjsreact',
                heading: 'Next.js & React - The Complete Guide',
                platform: 'Udemy',
                percent: 0
            },
            {
                key: 'vue',
                heading: 'Vue - The Complete Guide',
                platform: 'Udemy',
                percent: 0
            }
        ]
    },
    {
        category: 'frontend-core',
        title: '前端核心基础',
        key: 'frontend-core',
        completionTime: null,
        details: [
            {
                key: 'js',
                heading:
                    'The Complete JavaScript Course 2025: From Zero to Expert!',
                platform: 'Udemy',
                percent: 85
            },
            {
                key: 'webpack',
                heading: 'Webpack 5: The Complete Guide For Beginners',
                platform: 'Udemy',
                percent: 11
            }
        ]
    },
    {
        category: 'backend',
        title: '后端 / API',
        key: 'backend',
        completionTime: null,
        details: [
            {
                key: 'node',
                heading:
                    'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
                platform: 'Udemy',
                percent: 17
            }
        ]
    },
    {
        category: 'fullstack',
        title: '全栈开发',
        key: 'fullstack',
        completionTime: null,
        details: [
            {
                key: 'fullstack',
                heading: 'The Complete Full-Stack Web Development Bootcamp',
                platform: 'Udemy',
                percent: 0
            }
        ]
    },
    {
        category: 'programming-language',
        title: '编程语言',
        key: 'programming-language',
        completionTime: null,
        details: [
            {
                key: 'python-100',
                heading: '100 Days of Code™: The Complete Python Pro Bootcamp',
                platform: 'Udemy',
                percent: 0
            },
            {
                key: 'python-auto',
                heading: 'Automate the Boring Stuff with Python Programming',
                platform: 'Udemy',
                percent: 0
            },
            {
                key: 'cpp',
                heading:
                    'Data Structures and OOP with C++ : CS104, CS105 Masterclass',
                platform: 'Udemy',
                percent: 0
            }
        ]
    },
    {
        category: 'data-ai',
        title: '数据 / AI',
        key: 'data-ai',
        completionTime: null,
        details: [
            {
                key: 'data-science',
                heading:
                    'The Data Science Course: Complete Data Science Bootcamp 2026',
                platform: 'Udemy',
                percent: 0
            },
            {
                key: 'ml-python',
                heading:
                    'Python for Data Science and Machine Learning Bootcamp',
                platform: 'Udemy',
                percent: 0
            },
            {
                key: 'chatgpt',
                heading: 'ChatGPT Masterclass & Prompt Engineering',
                platform: 'Udemy',
                percent: 0
            }
        ]
    },
    {
        category: '',
        title: '系统 / 网络 / 安全',
        key: 'system-network',
        completionTime: null,
        details: [
            {
                key: 'nmap',
                heading: 'Real NMAP: Network Scanning & Recon',
                platform: 'Udemy',
                percent: 0
            }
        ]
    },
    {
        category: 'mobile',
        title: '移动开发',
        key: 'mobile',
        completionTime: null,
        details: [
            {
                key: 'android',
                heading: 'Android App Development in 34 Hours',
                platform: 'Udemy',
                percent: 0
            }
        ]
    },
    {
        category: 'design',
        title: '设计工具',
        key: 'design',
        completionTime: null,
        details: [
            {
                key: 'ps',
                heading: 'Adobe Photoshop CC Fundamentals',
                platform: 'Udemy',
                percent: 0
            }
        ]
    }
];

export const CATEGORIES_COURSES = [
    {
        category: 'udemy',
        key: 'udemy',
        title: 'Udemy 已购课程',
        canIterate: true,
        details: UDEMY_COURSES
    },
    {
        category: 'skill',
        key: 'skill',
        title: '年度技能学习计划',
        canIterate: true,
        details: ONLINE_COURSE
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
