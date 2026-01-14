---
titleEn: "Front-end Performance Optimization"
titleCh: "前端性能优化"
tags: ["engineering"]
---


1. **减少 HTTP 请求数**
    - 合并图片
        - 使用 CSS 雪碧Sprite图
        - Sprite 图：把小图标合并成单张大图，通过 background-position 显示不同位置
    - 合并压缩 CSS/JS（用 html-minifier、cssnano、Terser 等工具）
    - 合理利用缓存（设置 Cache-Control / ETag）
2. **图片优化**
    - 使用合适格式：PNG（透明）、JPEG（照片）、WebP（体积小）、SVG（矢量图）
    - 压缩工具：sharp、tinypng.com、imagemin
    - 懒加载，按需加载图片。原生懒加载：`<img src="banner.jpg" loading="lazy" />`
3. **使用 CDN**
    - 本质：路由到最近节点。
    - 静态资源放在 CDN，用户就近访问，加快加载
    - 免费 CDN：jsDelivr、unpkg、BootCDN
    - 企业项目常用付费 CDN（阿里云、腾讯云、Cloudflare）
    
    ```html
    <!-- 引入第三方库走 CDN -->
    <script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.min.js"></script>
    ```
    
4. **开启 GZIP 压缩**
    - 服务端开启传输压缩，HTML/CSS/JS 文件体积可减少 60%+
    - 前端只需确认开启，配置由后端/运维完成
    
    ```jsx
    # Nginx 配置示例
    gzip on;
    gzip_types text/css application/javascript application/json;
    ```
    
5. **构建优化**
    - **Tree-shaking**：只打包用到的函数
    - **Code-splitting**：按需加载模块
    - **Scope hoisting**：把零散的小函数合并在一起，减少闭包层级（Webpack 自动做）
    - **砍没用 → 拆大块 → 合小片**
    
    ```jsx
    // Tree-shaking 示例：只打包 add
    import { add } from './math.js';
    console.log(add(2, 3));
    
    // math.js
    export function add(a, b) { return a + b; }
    export function sub(a, b) { return a - b; }
    ```
    
6. **总结**：**先少请求 → 再减体积 → 图要轻/懒加载 → 代码要精简 → 最后用 CDN 提速**。
