---
titleEn: "Browser style compatibility"
titleCh: "浏览器样式兼容"
tags: ["engineering"]
---

1. **CSS 初始化（Reset / Normalize）**
    - 不同浏览器有不同默认样式，需要统一处理。
    - 常用写法：
        - `{ margin: 0; padding: 0; }`
    - 常用工具：
        - `normalize.css`（更温和的初始化方式）
2. **浏览器私有属性（Vendor Prefix）**
    - 某些 CSS 属性需要浏览器前缀才能兼容。
    - 常见示例：
        - Firefox：`moz-border-radius: 10px;`
        - Chrome/Safari：`webkit-border-radius: 10px;`
        - IE（少数新属性）：`ms-transform: rotate(30deg);`
3. **CSS Hack 手段**
    - CSS Hack 作用：**针对不同浏览器写不同的样式，让页面在各浏览器都能正常显示。**
    - **属性级 hack 示例**
        - `height: 100px;`
        - `_height: 120px;`（IE6 会识别）
        - `*height: 140px;`（IE7 会识别）
    - **选择符级 hack 示例**
        - `html .box { color: red; }`（仅 IE6 识别）
        - `html>body .box { color: blue; }`（IE6 不识别）
    - **条件注释 hack 示例（仅 IE）**
        - `<!--[if IE]> <style>.box{color:green;}</style> <![endif]-->`