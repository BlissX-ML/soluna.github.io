// const IMAGES = import.meta.glob('/images/homepage/*.{jpg,png}', { eager: true, query: '?url', import: 'default' })

export const SCROLL_IMAGES = [
    {
        key: 'image_1',
        title: 'Grass',
        src: 'images/png/temp/screen1.jpg',
        webp: 'images/webp/temp/screen1.webp',   // 新增 webp 路径
        description: 'This is a beautiful place.'
    },
    {
        key: 'image_2',
        title: 'Dogs',
        src: 'images/png/temp/screen2.png',
        webp: 'images/webp/temp/screen2.webp',
        description: 'Freedom??!!'
    },
    {
        key: 'image_3',
        title: 'Ocean',
        src: 'images/png/temp/screen3.png',
        webp: 'images/webp/temp/screen3.webp',
        description: 'Just beautiful?'
    }
];


export const WELCOME_IMAGE = [
    {
        key: 'welcome_1',
        src: 'images/png/welcome/welcome.jpg',
        webp: 'images/webp/welcome/welcome.webp',
    }
]
