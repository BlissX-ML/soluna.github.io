---
titleEn: "ECharts Basic Steps"
titleCh: "ECharts 基础步骤"
tags: ["Echart", "visualization"]
---


1. 引入 ECharts 文件
    - 图表依赖 echarts.js
    - 可通过下载源码或 npm 获得 `echarts.js` / `echarts.min.js`
    - `echarts.min.js` 为压缩版，功能一致但体积更小
    - 使用方式：`<script src="echarts.js"></script>`
2. 准备 DOM 容器
    - 必须有固定宽高，否则无法正常渲染。
    - **初始化**：`echarts.init(DOM容器)`
3. 创建 ECharts 实例
    - 获取 DOM → 创建图表对象。
    - `let myChart = echarts.init(document.getElementById('container'));`
4. 编写 option 配置
    - 根据需求设置图表数据和样式。
5. 应用配置项
    - 将 option 传给实例，让图表生效。
    - `myChart.setOption(option);`

```html
<div id="container" style="width: 500px; height: 500px;"></div>

<script>
    // 1. 初始化 + 创建 Echarts 实例
    // echarts 是 window 对象，无需自己定义
    let myEcharts = echarts.init(document.getElementById('container'));

    // 2. 指定配置项和数据
    let option = { ... };

    // 3. 将配置项设置给 Eecharts 实例对象
    myEcharts.setOption(option);
    
    // 4. 让图表跟随屏幕实现响应式（添加防抖 + 转换 rem 为 px 单位）
    function remToPx(rem) {
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }

    function debounce(fn, delay) {
        let timer = null;
        return function () {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                fn();
            }, delay);
        };
    }

    const handleResize = debounce(() => {
        // 应对 font-size 响应式变化的情况
        myEcharts.setOption({
            xAxis: {
                axisLabel: {
                    fontSize: remToPx(0.8)
                }
            }
        });

        myEcharts.resize();
    }, 100);

    window.addEventListener('resize', handleResize);
</script>
```
