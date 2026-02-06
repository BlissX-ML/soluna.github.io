---
titleEn: "Line Chart Overhaul - 1"
titleCh: "折线图爆改-1"
tags: ["Echart", "visualization"]
---

<details>
	<summary>示例图</summary>
	<div style="display: flex; gap: 1.5rem; height: 12rem;">
		<image src='/images/webp/notes/echart/echart-2.webp' alt='echart-2' />
		<image src='/images/webp/notes/echart/echart-3.webp' alt='echart-3' />
	</div>
</details>

1. **大屏下点击区域失效**
    1. 大屏情况下有些点击元素看得见，但真实点击区域不在可视范围内（高度被压缩或偏移）。
    2. 元素可能被挤出父容器的可点击区，导致无法触发事件。
    3. **原因：**
        - 父容器高度不足 / `line-height` 不匹配
        - `overflow: hidden` 裁掉部分内容
        - 定位布局导致文本位置视觉正确但实际点击点偏移
        - `z-index` 层级在下层，但又不是 `canvas` 覆盖那种情况
    4. **解决**：
        - 对出现偏移元素使用 `position: relative` 调整位置，让其重新落在可点击区域内
        - 必要时补充 `z-index`，或增大 `padding` 让点击范围真实存在
2. **如何通过两种方式，实现点击选项切换图表数据**
    1. 两种方式都需要拿到被点击选项的 `index`，用它从 `yearData` 中取对应数据
    2. 使用 jQuery：
        - 需要使用 `<script>` 去导入 jquery 的关键 `.js` 文件
        - 通过 `$('selector').index()` 获取索引，再更新图表
        
        ```jsx
        let yearData = [{
            year: '2020',   // 年份
            data: [         // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: '2021',   // 年份
            data: [         // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }];
        
        $('.line h2').on('click', 'a', function () {
            const targetYear = yearData[$(this).index()].data;   // 获得目标年份的数据
            option.series[0].data = targetYear[0];      // 修改 option 内相应的数据
            option.series[1].data = targetYear[1]
            myEcharts.setOption(option);  // 重新确认
        })
        ```
        
    3. 使用原生 JavaScript：
        - 通过 `querySelectorAll` 遍历，点击事件里的回调接收当前项的 `index`，再更新图表
        
        ```jsx
        let yearData = [{
            year: '2020',   // 年份
            data: [         // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: '2021',   // 年份
            data: [         // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }];
        
        document.querySelectorAll('.line h2 a').forEach((el, ind) => {
            el.addEventListener('click', () => {
                const targetYear = yearData[ind].data;   // 获得目标年份的数据
                option.series[0].data = targetYear[0];   // 修改 option 内相应的数据
                option.series[1].data = targetYear[1]
                myEcharts.setOption(option);  // 重新确认
            });
        });
        ```
        

---

```jsx
// 完整示例
function line_chart1() {
    let yearData = [...];

    const myEcharts = echarts.init(document.querySelector('.line1'));

    const option = {
        tooltip: { trigger: 'axis' },
        
        // ⭕ 图例部分，就是告诉 echarts 配置，每一种线段对应是表示什么内容的
        legend: {
            textStyle: { color: '#4c9bfd' },
            top: '1%',
            right: '10%'
        },
        
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,   // ⭕ 显示图表的边框
            borderColor: '#012f4a',
            containLabel: true
        },
        
        xAxis: {
            type: 'category',
            boundaryGap: false,   // 去除内边距
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            ,
            axisLabel: {
                color: '#4c9bfd',  // 修改 x 轴文本颜色的样式
            },
            axisLine: {
                show: false,  // 去除轴线
            },
            axisTick: {
                show: false,   // 去除刻度线
            }

        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a',   // 修改 y 轴的分割线的颜色
                }
            }
        },
        color: ['#00f2f1', '#ed3f35'],   // 设置不同的线段的显示的颜色
        series: [
            {
                name: '新增粉丝',
                type: 'line',
                // stack: 'Total',  // 控制数据堆叠的
                smooth: true,     // ⭕ 让线段的显示更加圆滑
                data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            },
            {
                name: '新增游客',
                type: 'line',
                smooth: true,     // ⭕ 让线段的显示更加圆滑
                data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
            }
        ]
    };

    myEcharts.setOption(option);

    window.addEventListener('resize', function () {
        myEcharts.resize()
    })
    
    $('.line h2').on('click', 'a', function () {
        const targetYear = yearData[$(this).index()].data;
        option.series[0].data = targetYear[0]
        option.series[1].data = targetYear[1]
        myEcharts.setOption(option);  // 重新确认
    })

}

line_chart1()
```