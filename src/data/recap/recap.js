const getRandom = () => {
    return (Math.random() * 2 - 1).toFixed(2)
}

export const RECAP_NAV = [
    { key: 'Computer-Related', title: 'Computer-Related', dropTitle: 'Computer', delayTime: getRandom() },
    { key: 'Chemistry-Related', title: 'Chemistry-Related', dropTitle: 'Chemistry', delayTime: getRandom() },
    { key: 'Language-Related', title: 'Language-Related', dropTitle: 'Language', delayTime: getRandom() },
    { key: 'Animal-Related', title: 'Animal-Related', dropTitle: 'Animal', delayTime: getRandom() },
];

export const RECAP_MAIN_KEYS = [...RECAP_NAV].map(el => el.key)

export const RECAP_Detailed_Nav = [
    {
        key: 'Computer-Related',
        content: [
            { key: 'Computer_1', content: 'HTML', path: '' },
            { key: 'Computer_2', content: 'CSS', path: '' },
            { key: 'Computer_3', content: 'JavaScript', path: '' },
            { key: 'Computer_4', content: 'React', path: '' },
            { key: 'Computer_5', content: 'Postgraduate Entrance Exam -> 408', path: '' },
        ]
    },
    {
        key: 'Chemistry-Related',
        content: [
            { key: 'Chemistry_1', content: '无机化学', path: '' },
            { key: 'Chemistry_2', content: '有机化学', path: '' },
            { key: 'Chemistry_3', content: '物理化学', path: '' },
            { key: 'Chemistry_4', content: '分析化学', path: '' },
            { key: 'Chemistry_5', content: 'Gaussain计算', path: '' }
        ]
    },
    {
        key: 'Language-Related',
        content: [
            { key: 'Language_1', content: 'English', path: '' },
            { key: 'Language_2', content: '日本語', path: '' },
            { key: 'Language_3', content: '한국어', path: '' },
        ]
    },
    {
        key: 'Animal-Related',
        content: [
            { key: '', content: '', path: '' },
        ]
    }
]

export const SUB_TO_MAIN = Object.fromEntries(
    RECAP_Detailed_Nav.flatMap(group =>
        group.content.map(item => [item.key, group.key])
    )
);