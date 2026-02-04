import { useState, useCallback, useEffect } from 'react';

export function useNavCubicBezier(containerRef, elContainerRef, btnInd, data) {
    const [lines, setLines] = useState([]);

    const recomputeLines = useCallback(() => {
        const container = containerRef?.current;
        const elContainer = elContainerRef?.current;

        if (!container || !elContainer) return;

        // 统一坐标系：以 menu 左上角为 (0,0)
        const c = container.getBoundingClientRect(); // 容器
        const b = elContainer.getBoundingClientRect(); // 按钮

        // 控制弧度强度
        const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

        // 去除外容器边框
        const realPos = (x, y, c) => ({ x: x - c.left, y: y - c.top });

        // 获取偏移量
        const getOffset = dx => clamp(Math.abs(dx) * 0.5, 50, 220);

        // 画 cubic bezier 线段
        const getCubicBezier = (startPos, endPos, offset) => {
            return `${startPos.x + offset} ${startPos.y}, ${endPos.x - offset} ${endPos.y}, ${endPos.x} ${endPos.y}`;
        };

        let d;

        const { left, right, top, bottom, width, height } = b;

        const getTopPos = r => {
            return realPos(left + (width / 4) * r, top - height / 5, c);
        };
        const topPos1 = getTopPos(1.3);
        const topPos2 = getTopPos(2.7);
        const leftPos = realPos(left - width / 4, bottom, c);
        const rightPos = realPos(right + width / 4, bottom, c);

        const leftTopPos = realPos(left, top, c);
        const leftTopUpPos = realPos(left, top - height / 5, c);
        const leftBottomPos = realPos(left, bottom, c);

        const rightTopUpPos = realPos(right, top - height / 5, c);
        const rightBottomPos = realPos(right, bottom, c);

        if (btnInd === 0) {
            const dx = rightPos.x - topPos2.x;
            const offset = getOffset(dx);

            d = `
                M ${leftTopPos.x} ${leftTopPos.y}
                L ${leftTopUpPos.x} ${leftTopUpPos.y}
                L ${topPos2.x} ${topPos2.y}
                C ${getCubicBezier(topPos2, rightPos, offset)}
                L ${leftBottomPos.x} ${leftBottomPos.y} Z
            `;
        } else if (btnInd === data.length - 1) {
            const dx = leftPos.x - topPos1.x;
            const offset = getOffset(dx);

            d = `
                M ${leftPos.x} ${leftPos.y}
                C ${getCubicBezier(leftPos, topPos1, offset)}
                L ${rightTopUpPos.x} ${rightTopUpPos.y}
                L ${rightBottomPos.x} ${rightBottomPos.y} Z
            `;
        } else {
            // 用三次贝塞尔自动生成级联弧线
            const dx1 = leftPos.x - topPos1.x;
            const offset1 = getOffset(dx1); // 距离越远弯得越自然

            const dx2 = rightPos.x - topPos2.x;
            const offset2 = getOffset(dx2);

            // A - B - C - D 的 path
            d = `
                M ${leftPos.x} ${leftPos.y} 
                C ${getCubicBezier(leftPos, topPos1, offset1)} 
                L ${topPos2.x} ${topPos2.y} 
                C ${getCubicBezier(topPos2, rightPos, offset2)} 
                L ${leftPos.x} ${leftPos.y} Z
            `;
        }

        setLines([d]);
    }, [btnInd, data.length, containerRef, elContainerRef]);

    useEffect(() => {
        if (containerRef.current && elContainerRef.current) {
            recomputeLines();
        }
    }, [recomputeLines, containerRef, elContainerRef]);

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

/*
1. 起点 A                      → `M ${leftPos.x} ${leftPos.y}`;
2. A 附近的拐点，B附近的拐点，B  → getCubicBezier(leftPos, topPos1, offset1);
3. B 到 C                      →  `L ${topPos2.x} ${topPos2.y}`;
4. C 附近拐点，D附近的拐点，D    → getCubicBezier(topPos2, rightPos, offset2);
5. 闭合                        →  `L ${leftPos.x} ${leftPos.y} Z`;
*/
