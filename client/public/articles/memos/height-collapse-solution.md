---
titleEn: "Resolve parent element height collapse"
titleCh: "解决父元素高度塌陷"
tags: ["CSS"]
---

1. **添加空标签清除浮动**
    - 在父元素末尾插入 `<div style="clear: both;"></div>`
    - **优点**：简单直观
    - **缺点**：产生无语义标签，不利维护
2. **父元素设置 `overflow: auto`**
    - 触发 BFC，可让父元素包住浮动子元素
3. **让父元素也浮动**
    - 可以包住子元素
    - **缺点**：会影响整个布局，不推荐
4. **使用 `after` 伪元素清除浮动**
    - 给父元素添加一个类，通过伪元素生成看不见的块实现清除浮动
    - 推荐写法：`.clearfix::after { content: ""; display: block; clear: both; }`
5. **最优解：触发 BFC**
    - 触发 BFC
        - `overflow: hidden/auto`, `display: inline-block`, `position: absolute` 等
    - **原理**：BFC 会独立计算高度，因此能自然包含浮动子元素