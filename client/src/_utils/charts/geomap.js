import * as d3 from 'd3';
import * as turf from '@turf/turf';
import { colors, hasVisitedColors } from '../../_data/footprint/colors';
import { VISITED_CITIES } from '../../_data/footprint/visit-cities';

const hasVisited = new Map();
const geoCache = new Map();

VISITED_CITIES.forEach(el => {
    if (!hasVisited.has('provinces')) hasVisited.set('provinces', []);
    hasVisited.get('provinces').push(el?.title);

    const nestedCities = el?.detail;
    for (const cities of nestedCities) {
        if (!hasVisited.has('cities')) hasVisited.set('cities', []);
        hasVisited.get('cities').push(cities?.title);
    }
});

// 定义一个等待时间，如果规定时间内没有拿到数据就直接中止
async function fetchWithTimeout(url, wait = 5000) {
    if (geoCache.has(url)) return geoCache.get(url); // 内存缓存优先

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), wait);

    try {
        const res = await fetch(url, {
            signal: controller.signal,
            cache: 'default'
        });

        const data = await res.json();
        geoCache.set(url, data);
        return data;
    } finally {
        clearTimeout(timer);
    }
}

async function fetchGeoData(urls) {
    for (const url of urls) {
        try {
            return await fetchWithTimeout(url);
        } catch (error) {
            console.warn(`${url} 这个数据集又不好使了。。。`);
        }
    }
    throw new Error('地图数据集，又又又出问题了。。。');
}

export const getPathGenarator = (width, height, data) => {
    const projection = d3.geoMercator().fitExtent(
        [
            [0, 0],
            [width, height]
        ],
        data
    );

    const pathGenerator = d3.geoPath().projection(projection);
    return pathGenerator;
};

export async function getChinaData() {
    const urls = [
        'https://file.geojson.cn/china/1.6.3/china.json',
        'http://file.geojson.cn/china/1.6.3/china.json'
    ];

    const data = await fetchGeoData(urls);

    data?.features.forEach((feature, ind) => {
        feature.geometry = turf.rewind(feature.geometry, {
            reverse: true
        });
        feature.colors = colors[ind]; // 直接把颜色添加进去
        feature.category = 'provinces';
    });

    return data;
}

export async function getProvinceData(id) {
    const urls = [
        `https://file.geojson.cn/china/1.6.3/${id}.json`,
        `http://file.geojson.cn/china/1.6.3/${id}.json`
    ];

    const data = await fetchGeoData(urls);

    data?.features.forEach((feature, ind) => {
        feature.geometry = turf.rewind(feature.geometry, {
            reverse: true
        });
        feature.colors = d3.schemeCategory10[ind];
        feature.category = 'cities';
    });

    return data;
}

export function createMapPaths(svg, data, pathGenerator) {
    return svg
        .selectAll('path')
        .data(data.features) // 取数组
        .join('path')
        .attr('d', d => pathGenerator(d))
        .attr('fill', (d, i) => {
            const visited = hasVisited.get(d?.category);

            if (
                Array.isArray(visited) &&
                visited.length > 0 &&
                visited.includes(d?.properties?.name)
            ) {
                return hasVisitedColors[(i * 2) % hasVisitedColors.length];
            } else {
                return 'transparent';
            }
        })
        .attr('stroke', '#000000')
        .attr('stroke-width', 0.5) // 控制省份之间的分隔线段
        .attr('cursor', 'pointer');
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
