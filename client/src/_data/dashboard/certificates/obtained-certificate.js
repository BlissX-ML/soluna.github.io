import metaUrl from '@/_documents/meta/meta.pdf?url';

const AWARDS_IMAGES = {
    cet4: '/images/webp/certificate/english/cet4.webp',
    cet6: '/images/webp/certificate/english/cet6.webp',
    n2: '/images/webp/certificate/japanese/n2.webp',
    lc_75: '/images/webp/certificate/leetcode/leetcode-75.webp',
    lc_js_30_day: '/images/webp/certificate/leetcode/JavaScript-30-day.webp'
};

export const OBTAINED_CERTIFICATE = [
    {
        category: 'language-certificate',
        key: 'language-certificate',
        title: '语言类证书',
        details: [
            {
                key: 'english_level4',
                title: '大学英语四级证书',
                srcs: AWARDS_IMAGES.cet4
            },
            {
                key: 'english_level6',
                title: '大学英语六级证书',
                srcs: AWARDS_IMAGES.cet6
            },
            {
                key: 'JLPT_N2',
                title: 'JLPT 日本语能力测试 - N2 证书',
                srcs: AWARDS_IMAGES.n2
            }
        ]
    },
    {
        category: 'online-course-certificate',
        key: 'online-course-certificate',
        title: '线上网课证书'
    },

    {
        key: 'meta',
        title: 'Meta Front-end Developer 系列课程（共计 9 节）',
        srcs: metaUrl
    },
    {
        key: 'lt75',
        title: 'LeetCode 75',
        srcs: AWARDS_IMAGES.lc_75
    },
    {
        key: 'lt30JS',
        title: '30 天 JavaScript 挑战',
        srcs: AWARDS_IMAGES.lc_js_30_day
    }
];
