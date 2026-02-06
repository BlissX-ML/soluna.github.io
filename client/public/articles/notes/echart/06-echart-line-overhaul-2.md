---
titleEn: "Line Chart Overhaul - 2"
titleCh: "折线图爆改-2"
tags: ["Echart", "visualization"]
---


<details>
	<summary>示例图</summary>
	<div style="display: flex; gap: 1.5rem; height: 12rem;">
		<image src='/images/webp/notes/echart/echart-4.webp' alt='echart-4' />
		<image src='/images/webp/notes/echart/echart-5.webp' alt='echart-5' />
	</div>
</details>


1. 如何修改折线图下方的填充区域
    1. 在 series 中使用 `areaStyle` 设置填充区样式
    2. 填充颜色既可以是普通颜色，也可以使用渐变色
        - 渐变写法可以用 `new echarts.graphic.LinearGradient()`，也可以直接使用 `{ type: 'linear', colorStops: [...] }` 的简写方式
    
    ```jsx
    // 方案一：修改填充区域的样式
    areaStyle: {
        color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1, [
            //  offset 用于定义渐变的偏移
            { offset: 0, color: 'rgba(255, 161, 79, 0.8)' },
            { offset: 1, color: 'rgba(255, 161, 79, 0.3)' }
        ],
            false
        ),
        shadowColor: 'rgba(0, 0, 0, 0.1)'
    },
    
    // 方案二：修改填充区域的样式
    areaStyle: {
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
                { offset: 0, color: 'rgba(255, 185, 64, 0.9)' },
                { offset: 1, color: 'rgba(255, 185, 64, 0.4)' }
            ],
            global: false,
        },
        shadowColor: 'rgba(0, 0, 0, 0.1)'
    },
    ```
    
2. 在折线图中，每个拐点的形状由 `symbol` 控制，拐点的视觉样式由 `itemStyle` 设置
    1. 和柱状图不同：柱状图的 `itemStyle` 控制柱体外观
    2. 折线图中 `itemStyle` 专门用于设置拐点的颜色、边框等样式

---

```jsx
function line_chart2() {
    const myEcharts = echarts.init(document.querySelector('.line2'));

    const option = {
        grid: {
            top: '30',
            left: 10,
            right: 10,
            bottom: 10,
            containLabel: true,
        },
        
        tooltip: {
            trigger: 'axis',
        },
        
        legend: {
            top: '0%',
            textStyle: {
                color: 'rgba(255, 255, 255, .5)',
                fontSzie: 12,
            },
        },
        
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "28", "29", "30" ],
                textStyle: {
                    color: 'rgba(255, 255, 255, .6)',
                    fontSize: 12,
                },
                axisLine: {
                    lineStyle: { color: 'rgba(255, 255, 255, .2)' }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: { show: false },
                axisLine: {
                    lineStyle: { color: 'rgba(255, 255, 255, .1)' }
                },
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, .6)',
                        fontSize: 12,
                    }
                },
                splitLine: {
                    lineStyle: { color: 'rgba(255, 255, 255, .1)' }
                }
            }
        ],
        
        series: [
            {
                name: 'Email',
                type: 'line',
                smooth: true,
                
                // ⭕ 在 series 中, 可以单独修改当前线段希望展示的样式
                lineStyle: {
                    color: 'salmon',
                },

                // ⭕ 修改填充区域的样式
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            { offset: 0, color: 'rgba(255, 185, 64, 0.9)' },
                            { offset: 1, color: 'rgba(255, 185, 64, 0.4)' }
                        ],
                        global: false,
                    },
                    shadowColor: 'rgba(0, 0, 0, 0.1)'
                },

                // ⭕ 折现图，每一个拐点处的样式设置
                symbol: 'circle',   // 设置拐点处是圆点
                symbolSize: 10,      // 设置拐点的大小
                showSymbol: false,  // 鼠标经过才会显示拐点

                // ⭕ 在折线图中用于设置拐点的样式，但是在柱形图中用于柱条的图形样式
                itemStyle: {
                    color: '#ff8d30ee',
                    borderColor: 'rgba(255, 220, 131, 0.1)',
                    borderWidth: 12,
                },
								
								// ⭕ 控制折线图的高亮状态, 'series' 表示聚焦当前高亮的数据所在的系列的所有图形
                emphasis: { focus: 'series' },
                data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40, 70],
            },
            {
                name: 'Union Ads',
                type: 'line',
                // stack: 'Total',
                smooth: true,

                // 修改填充区域的样式
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            { offset: 0, color: 'rgba(211, 255, 66, 0.9)' },
                            { offset: 1, color: 'rgba(230, 254, 153, 0.4)' }
                        ],
                        global: false,
                    },
                    shadowColor: 'rgba(0, 0, 0, 0.1)'
                },

                // 折现图，每一个拐点处的样式设置
                symbol: 'circle',   // 设置拐点处是圆点
                symbolSize: 10,      // 设置拐点的大小
                showSymbol: false,  // 鼠标经过才会显示拐点

                // 在折线图中用于设置拐点的样式，但是在柱形图中用于柱条的图形样式
                itemStyle: {
                    color: '#9efd1aee',
                    borderColor: 'rgba(255, 220, 131, 0.1)',
                    borderWidth: 12,
                },

                emphasis: {
                    focus: 'series'
                },
                data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20],
            }
        ]
    };

    myEcharts.setOption(option);

    window.addEventListener('resize', function () {
        myEcharts.resize()
    })
}
line_chart2()
```
