---
titleEn: "D3.js Chart Layout and Axis Construction"
titleCh: "D3.js 图表布局与坐标轴构建"
tags: ["d3.js"]
---

1. **`margin` 的作用与实现方式**
    1. 定义各个方向上 `margin` 的大小
    2. 在 `.range()` 时，使用 `width / height` 与 `width` 相结合的方法实现 `margin` 操作
2. **添加 D3 的数轴**
    1. **数轴存放位置**
        - `d3.axisLeft()` → Y 坐标轴，刻度位于数轴左侧
        - `d3.axisRight()` → Y 坐标轴，刻度位于数轴的右侧
        - `d3.axisTop()` → X 坐标轴，刻度位于数轴的上侧
        - `d3.axisBottom()` → X 坐标轴，刻度位于数轴的下侧
    2. **添加方法一**：结合 `transform` 与 `.call()` 实现坐标轴的添加
        - `.call()` 中表明添加的坐标轴类型
        - **`transform`的注意点**
            - X轴：`translate(0, y)` →  `x = 0`，始于左边缘，但需**垂直向下移动**至 `y`
            - Y轴：`translate(x, 0)` →  `y = 0`，始于顶部边缘，但需**水平移动**至 `x`
    3. **添加方法二**：调用 axis 方法，如 `d3.axisLeft(linearData)(attr)`
        - `linearData` → 通过 `scaleLinear()` 调用执行获得的 x 轴与 y 轴的范围
        - `attr` → 确定 axis 的放置位置以及属性定义
    4. **控制坐标轴刻度的位置**
        - **在 axis 函数后面调用**
        - `.ticks(number)` 提供建议刻度数量，D3 **自动选择**合理间隔（能确保刻度均在轴上）
            
            ```jsx
            .ticks(10, '.0f')     // 1, 2, 3 (no decimals)
            .ticks(10, '.1f')     // 1.0, 2.5, 3.7 (1 decimal)
            .ticks(10, '.2f')     // 1.00, 2.50, 3.75 (2 decimals)
            .ticks(10, ',')       // 1,000, 2,000 (comma separator)
            .ticks(10, '.2%')     // 10.50%, 25.75% (percentage)
            .ticks(10, '.2s')     // 1.0k, 2.5M (SI prefix, 采用字母的人类可读形式)
            .ticks(10, '.2e')     // 1.0e+3, 1.5e+6 (Scientific notation, 科学计数法)
            ```
            
        - `.tickValues(array)` 提供指定精确刻度位置，同时结合 `d3.range()` 可以控制范围
        - `.tickSize()` 控制刻度大小
    5. **坐标轴文字样式修改**： `text { ... styles }`