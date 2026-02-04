---
titleEn: "D3.js Data Visualization: A Practical Introduction"
titleCh: "D3.js 数据可视化实战入门"
tags: ["d3.js", "visualization"]
---


1. **D3.js 的概念**
    1. 核心思路：用数据驱动 DOM/SVG 的更新（Data-Driven Documents）
    2. 可用于操作 HTML 与 SVG，用于渲染可视化内容（如条形图、折线图等）
2. **两种方式导入 D3.js（CDN）**
    1. **ESM 模块导入**
        - `import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";`
        - HTML **必须**使用 `<script type="module" src="./app.js"></script>`
    2. **传统脚本导入**
        - `<script defer src="<https://cdn.jsdelivr.net/npm/d3@7>"></script>`
        - `defer` 用于确保 DOM 解析完成后再执行脚本，避免过早选择不到元素
3. **选择元素**：**`d3.select().selectAll()`**
    1. `d3.select()` → 选择容器或父级元素，如 `#d3js`
    2. `.selectAll()` → 选择父级元素内部的一组子元素，如 `.bar`
    3. 选择器可写标签名 `'div'`，`'#id'`，`'.class'`
4. **样式与属性设置**：**`.style()` 与 `.attr()`**
    1. `.style(name, value)` → 设置 CSS 样式，常用于 HTML 元素，例如 `background-color`
    2. `.attr(name, value)` → 设置元素属性，常用于 SVG 元素，例如 `x/y/width/height/fill`
    3. **⭕ SVG 填充色**通常使用 `.attr('fill', ...)` 而不是 `background-color`
5. **定义类名**：**`.classed(name, boolean)`**
    1. `.classed('bar', true)` → 为当前元素添加 `bar` 类名
    2. 第二个参数为布尔值：`true` 添加，`false` 移除
6. **数据绑定与补齐元素**
    1. **数据绑定**
        - `.data(array)`：将数据**数组**绑定到选择集
    2. **元素补齐**
        - `.enter().append(tag)` → `enter()` 捕捉缺失的节点，`append()` 插入指定的 HTML/SVG 标签
        - `.join(tag)` → 全自动同步补齐，可以替换 `.enter().append(tag)`
7. **删除冗余元素**：**`.exit()`**
    1. `.exit()` → 表示元素多于数据的部分（旧元素对应不上新数据）
    2. 常见用法：**`.exit().remove()`** 用于移除多余元素（更新图表时常用）
8. **动态设置样式/属性**：**回调函数写法**
    1. `value` 可传函数 → `(d, i) => ...`
    2. 如：`.attr('fill', (d, i) => colors[i % colors.length])`
9. **图表容器**：**推荐使用 `<svg>`**
    1. 条形图等图形元素适合放在 `<svg>` 中渲染
    2. 条形图柱子常用 `<rect>` 表示矩形
    3. 未设置 `x/y` 时，多个 SVG 图形元素**默认叠在左上角 `(0,0)`**
10. **d3-scale 是否需要额外导入**
    1. 使用 `import * as d3 from "..."` 时，`scaleLinear`、`scaleBand` 等已包含，可直接调用
11. **`scaleBand`（分类/序数刻度）**
    1. 用于将**连续范围划分为均匀的带状**区间，常用于条形图 X 轴分类
    2. 常用链式设置
        - `.domain(data.map(d => d.region))` → 分类列表
        - `.rangeRound([0, width])` → 范围（像素取整）
        - `.padding(0.1)` → band 之间的间距
    3. **`xScale.bandwidth()`** → 单个 band 的宽度
12. **`scaleLinear`（线性刻度）**
    1. 用于连续数值映射，常用于**条形图 Y 轴数值**
    2. 常用链式设置
        - `.domain([0, d3.max(data, d => d.value)])` → 数据范围
        - `.range([height, 0])` → Y 轴范围通常**反向设置**（SVG 原点在左上角）
13. **刻度的实际使用方式（条形图）**
    1. X 轴（分类）
        - `x = xScale(d.region)`
        - `width = xScale.bandwidth()`
    2. Y 轴（数值）
        - `y = yScale(d.value)`：得到 y 坐标
        - `height = chartHeight - yScale(d.value)`：柱子高度由底部到 y 坐标计算

```jsx
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";   // 通过 ESM 导入 d3 全量模块（内含 scale 等子模块）

const width = 500;         // 图表宽度（svg 画布宽度）
const height = 550;        // 图表高度（svg 画布高度）

const DUMMY_DATA = [
    { id: 'd1', value: 5000, region: 'Beijing' },
    { id: 'd3', value: 2500, region: 'Suzhou' },
    { id: 'd2', value: 3400, region: 'Shanghai' },
    { id: 'd4', value: 1500, region: 'Zhenjiang' },
];

const colors = ['#DDA0DD', '#ADD8E6', '#BC8F8F', '#C9DD22'];

const xScale = d3
    .scaleBand()                                 // 创建 band 刻度：把分类映射到一段连续像素区间
    .domain(DUMMY_DATA.map(d => d.region))       // 设置 domain：分类列表（每个 region 一根柱）
    .rangeRound([0, width])                      // 设置 range：x 方向像素范围（并做取整）
    .padding(0.1);                               // 设置柱间距（0~1，越大间距越大）

const yScale = d3
    .scaleLinear()           // 创建线性刻度：把数值映射到像素位置
    .domain([0, height])     // 设置 domain：数据范围
    .range([height, 0]);     // 设置 range：y 方向像素范围（倒序是因为 SVG 原点在左上）

const svg = d3
    .select('#d3js')              // 选择容器（注意：这里必须是 <svg id="d3js"> 才能画 rect）
    .attr('width', width)         // 设置 svg 的宽度属性
    .attr('height', height);      // 设置 svg 的高度属性

const bars = svg
    .selectAll('.bar')                                   // 选择现有柱子（首次为空）
    .data(DUMMY_DATA)                                    // 绑定数据到选择集
    .enter()                                             // 获取缺失元素的 enter 选择集
    .append('rect')                                      // 为每条数据创建一个 <rect>
    .classed('bar', true)                                // 添加 class="bar" 便于样式或后续选择
    .attr('x', d => xScale(d.region))                    // 设置每根柱子的左边界 x 坐标
    .attr('y', d => yScale(d.value / 10))                // 设置每根柱子的上边界 y 坐标，若 height 为 500，yScale(450) = 50 -> 左上为 [0, 0]
    .attr('width', xScale.bandwidth())                   // 每根柱子本身有多宽，从 x 往右延伸多少
    .attr('height', d => height - yScale(d.value / 10))  // 每根柱子本身有多高，从 y 往下延伸多少。柱高 = 500 - 50 = 450

    .attr('fill', (_, i) => colors[i % colors.length]);  // 设置填充色：按索引循环取色

setTimeout(() => {
    bars.data(DUMMY_DATA.slice(0, 2)).exit().remove();   // 重新绑定更短数据并移除 exit（多余）柱子
}, 2000);
```