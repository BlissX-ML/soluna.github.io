---
titleEn: "Bar Chart Style Overhaul"
titleCh: "柱状图样式爆改"
tags: ["Echart", "visualization"]
---


<details>
	<summary>示例图</summary>
	<div style="display: flex; gap: 1.5rem; height: 12rem;">
		<image src='/images/webp/notes/echart/echart-0.webp' alt='echart-0' />
		<image src='/images/webp/notes/echart/echart-1.webp' alt='echart-1' />
	</div>
</details>

1. **思路：从两条横向柱体改成「内部进度条 + 外部框架」**
    1. 内部柱子表示实际进度
    2. 外部框架柱表示满值
    3. 通过函数动态为每个柱子设置不同颜色
        - `function(params) {}` 内部，`params` 是一个对象
        - `params.dataIndex` 能获得当前柱子的索引，用索引选择颜色
    
    ```jsx
    function bar_horizon() {
        const myEcharts = echarts.init(document.querySelector('.bar2'));
    		
    	  // 定义不同颜色
        let bar_color = ['LightCoral', 'pink', 'LightGreen', 'violet', 'MediumPurple'];
    
        const option = {
            tooltip: { ... },
            grid: { ... },
            xAxis: { ... },
            yAxis: { ... },
            series: [
                {
                    ...,
                    itemStyle: {
                        color: function (params) {
                            return bar_color[params.dataIndex];   // ⭕ 根据索引取颜色
                        },
                    },
                    ...,
                },
    
                // 外部框架
                { ... }
            ]
        };
    
        myEcharts.setOption(option);
    }
    bar_horizon()
    
    ```
    
2. 如果希望存在两个 Y 轴，则通过 `yAxis` 数组来定义。
    - 第一个 y 轴显示名称（左边）
    - 第二个 y 轴显示数值（右边）
    
    ```jsx
    yAxis: [
        {
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { color: '#fff' },
            type: 'category',
            data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"]
        },
        {
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { color: '#fff' },
            type: 'category',
            data: [702, 350, 610, 793, 664]
        }
    ]
    ```
    
3. **两个柱状条如何重叠显示**
    - 通过 `yAxisIndex` 指定 series 绑定的是哪个 y 轴
    - 内部条（进度）绑定 `yAxisIndex: 0`
    - 外框条绑定 `yAxisIndex: 1`
4. 如何实现反转（从上到下 → 从下到上）
    - 在 `xAxis` / `yAxis` 上使用 `inverse: true`

---

```jsx
// 完整示例
function bar_horizon() {
    const myEcharts = echarts.init(document.querySelector('.bar2'));

    let bar_color = ['LightCoral', 'pink', 'LightGreen', 'violet', 'MediumPurple'];

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' }
        },
        grid: {
            top: '10%',
            left: '22%',
            right: '0%',
            bottom: '10%',
            containLabel: false
        },
        xAxis: {
            show: false,
        },
        yAxis: [
            {
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: { color: '#fff' },
                inverse: true,       // ⭕ 实现数据的反转
                type: 'category',
                data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"]
            },
            {
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: { color: '#fff' },
                inverse: true,       // ⭕ 实现数据的反转
                type: 'category',
                data: [702, 350, 610, 793, 664]
            }
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                yAxisIndex: 0,   // ⭕ 指定数据系列对应的 y 轴索引
                barCategoryGap: 10,
                barWidth: 10,
                itemStyle: {
                    color: function (params) {
                        return bar_color[params.dataIndex];
                    },
                    borderRadius: 20
                },
                label: {
                    show: true,
                    formatter: "{c}%",
                    position: 'inside',
                },
                data: [70, 34, 60, 78, 69]
            },
            {
                name: '框',
                type: 'bar',
                yAxisIndex: 1,  // ⭕ 指定数据系列对应的 y 轴索引
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle: {
                    color: 'none',
                    borderColor: '#00c1de',
                    borderWidth: 3,
                    borderRadius: 15,
                },
                data: [100, 100, 100, 100, 100]
            }
        ]
    };

    myEcharts.setOption(option);
}
bar_horizon()
```
