const modules = import.meta.glob(
    '/src/assets/writings/interview-handbook/front-end/advanced/browser/*.mdx',
    { eager: true }     // 立即引入，不用再手动 await
);


const HANDBOOK = Object.values(modules).map((mod, ind) => ({
    titleEn: mod.frontmatter.titleEn,
    titleCh: mod.frontmatter.titleCh,
    tags: mod.frontmatter.tags,
    content: mod.default,
    vol: 'Browser_' + (ind + 1).toString().padStart(3, '0')
}));


export const Browser_HANDBOOK = HANDBOOK


