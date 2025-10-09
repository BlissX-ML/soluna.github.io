import metaUrl from '@/_documents/meta/meta.pdf?url'

const AWARDS_IMAGES = {
    cet4: '/images/webp/awards/english/cet4.webp',
    cet6: '/images/webp/awards/english/cet6.webp',
    n2: '/images/webp/awards/japanese/n2.webp',
    lc_75: '/images/webp/awards/leetcode/leetcode-75.webp',
    lc_js_30_day: '/images/webp/awards/leetcode/JavaScript-30-day.webp',
}


export const COMPLETE_ITEMS = [
    {
        key: 'English_level4',
        title: '大学英语四级证书',
        srcs: AWARDS_IMAGES.cet4
    },
    {
        key: 'English_level6',
        title: '大学英语六级证书',
        srcs: AWARDS_IMAGES.cet6
    },
    {
        key: 'JLPT_N2',
        title: 'JLPT 日本语能力测试 - N2 证书',
        srcs: AWARDS_IMAGES.n2
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
    },
]