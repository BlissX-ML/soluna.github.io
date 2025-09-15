import * as TestHTML from '#/interview-handbook/front-end/basis/html/001-HTML5-New-Features.mdx';

const HANDBOOK = [
    {
        titleEn: TestHTML.frontmatter.titleEn,
        titleCh: TestHTML.frontmatter.titleCh,
        tags: TestHTML.frontmatter.tags,
        content: TestHTML.default,
    }
]

export const HTML_HANDBOOK = HANDBOOK.map((el, ind) => ({
    ...el,
    vol: (ind + 1).toString().padStart(3, '0')
}))


