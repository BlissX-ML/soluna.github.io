import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

export default function PieChart({ className, datas }) {
    const chartContainerRef = useRef(null);

    useEffect(() => {
        const container = chartContainerRef.current; // 放图表的容器

        // 辅助函数：计算扇形中间角度
        function midAngle(d) {
            return (d.startAngle + d.endAngle) / 2;
        }

        if (!container) return;
        const { width, height } = container.getBoundingClientRect();
        const radius = Math.min(width, height) / 2.3;

        const svg = d3
            .select(container)
            .selectAll('svg')
            .data([null])
            .join('svg')
            .attr('width', width)
            .attr('height', height);

        const pie = d3.pie().value(d => d.number);
        const data = pie(datas);

        const arc = d3.arc().innerRadius(0).outerRadius(radius);
        const outerArc = d3
            .arc()
            .innerRadius(radius * 1.2)
            .outerRadius(radius * 1.2);

        const g = svg
            .selectAll('g')
            .data([null])
            .join('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`);

        g.selectAll('path')
            .data(data)
            .join('path')
            .attr('d', arc)
            .attr('fill', (d, i) => d3.schemePastel1[i % 8]);

        g.selectAll('polyline')
            .data(data)
            .join('polyline')
            .attr('points', d => {
                // [x, y] = arc.centroid 得到的是 x, y 坐标
                const mid = arc.centroid(d);
                mid[0] *= 1.5; // 缩短引导线的位置
                mid[1] *= 1.5;
                const pos_breakpoint = outerArc.centroid(d);
                const pos_text = outerArc.centroid(d);

                // Math.PI = 180°
                // midAngle < 180 则在右半圆：`radius * 1.3 * 1` = 正数 x 坐标
                // 上(0°) - 右(90°) - 下(180°) - 左(270°)
                pos_text[0] = radius * 1.3 * (midAngle(d) < Math.PI ? 1 : -1);

                return [mid, pos_breakpoint, pos_text];
            })
            .attr('stroke', '#999')
            .attr('stroke-width', 1)
            .attr('fill', 'none');

        g.selectAll('text')
            .data(data)
            .join('text')
            .attr('transform', d => {
                const pos = outerArc.centroid(d);
                pos[0] = radius * 1.4 * (midAngle(d) < Math.PI ? 1 : -1);
                return `translate(${pos})`;
            })
            .attr('text-anchor', d => (midAngle(d) < Math.PI ? 'start' : 'end'))
            .each(function (d) {
                const textElement = d3.select(this);

                // 清空之前的内容
                textElement.selectAll('*').remove();

                // 第一行：标题
                textElement
                    .append('tspan')
                    .attr('x', 0)
                    .attr('dy', 0)
                    .attr('fill', '#333')
                    .style('font-size', '14px')
                    .text(d.data.title);

                // 第二行：百分比
                textElement
                    .append('tspan')
                    .attr('x', 0)
                    .attr('dy', '1.4em') // 向下偏移
                    .attr('fill', '#999')
                    .style('font-size', '12px')
                    .text(`${d.data.number}张证书`);
            });
    }, []);

    return <div className={className} ref={chartContainerRef}></div>;
}
