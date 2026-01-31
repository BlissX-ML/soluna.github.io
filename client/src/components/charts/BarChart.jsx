// certificate 页面的 横向柱状图
import * as d3 from 'd3';
import { useEffect, useRef } from 'react';
// import { CERTIFICATE_CHART } from '../../_data/dashboard/certificates/certificate-chart';

export default function BarChart({ className, resources }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        d3.select(container).selectAll('*').remove();

        let globalColorIndex = 0;
        let globalDelay = 0; // ← 全局延迟计数器

        const { width, height } = container.getBoundingClientRect();
        const margin = { left: 150, right: 20, top: 10, bottom: 80 };

        if (!container) return;

        const svg = d3
            .select(container)
            .selectAll('svg')
            .data([null])
            .join('svg')
            .attr('width', width)
            .attr('height', height);

        // X轴比例尺：用于水平方向（柱子的长度）
        const xScale = d3
            .scaleLinear()
            .domain([0, d3.max(resources, d => d?.number)])
            .range([margin.left, width - margin.right]);

        // Y轴比例尺：用于垂直方向（每个证书的位置）
        const yScale = d3
            .scaleBand()
            .domain(resources.map(d => d.title))
            .range([margin.top, height - margin.bottom])
            .padding(0.3);

        svg.selectAll('.bar')
            .data(resources)
            .join('rect')
            .classed('bar', true)
            .attr('x', margin.left) // x: 矩形左上角的x坐标
            .attr('y', d => yScale(d.title)) // y: 矩形左上角的y坐标
            .attr('width', d => xScale(d.number) - margin.left) // width: 矩形的宽度（柱子的长度）
            .attr('height', yScale.bandwidth()) // height: 柱子的粗细，scaleBand自动计算的每个带状区域的高度
            .attr('fill', 'none')
            .attr('opacity', 0.3)
            .transition() // ← 开始动画
            .duration(4000) // ← 2秒动画
            .delay((d, i) => i * 500); // ← 第二个柱子延迟0.5秒

        // 绘制嵌套的详细数据（分段）
        resources.forEach(category => {
            let startX = margin.left; // 每个分段的起始位置

            category.details.forEach(detail => {
                svg.append('rect')
                    .attr('x', startX) // 从上一段结束的地方开始
                    .attr('y', yScale(category.title))
                    .attr('width', 0) // 初始宽度，这样才有动画效果
                    .attr('height', yScale.bandwidth())
                    .attr('fill', d3.schemePastel2[globalColorIndex++]) // 不同颜色
                    .attr('stroke', 'white') // 白色边框分隔
                    .attr('stroke-width', 2)
                    .transition()
                    .duration(800) // 每个分段动画0.8秒
                    .delay(globalDelay) // ← 使用全局延迟
                    .attr('width', xScale(detail.number) - margin.left); // 当前段的宽度

                globalDelay += 400;
                // 更新下一段的起始位置
                startX += xScale(detail.number) - margin.left;
            });
        });

        const xAxis = svg
            .selectAll('.xAxis')
            .data([null])
            .join('g')
            .classed('xAxis', true)
            .attr('transform', `translate(0, ${height - margin?.bottom})`)
            .call(d3.axisTop(xScale));

        xAxis
            .selectAll('text')
            .attr('y', 20)
            .attr('dx', '0.35em')
            .style('text-anchor', 'center');

        const yAxis = svg
            .selectAll('.yAxis')
            .data([null])
            .join('g')
            .classed('yAxis', true)
            .attr('transform', `translate(${margin.left}, 0)`)
            .call(d3.axisRight(yScale));

        yAxis
            .selectAll('text')
            .attr('x', -10) // 向左移动10像素，远离刻度线
            .attr('dy', '0.35em') // 垂直居中对齐
            .style('text-anchor', 'end'); // 文字右对齐
    }, []);

    return <div className={className} ref={containerRef}></div>;
}
