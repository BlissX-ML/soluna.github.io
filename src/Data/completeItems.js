const AWARDS_IMAGES = {
    cet4: '/images/webp/awards/english/cet4.webp',
    cet6: '/images/webp/awards/english/cet6.webp',
    n2: '/images/webp/awards/japanese/n2.webp',
}

const AWARDS_PDF = {
    meta: '/documents/meta/meta.pdf'
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
        srcs: AWARDS_PDF.meta
    },
    {
        key: 'lt75',
        title: 'LeetCode 75',
        srcs: null
    },
    {
        key: 'lt30JS',
        title: '30 天 JavaScript 挑战',
        srcs: null
    },
]