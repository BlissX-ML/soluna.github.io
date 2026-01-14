---
titleEn: "Inline-Level, Block-Level, and Empty Elements"
titleCh: "行内元素、块级元素与空元素"
tags: ["CSS"]
---


| 类型 | 特点 | 是否独占一行 | 可否设置宽高 | 常见元素 |
| --- | --- | --- | --- | --- |
| **块级元素 block** | 独占一行，宽度**默认撑满**父容器 | ✅ 会 | ✅ 可以 | div, p, h1~h6, ul, ol, li, table, form |
| **行内元素 inline** | 与文字一起排布，宽高由**内容撑开** | ❌ 不会 | ❌ 不可以 | span, a, em, strong, i, u, sub, sup |
| **行内块 inline-block** | 可设置宽高，又能与其他元素同一行 | ❌ 不会 | ✅ 可以 | img, input, textarea, select, button, canvas, svg |

1. **块级元素（Block Elements）**
    - **独占**一行，宽度默认撑满父容器，可以设置宽高。
    - 常见块级元素：`div / p / h1~h6 / **列表** / **table** / **form** / section / article / header / footer`
2. **行内元素（Inline Elements）**
    - 与文字排在同一行，宽高**由内容撑开**，不能设置宽高。
    - 常见行内元素：`span / a / em / strong / i / u / b / sub / sup / label`
3. **行内块元素（Inline-block Elements）**
    - 既能和文字**同一行**显示，又能设置**宽高**。
    - 常见行内块元素：`img / input / textarea / select / button / canvas / svg`
4. **空元素（Void Elements）**：
    - 在 **HTML 语法** 层面，没有闭合标签，也不能有子元素。
    - 常见的空元素：`br / hr / img / input / link / meta`
