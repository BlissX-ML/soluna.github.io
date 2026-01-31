import { useState, useCallback, useEffect } from 'react';

/*
container → 包裹元素的容器 (ref.current)
elContainer → 元素自身的容器 (ref.current)
element → 选中的要画线的项目
*/
export function useLineCubicBezier(containerRef, firstRef, secondRef, element) {
    const [lines, setLines] = useState([]);

    // 控制弧度强度
    const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

    const recomputeLines = useCallback(() => {
        if (!element) {
            setLines([]); // 关闭时清空线
            return;
        }

        const container = containerRef?.current;
        const firstEl = firstRef?.current;
        const secondEl = secondRef?.current[`second-${element}`] || [];

        if (
            !container ||
            !firstEl ||
            !Array.isArray(secondEl) ||
            secondEl.length === 0
        ) {
            setLines([]); // 缺少节点时不画
            return;
        }

        // 统一坐标系：以 menu 左上角为 (0,0)
        const c = container.getBoundingClientRect();

        const r1 = firstEl.getBoundingClientRect();
        const x1 = r1.right - c.left;
        const y1 = r1.top + r1.height / 2 - c.top;

        const newLines = secondEl.map(secondEl => {
            const r2 = secondEl.getBoundingClientRect();
            const x2 = r2.left - c.left;
            const y2 = r2.top + r2.height / 2 - c.top;

            // 用三次贝塞尔自动生成级联弧线
            const dx = x2 - x1;
            const offset = clamp(dx * 0.5, 60, 220); // 距离越远弯得越自然

            // C = Cubic Bézier（画三次贝塞尔曲线，即平滑弧线）
            const d = `M ${x1} ${y1} C ${x1 + offset} ${y1}, ${x2 - offset} ${y2}, ${x2} ${y2}`;

            return { d };
        });

        setLines(newLines);
    }, [element, containerRef, firstRef, secondRef]);

    useEffect(() => {
        recomputeLines();
    }, [recomputeLines]);

    useEffect(() => {
        // 窗口尺寸变化时重算
        const onResize = () => recomputeLines();
        window.addEventListener('resize', onResize);

        // menu 自身尺寸/布局变化时重算（展开收起、字体变化等）
        let rec;

        const container = containerRef?.current;

        // 确保 menu DOM 存在并且浏览器支持 ResizeObserver
        if (container && 'ResizeObserver' in window) {
            rec = new ResizeObserver(() => recomputeLines());
            rec.observe(container); // ResizeObserver 的监听
        }

        return () => {
            window.removeEventListener('resize', onResize);
            if (rec) rec.disconnect(); // ResizeObserver 的停止监听
        };
    }, [containerRef, recomputeLines]);

    return { lines };
}
