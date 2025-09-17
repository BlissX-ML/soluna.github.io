declare module '*.module.css';
declare module '*.module.scss'; // 可选，如果你用 SCSS

declare module '*.mdx' {
    export const frontmatter: {
        titleEn?: string
        titleCh?: string
        tags?: string[]
    }
    const Component: React.ComponentType<any>
    export default Component
}