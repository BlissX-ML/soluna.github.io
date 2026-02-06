---
titleEn: "Pie Chart - Nightingale Rose Chart"
titleCh: "饼状图 - 南丁格尔玫瑰图"
tags: ["Echart", "visualization"]
---

1. `series-pie. roseType` 的两种类型
    1. 用于控制是否展示成南丁格尔图，通过半径区分数据大小。
    2. 可选择两种模式：
        - `'radius'` 扇区圆心角展现数据的百分比，半径展现数据的大小（如左图）
        - `'area'` 所有扇区**圆心角相同**，仅通过半径展现数据大小（如右图）
    
    <details>
        <summary>示例图</summary>
        <div style="display: flex; gap: 1.5rem; height: 12rem;">
            <image src='/images/webp/notes/echart/echart-6.webp' alt='echart-6' />
        </div>
    </details>
    
2. 在 series.pie.itemStyle 修改饼形图中各个扇区的样式
    1. 如希望修改扇形图的边框弧度，可以通过 `itemStyle.borderRadius: number` 修改