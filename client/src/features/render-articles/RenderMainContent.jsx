import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../store/reducer/hooks';

import classes from './RenderMainContent.module.scss';

import RenderArticles from '../../components/render-articles/RenderArticles.jsx';
import { MEMOS_ROUTE } from '../../_data/memo/memo';
import RenderNoneContent from './RenderNoneContent';

// 这里需要的 data 是以 {key: tags, data: [{符合 tags 的数据}]}
export default function RenderMainContent({ startUrl }) {
    const { routeId } = useParams();
    const { sidebarActive, secondContent } = useAppSelector(
        state => state.dropdownSidebar
    );

    const maxRendered = useRef(0); // 记录曾经渲染过的最大值
    const [visibleCount, setVisibleCount] = useState(10);

    const categoriFiles = useMemo(() => {
        if (startUrl === '/memo') {
            return MEMOS_ROUTE.find(d => d.key.toLowerCase() === routeId)?.data;
        } else if (startUrl === '/repository') {
            return secondContent.curSecondContent;
        }
    }, [routeId, secondContent, startUrl]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (
                visibleCount < categoriFiles.length &&
                visibleCount >= maxRendered.current
            ) {
                const newCount = visibleCount + 10;
                setVisibleCount(newCount);
                maxRendered.current = newCount; // 更新最大值
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [visibleCount]);

    return (
        <main
            className={`${classes.container} ${sidebarActive ? '' : classes.close}`}
        >
            {Array.isArray(categoriFiles) && categoriFiles.length > 0 ? (
                categoriFiles
                    .slice(0, visibleCount)
                    .map(file => (
                        <RenderArticles
                            articles={file}
                            key={file.key}
                        ></RenderArticles>
                    ))
            ) : (
                <RenderNoneContent startURL={startUrl} />
            )}
        </main>
    );
}
