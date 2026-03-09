import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { useAppSelector } from '../../store/reducer/hooks';

import classes from './RenderMainContent.module.scss';

import RenderArticles from '../../components/markdown/RenderArticles.jsx';
import Loading from '../../components/feedback/Loading';
import RenderInitialContent from './RenderInitialContent';

import { useMdDataApi } from '../../api/useMdDataApi.js';

export default function RenderMainContent() {
    const [visibleCount, setVisibleCount] = useState(10);

    const { routeId } = useParams();
    const [searchParams] = useSearchParams();
    const { sidebarActive } = useAppSelector(state => state.dropdownSidebar);

    const hash = searchParams.get('hash') || '';
    const { data: fileData, isLoad } = useMdDataApi(
        routeId,
        hash.toLowerCase()
    );

    // 简化 useMemo
    const fileTitleContent = useMemo(
        () =>
            fileData?.map(({ dataInfo, content }) => ({
                titleCh: dataInfo.titleCh,
                key: dataInfo.key,
                fileName: dataInfo.fileName,
                content
            })) || [],
        [fileData]
    );

    // 自动加载更多
    useEffect(() => {
        if (!fileTitleContent.length) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (
                    entry.isIntersecting &&
                    visibleCount < fileTitleContent.length
                ) {
                    setVisibleCount(prev =>
                        Math.min(prev + 10, fileTitleContent.length)
                    );
                }
            },
            { root: null, threshold: 1 }
        );

        const sentinel = document.getElementById('load-more-sentinel');
        if (sentinel) observer.observe(sentinel);

        return () => observer.disconnect();
    }, [visibleCount, fileTitleContent.length]);

    // 滚动到 hash 对应元素
    useEffect(() => {
        if (!hash) return;

        const scrollToHash = () => {
            const el = document.getElementById(hash);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return true;
            }
            return false;
        };

        const tryScroll = () => {
            if (!scrollToHash()) {
                requestAnimationFrame(tryScroll);
            }
        };

        tryScroll();
    }, [hash, visibleCount]);

    return (
        <main
            className={`${classes.container} ${sidebarActive ? '' : classes.close}`}
        >
            {isLoad && <Loading />}

            {fileTitleContent.length > 0 ? (
                fileTitleContent
                    .slice(0, visibleCount)
                    .map(file => (
                        <RenderArticles articles={file} key={file.key} />
                    ))
            ) : (
                <RenderInitialContent />
            )}

            {/* Intersection Observer 触发点 */}
            <div id="load-more-sentinel" />
        </main>
    );
}
