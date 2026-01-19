---
titleEn: "Common compatibility issues"
titleCh: "常见的兼容性问题"
tags: ["engineering"]
---

1. 不同浏览器标签默认的 `margin / padding` 不一致
    - 解决：使用通配符重置 `{ margin: 0; padding: 0; }` 或用 normalize.css。
2. **IE6 双边距 bug**（`float` + 横向 `margin` 会变大）
    - 原因：浮动元素在 IE6 中会出现 margin 放大。
    - 解决：`display: inline;`（把块级转为行内块效果）。
3. 小高度标签在 IE6 / IE7 中高度显示异常
    - 如高度 < 10px 会自动变大。
    - 解决：给元素加 `overflow: hidden;` 或把 line-height 设置为比 height 更小。
4. Chrome 中文界面会强制最小字体 12px
    - 某些小字体会被强行变成 12px。
    - 解决：**`webkit-text-size-adjust: none;`**
5. 超链接访问后 hover 失效问题
    - 被访问过的链接（visited）会覆盖 hover 和 active 样式。
    - 正确排列顺序（**LVHA 原则**）：`a:link → a:visited → a:hover → a:active`