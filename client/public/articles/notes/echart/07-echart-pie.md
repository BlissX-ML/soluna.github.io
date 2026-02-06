---
titleEn: "Pie Chart"
titleCh: "饼状图"
tags: ["Echart", "visualization"]
---


1. **饼形图大小的修改**
    1. 柱形图、折线图的显示范围通常通过 grid（top、left、containLabel 等）控制，但饼图不使用 grid 控制大小
    2. 饼图大小在 `series.radius` 中设置，可以是 `number`、`string` 或 `array`
        - array 形式时：第一项为内半径，第二项为外半径
    3. 饼图的中心点位置通过 `series.center: []` 设置
2. `series.label` 用于定义图形上的文字说明（饼状区域、柱形、折线拐点等的含义）
    1. 饼图的数据格式是 `{ value: xxx, name: xxx }`，`label` 默认显示的是 `name`
    2. `color: 'inherit'` 可以让文字说明颜色跟随扇形区域颜色
3. `series.labelLine` 用于显示文字与对应饼块之间的**引导线**
    1. `length` 表示第一段线条的长度
    2. `length2` 表示第二段线条的长度
4. `series-pie.avoidLabelOverlap`：控制是否开启标签**防重叠**功能
    - 默认开启
    - 当标签较多且位置拥挤时，会自动调整它们的位置以避免重叠

```jsx
function pie_chart1() {
    const myEcharts = echarts.init(document.querySelector('.pie1'));

    const option = {
        tooltip: {
            trigger: 'item',   // 饼图没有 x, y 轴了，所以通过 item 来触发
        },

        legend: {
            bottom: '1%',
            left: 'center',
            itemGap: 10,     // 图例之间的间距
            itemWidth: 15,   // 图例的宽度
            itemHeight: 15,  // 图例的高度
            textStyle: {
                color: 'rgba(255, 255, 255, .5)',
                fontSize: 12,
                textShadow: 'none',
            },
            data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
        },

        series: [
            {
                type: 'pie',
                radius: ['40%', '60%'],
                center: ['50%', '45%'],
                avoidLabelOverlap: true,
                label: {
                    show: true,
                    position: 'outside',
                    color: '#fff',
                    fontSize: 11,
                    fontWeight: 'bold',
                    formatter: '{b}'    // 显示 name
                },
                labelLine: {
                    show: true
                },
                data: [
                    { value: 1, name: "0岁以下" },
                    { value: 4, name: "20-29岁" },
                    { value: 2, name: "30-39岁" },
                    { value: 2, name: "40-49岁" },
                    { value: 1, name: "50岁以上" }
                ]
            }
        ]
    };

    myEcharts.setOption(option)
}
pie_chart1()
```
