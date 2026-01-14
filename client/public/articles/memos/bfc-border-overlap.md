---
titleEn: "Can BFC solve border overlap issues?"
titleCh: "BFC 能解决 border 重叠问题么"
tags: ["CSS"]
---


1. **BFC 能解决的**
    - **浮动问题**：把内部浮动子元素的高度算进去（解决高度塌陷）。
    - **margin 重叠**：如果两个元素属于 **不同的 BFC**，它们之间的 margin 就不会折叠。
    - **避免被浮动覆盖**：BFC 区域会主动避开外部浮动。
2. **BFC 不能解决边框重叠（border overlapping）**
    - BFC 是“盒子布局的上下文”，不管 border 怎么画。
    - 两个 BFC 紧挨在一起时，它们的边框会叠在一块儿，浏览器不会帮你折叠 border。
3. **border 的控制办法**
    - `border-collapse` 只对 **表格（table, td, th）** 的边框起作用，不适用于普通 div。
    - 解决办法通常有两种：
        - **只给一个元素加 border**，另一个不要加。
        - 用描边 **outline** 替代 border，不占据空间和叠加，默认是四周都有：`outline: 2px solid red;`
        - 或者用 **box-shadow** 模拟分隔线，也能避免重复叠加。