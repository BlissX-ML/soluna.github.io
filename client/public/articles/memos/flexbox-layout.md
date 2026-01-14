---
titleEn: "Flexbox Layout"
titleCh: "Flex布局"
tags: ["CSS"]
---


1. **概念**
    - Flex（Flexible Box），弹性布局。
    - 父容器设 `display: flex`，子元素变为 flex item。
    - 优点：横向/纵向排列、对齐、分配剩余空间都很灵活。
2. **容器属性（父元素）**
    - `flex-direction`
        - 主轴方向：row | row-reverse | column | column-reverse
    - `flex-wrap`
        - 换行规则：nowrap | wrap | wrap-reverse
    - **`flex-flow`**
        - direction + wrap 的简写
        - 示例：`flex-flow: row wrap;`
    - `justify-content`
        - 主轴对齐：flex-start | flex-end | center | space-between | space-around | space-evenly
        - 主轴是 flex-direction 定义的方向
    - `align-items`
        - 交叉轴对齐 → flex-start | flex-end | center | baseline | stretch
        - 交叉轴是和主轴垂直的方向
    - `align-content`
        - 多根轴线时的对齐（多行时生效）
3. **项目属性（子元素）**
    - `order`
        - 用来调整子元素的显示顺序，默认 0，数字小的排在前面。
    - `flex-grow`
        - 放大比例，默认 0，不放大。
        - 用来决定**剩余空间怎么分**
    - `flex-shrink`
        - 缩小比例，默认 1，会缩小。设为 0 则不缩小。
        - 用来决定**空间不足时怎么缩**
    - `flex-basis`
        - 分配剩余空间前的基准值，默认 auto。
    - **`flex`**
        - `grow shrink basis` 的简写，默认 0 1 auto。
    - `align-self`
        - 允许单个项目在**交叉轴上独立对齐**，覆盖 align-items。
4. **面试口诀**
    - **容器 6 属性**：方向（direction）、换行（wrap）、组合（flow）、主轴对齐（justify）、交叉对齐（align-items）、多行对齐（align-content）。
    - **项目 5 属性**：顺序（order）、放大（grow）、缩小（shrink）、基准（basis）、单独对齐（self）。