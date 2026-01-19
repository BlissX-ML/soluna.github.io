---
titleEn: "Mobile Device Adaptation Methods"
titleCh: "移动端适配方式"
tags: ["CSS"]
---

1. **rem 适配**
    - **原理**：通过设置根元素 `font-size`，改变元素在不同设备上占据的 CSS 像素个数。
    - **优点**：不破坏完美视口。
    - **缺点**：px 转 rem 计算复杂（通常用 Less/Sass 等预处理器简化）。
2. **viewport 适配**
    - **原理**：把整张设计稿缩小/放大到屏幕里。
    - **实现**：`<meta name="viewport" content="width=750, initial-scale=0.5">`
    - **优点**：设计稿上量多少，就能直接写多少（所量即所设）。
    - **缺点**：破坏**完美视口**（缩放后，设备逻辑宽度和真实宽度不一致）