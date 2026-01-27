import * as d3 from 'd3';
import * as turf from '@turf/turf';
import { colors } from '../../../_data/footprint/colors';

export const getPathGenarator = (center, scale, position) => {
    const projection = d3
        .geoMercator()
        .center(center) // 中国的中心经纬度
        .scale(scale) // 根据容器大小调整缩放
        .translate(position); // 居中显示

    const pathGenerator = d3.geoPath().projection(projection);
    return pathGenerator;
};

export async function getChinaData() {
    const data = await d3.json('https://geojson.cn/api/china/1.6.3/china.json');

    // @ts-ignore - GeoJSON data structure
    data?.features.forEach((feature, ind) => {
        feature.geometry = turf.rewind(feature.geometry, {
            reverse: true
        });
        feature.colors = colors[ind]; // 直接把颜色添加进去
        feature.visited = false;
    });

    return data;
}

export async function getProvinceData(id) {
    const data = await d3.json(`https://geojson.cn/api/china/1.6.3/${id}.json`);

    // @ts-ignore - GeoJSON data structure
    data?.features.forEach((feature, ind) => {
        feature.geometry = turf.rewind(feature.geometry, {
            reverse: true
        });
    });

    return data;
}

export function createMapPaths(svg, data, pathGenerator) {
    return (
        svg
            .selectAll('path')
            // @ts-ignore - GeoJSON data structure
            .data(data.features)
            .join('path')
            .attr('d', d => pathGenerator(d))
            .attr('fill', 'transparent') // 关键，避免覆盖地图背景颜色
            .attr('stroke', '#000000')
            .attr('stroke-width', 0.5) // 控制省份之间的分隔线段
            .attr('cursor', 'pointer')
        // .attr("mask", "url(#mask)")
    );
}

export function bindMapEvents() {
    let onMouseEnter, onMouseLeave, onMouseMove, onClick, onDblClick;

    const handleEvents = paths => {
        if (onMouseEnter) {
            paths.on('mouseenter', onMouseEnter);
        }

        if (onMouseLeave) {
            paths.on('mouseleave', onMouseLeave);
        }

        if (onMouseMove) {
            paths.on('mousemove', onMouseMove);
        }

        if (onClick) {
            paths.on('click', onClick);
        }

        if (onDblClick) {
            paths.on('dblclick', onDblClick);
        }
    };

    handleEvents.onMouseEnter = function (_) {
        return arguments.length
            ? ((onMouseEnter = _), handleEvents)
            : onMouseEnter;
    };

    handleEvents.onMouseLeave = function (_) {
        return arguments.length
            ? ((onMouseLeave = _), handleEvents)
            : onMouseLeave;
    };

    handleEvents.onMouseMove = function (_) {
        return arguments.length
            ? ((onMouseMove = _), handleEvents)
            : onMouseMove;
    };

    handleEvents.onClick = function (_) {
        return arguments.length ? ((onClick = _), handleEvents) : onClick;
    };

    handleEvents.onDblClick = function (_) {
        return arguments.length ? ((onDblClick = _), handleEvents) : onDblClick;
    };

    return handleEvents;
}
