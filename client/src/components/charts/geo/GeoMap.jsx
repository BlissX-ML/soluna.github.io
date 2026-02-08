import * as d3 from 'd3';
import { useRef, useEffect } from 'react';

import { hasVisitedColors } from '../../../_data/footprint/colors';
import {
    bindMapEvents,
    createMapPaths,
    getChinaData,
    getPathGenarator,
    getProvinceData
} from '../../../_utils/charts/geomap';

export default function GeoChinaMap({ className, tipClassName }) {
    const containerRef = useRef(null); // React中不能用 querySelector 获取元素
    let size = { width: null, height: null };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const { width, height } = container.getBoundingClientRect();
        size.width = width;
        size.height = height;

        // 提示框
        const tip = d3
            .select(container)
            .append('div')
            .attr('class', tipClassName);

        // path 的容器
        const svg = d3
            .select(container)
            .selectAll('svg')
            .data([null])
            .join('svg')
            .attr('width', width)
            .attr('height', height);

        const paintMap = async () => {
            const chinaData = await getChinaData();

            const pathGenerator = getPathGenarator(width, height, chinaData);

            const paths = createMapPaths(svg, chinaData, pathGenerator);

            paths.call(
                bindMapEvents()
                    .onMouseEnter(function (e, d) {
                        d3.select(this)
                            .attr('fill', function () {
                                const curColor = d3.select(this).attr('fill');

                                if (
                                    !curColor ||
                                    hasVisitedColors.includes(curColor)
                                ) {
                                    return curColor;
                                } else {
                                    return d.colors.fill;
                                }
                            })
                            .attr('stroke-width', 1.5)
                            .style('fill-opacity', 0.4);

                        tip.style('display', 'block');
                    })
                    .onMouseLeave(function (e, d) {
                        if (d3.select(this).classed('selected')) return;
                        d3.select(this)
                            .attr('fill', function () {
                                const curColor = d3.select(this).attr('fill');
                                if (
                                    !curColor ||
                                    hasVisitedColors.includes(curColor)
                                ) {
                                    return curColor;
                                } else {
                                    return 'transparent';
                                }
                            })
                            .attr('stroke-width', 0.5);
                        tip.style('display', 'none');
                    })
                    .onMouseMove(function (e, d) {
                        tip.text(d.properties.name)
                            .style('left', `${e.pageX + 20}px`)
                            .style('top', `${e.pageY}px`);
                    })
                    .onClick(function (e, d) {
                        const el = d3.select(this);
                        el.classed('selected', true) // 添加或删除 class 类名，true为添加
                            .attr('fill', d.colors.fill)
                            .attr('stroke', d.colors.stroke)
                            .attr('stroke-width', 1.5);
                    })
                    .onDblClick(async function (e, d) {
                        const provinceData = await getProvinceData(
                            d.properties.code
                        );

                        // 计算省份的边界框
                        const bounds = d3.geoBounds(provinceData);
                        const [[x0, y0], [x1, y1]] = bounds;

                        const provPathGenerator = getPathGenarator(
                            width,
                            height,
                            provinceData
                        );

                        // 清除原有的 path 元素
                        svg.selectAll('path').remove();

                        const citiesPaths = createMapPaths(
                            svg,
                            provinceData,
                            provPathGenerator
                        );

                        citiesPaths.on('mouseenter', () => {});

                        tip.style('display', 'none');

                        svg.on('click', function (e, d) {
                            if (e.target.tagName === 'path') return;
                            svg.selectAll('path').remove(); // 删除当前省份
                            paintMap(); // 重新生成国家地图
                        });
                    })
            );
        };

        paintMap();
    }, []);

    return (
        <main
            id="china-geo-map"
            className={className}
            ref={containerRef}
        ></main>
    );
}
