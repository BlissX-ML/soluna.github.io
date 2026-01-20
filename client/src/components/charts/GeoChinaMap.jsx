import * as d3 from "d3";
import * as turf from "@turf/turf";
import { useRef, useEffect } from "react";
import classes from "./GeoChinaMap.module.scss";
import { colors } from "../../_data/footprint-page/colors";

export default function GeoChinaMap() {
    const containerRef = useRef(null); // React中不能用 querySelector 获取元素
    let size = { width: null, height: null };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const { width, height } = container.getBoundingClientRect();
        size.width = width;
        size.height = height;

        const svg = d3
            .select(container)
            .selectAll("svg")
            .data([null])
            .join("svg")
            .attr("width", width)
            .attr("height", height);

        const paintMap = async () => {
            const data = await d3.json(
                "https://geojson.cn/api/china/1.6.3/china.json",
            );

            // @ts-ignore - GeoJSON data structure
            data.features.forEach((feature, ind) => {
                feature.geometry = turf.rewind(feature.geometry, {
                    reverse: true,
                });
                feature.colors = colors[ind]; // 直接把颜色添加进去
                feature.visited = false;
            });
            console.log(data);

            const projection = d3
                .geoMercator()
                .center([104, 35]) // 中国的中心经纬度
                .scale(width * 0.9) // 根据容器大小调整缩放
                .translate([width * 0.5, height * 0.57]); // 居中显示

            const pathGenerator = d3.geoPath().projection(projection);

            const paths = svg
                .selectAll("path")
                // @ts-ignore - GeoJSON data structure
                .data(data.features)
                .join("path")
                .attr("d", (d) => pathGenerator(d))
                .attr("class", "province")
                .attr("fill", "transparent") // 关键，避免覆盖地图背景颜色
                .attr("stroke", "#000000")
                .attr("stroke-width", 0.5) // 控制省份之间的分隔线段
                .attr("cursor", "pointer");

            paths.on("mouseenter", function (e, d) {
                const el = d3.select(this);
                el.attr("fill", d.colors.fill)
                    .attr("stroke-width", 1.5)
                    .style("fill-opacity", 0.4);
            });

            paths.on("mouseleave", function (e, d) {
                const el = d3.select(this);
                if (el.classed("selected")) return;
                el.attr("fill", "transparent").attr("stroke-width", 0.5);
            });

            paths.on("click", function (e, d) {
                const el = d3.select(this);
                el.classed("selected", true) // 添加或删除 class 类名，true为添加
                    .attr("fill", d.colors.fill)
                    .attr("stroke", d.colors.stroke)
                    .attr("stroke-width", 1.5);
            });
        };

        paintMap();
    }, []);

    return (
        <main
            id="china-geo-map"
            className={classes.map}
            ref={containerRef}
        ></main>
    );
}
