import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import { PLAN_COLORS } from '../../_data/dashboard/personal-plan/future-plan';

export default function DoubleBarEchart({ data, className }) {
    const containerRef = useRef(null);

    useEffect(() => {}, []);

    const option = {
        tooltip: {
            show: false
        },
        grid: {
            top: '2%',
            left: '10%',
            right: '0%',
            bottom: '2%',
            containLabel: false
        },
        xAxis: {
            show: false
        },
        yAxis: [
            {
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: {
                    color: '#000000'
                },
                inverse: true,
                type: 'category',
                data: data.map((_, i) => `任务${i + 1}`)
            },
            {
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: { color: '#000000' },
                inverse: true,
                type: 'category',
                data: data.map(d => (d.completionTime ? '已完成' : '未完成'))
            }
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                yAxisIndex: 0, // ⭕ 指定数据系列对应的 y 轴索引
                barCategoryGap: 5,
                barWidth: 15,
                itemStyle: {
                    color: function (params) {
                        return PLAN_COLORS[params.dataIndex].fill;
                    },
                    borderRadius: 20
                },
                label: {
                    show: true,
                    formatter: '{c}%',
                    position: 'inside',
                    offset: [0, 2.5]
                },
                // 支持回调函数，控制布局
                labelLayout: params => {
                    // 小柱子不够放字：放到右侧
                    if (params.rect && params.rect.width < 18) {
                        return {
                            x: params.rect.x + params.rect.width + 10,
                            y: params.rect.y + params.rect.height * 0.5 - 4.8
                        };
                    }
                    return {
                        align: 'center',
                        verticalAlign: 'middle',
                        y: params.rect.y + params.rect.height * 0.5 + 1 // 居中
                    };
                },
                data: data.map(d => (d.completionTime ? 1 * 100 : 0 * 100))
            },
            {
                name: '完成情况',
                type: 'bar',
                yAxisIndex: 1, // ⭕ 指定数据系列对应的 y 轴索引
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle: {
                    color: 'transparent',
                    borderColor: '#7c2804', // 不支持回调函数
                    borderWidth: 1,
                    borderRadius: 20
                },
                data: data.map(el => 100)
            }
        ]
    };

    useEffect(() => {
        const container = containerRef.current;
        const myEcharts = echarts.init(container);

        myEcharts.setOption(option);

        // 4. 让图表跟随屏幕实现响应式（添加防抖 + 转换 rem 为 px 单位）
        function remToPx(rem) {
            return (
                rem *
                parseFloat(getComputedStyle(document.documentElement).fontSize)
            );
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
    }, []);

    return <div className={className} ref={containerRef}></div>;
}
