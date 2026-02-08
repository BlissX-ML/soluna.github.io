import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

export default function PieExpenseChart({ curMonthData, className }) {
    // 主图表容器的引用
    const containerRef = useRef(null);
    // 子类别图表容器的引用
    const subContainerRef = useRef(null);

    // console.log(curMonthData);

    // 设置图表配置项的函数
    const setOption = (month, sum, data) => {
        return {
            title: {
                text: `${month} 月份花销`,
                subtext: `共计 ${sum} 元`,
                left: 'center'
            },

            // 提示框配置
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c}元 ({d}%)', // 显示名称、数值和百分比
                confine: true // 限制在图表容器内，不会超出
            },

            // 系列配置
            series: [
                {
                    name: '花销明细',
                    type: 'pie',
                    padAngle: '1',
                    radius: ['40%', '70%'],
                    center: ['50%', '60%'], // 调整饼图的位置
                    avoidLabelOverlap: false,

                    // 默认状态下不显示标签
                    label: {
                        show: false,
                        position: 'center',
                        formatter: function (params) {
                            return params.percent.toFixed(1) + '%';
                        }
                    },

                    // 控制鼠标悬停/高亮状态下的标签
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 18,
                            fontWeight: 'bold'
                        }
                    },

                    labelLine: {
                        show: true
                    },

                    data: data // 图表数据
                }
            ]
        };
    };

    // 渲染图表
    useEffect(() => {
        // 如果没有数据，不执行
        if (!curMonthData) return;

        const container = containerRef.current;
        const subContainer = subContainerRef.current;

        // 如果容器不存在，不执行
        if (!container || !subContainer) return;

        // 初始化主图表和子图表
        const myChart = echarts.init(container);
        const mySubChart = echarts.init(subContainer);

        // 提取月份数据

        const month = curMonthData.month;
        const monthData = curMonthData.detail;

        // 将月份数据转换为饼图格式
        const pieData = monthData.map(d => ({
            name: d?.title,
            value: +d.total.toFixed(2)
        }));

        // 设置主图表配置
        myChart.setOption(setOption(month, curMonthData.total, pieData));

        // 点击事件 - 显示子类别
        myChart.on('click', params => {
            const category = params.name;
            const categoryData = monthData.find(d => d.title === category);

            // 如果该类别有子类别数据
            if (categoryData && categoryData.subs) {
                const subData = categoryData.subs;

                // 将子类别数据转换为饼图格式
                const subPieData = subData.map(d => ({
                    name: d.title,
                    value: +d.total.toFixed(2)
                }));

                // 在子图表中显示子类别数据
                mySubChart.setOption(
                    setOption(month, categoryData.total, subPieData)
                );
            }
        });

        // 窗口大小改变时重新调整图表大小
        const handleResize = () => {
            myChart.resize();
            mySubChart.resize();
        };

        window.addEventListener('resize', handleResize);

        // 清理函数：移除事件监听器和销毁图表实例
        return () => {
            window.removeEventListener('resize', handleResize);
            myChart.dispose();
            mySubChart.dispose();
        };
    }, [curMonthData]); // 当 expenseData 改变时重新执行

    // 渲染两个图表容器（并排显示）
    return (
        // 用 main 避免影响 tooltip 的提示框样式
        <main className={className}>
            {/* 主图表 */}
            <main className="main" ref={containerRef}></main>

            {/* 子图表 */}
            <main className="sub" ref={subContainerRef}></main>
        </main>
    );
}
