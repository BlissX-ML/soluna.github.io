---
titleEn: "D3.js Data Range Calculation and Scale"
titleCh: "D3.js 数据范围计算与比例尺"
tags: ["d3.js"]
---

1. **获取最大值与最小值的数组范围：**
    1. `d3.min(para1, para2) / d3.max(para1, para2)`
        - `para1` → 可迭代数组
        - `para2` → 用于提取待比较值的访问函数，可省略
        - 需要同时调用才可以返回对应的 `[最小值, 最大值]` 数组
    2. `d3.extent(para1, para2)`
        - 各参数含义与 `.min` 和 `.max` 相同
        - 该方法可以直接返回对应的 `[最小值, 最大值]` 数组
    
    ```jsx
    const obj = [
        { type: "J-POP", times: 1254 }, 
        { type: "K-POP", times: 3214 },
        { type: "C-POP", times: 354 },
    ];
    
    console.log(d3.max(obj, (d) => d.times));   // Returns 3214
    
    const dataFn = (d) => d.times;
    const range1 = d3
        .scaleLinear()
        .domain([d3.min(obj, dataFn), d3.max(obj, dataFn)]);
    console.log(range1.domain());                // [354, 3214]
    
    const range2 = d3.scaleLinear().domain(d3.extent(obj, dataFn));
    console.log(range2.domain());                // [354, 3214]
    ```
    
    ---
    
2. **D3.js 中的比例尺类型**
    1. **`d3.scaleLinear()`**
        - 适用于**连续数值**数据，**输入数字 → 输出数字**，可绘制散点图【 基于数值测量的定位】
        - `scaleLinear: output = input × (rangeMax / domainMax)`
        - 示例：`domainMax = 200`，`rangeMax = 100`， `input = 64`  →   `output = 64 * (100 / 200) = 32`
    2. **`d3.scaleSqrt()`**
        - 使用指定的定义域和值域，构建一个新的线性标度（适用于**圆形/气泡图**半径）
        - `scaleSqrt:   output = √input × (rangeMax / √domainMax)`
        - 示例：同样条件 →   `output = √64 * (100 / √200) = 56.57`
    3. `d3.scalePoint()`
        - 适用于**离散分类**数据，**输入类别 → 输出数字**，可绘制分类图【将类别转换为位置】
    4. **`d3.scaleOrdinal()`**
        - 应用于分类数据（离散类别），**输入类别 → 输出任意形式**【将类别映射到视觉属性】
        - 示例：`d3.scaleOrdinal().domain(['K-POP', 'C-POP']).range(['blue', 'green']);`
    5. **`d3.scaleTime()`**
        - 应用于日期/时间数据，**输入日期 → 输出数字**（通常为像素值）
    6. **D3-Scale 模块下所属的方法**
        - `.domain` → 数据库中的**真实数据**值范围
        - `.range` → 图表中的可视化/像素范围，基于 `.domain` 的数据
            - **注意**：当指定 y 轴的 range 范围时，应为 `[height, 0]`，因为左上角为起始位点
        - `.**rangeRound**` → 与 `.range()` 相同，但将输出结果四舍五入为整数而非小数
    7. **比例尺的返回值是一个函数**：`const x = d3.scaleLinear().domain().range()`