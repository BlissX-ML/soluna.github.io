const modules = import.meta.glob(
    '/src/assets/_writings/_interview-handbook/front-end/basis/html/*.mdx',
    { eager: true }     // 立即引入，不用再手动 await
);


const HANDBOOK = Object.values(modules).map((mod, ind) => ({
    titleEn: mod.frontmatter.titleEn,
    titleCh: mod.frontmatter.titleCh,
    tags: mod.frontmatter.tags,
    content: mod.default,
    vol: 'html_' + (ind + 1).toString().padStart(3, '0')
}));


export const HTML_HANDBOOK = HANDBOOK


