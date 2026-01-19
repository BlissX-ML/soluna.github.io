---
titleEn: "Distinguishing Between rem and em"
titleCh: "区别 rem 和 em"
tags: ["CSS"]
---

- **em**
    - 相对 **当前元素** 或其 **父元素** 的 `font-size`
    - 例如：父元素 `font-size: 20px`，子元素 `width: 2em` → 实际宽度 = 40px
- **rem**（root em）
    - 相对 **根元素 (html)** 的 `font-size`
    - 与父元素无关，更稳定
    - 例如：`html { font-size: 10px }`，任意元素 `width: 2rem` → 实际宽度 = 20px