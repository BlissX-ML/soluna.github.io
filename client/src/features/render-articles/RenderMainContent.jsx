import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useAppSelector } from '../../store/reducer/hooks';

import classes from './RenderMainContent.module.scss';

import RenderArticles from '../../components/markdown/RenderArticles.jsx';

import { useMdDataApi } from '../../api/useMdDataApi.js';
import Loading from '../../components/feedback/Loading';
import RenderInitialContent from './RenderInitialContent';

// 这里需要的 data 是以 {key: tags, data: [{符合 tags 的数据}]}
export default function RenderMainContent() {
    const maxRendered = useRef(0); // 记录曾经渲染过的最大值
    const [visibleCount, setVisibleCount] = useState(10);

    const { hash } = useLocation();
    const { routeId } = useParams();
    const { sidebarActive } = useAppSelector(state => state.dropdownSidebar);

    const pureHash = hash.replace('#', '').toLowerCase();
    const { data: fileData, isLoad } = useMdDataApi(routeId, pureHash);

    const fileTitleContent = !fileData
        ? []
        : fileData.map(f => ({
              titleCh: f.dataInfo.titleCh,
              key: f.dataInfo.key,
              fileName: f.dataInfo.fileName,
              content: f.content
          }));

    useEffect(() => {
        const timer = setTimeout(() => {
            if (
                visibleCount < fileTitleContent.length &&
                visibleCount >= maxRendered.current
            ) {
                const newCount = visibleCount + 10;
                setVisibleCount(newCount);
                maxRendered.current = newCount; // 更新最大值
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [visibleCount, fileTitleContent.length]);

    useEffect(() => {
        if (!hash) return;

        const id = hash.replace('#', '');

        const tryScroll = () => {
            const element = document.getElementById(id);

            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        // 延迟执行，等待 DOM 渲染
        setTimeout(tryScroll, 300);
    }, [hash, visibleCount]);

    return (
        <main
            className={`${classes.container} ${sidebarActive ? '' : classes.close}`}
        >
            {isLoad && <Loading />}
            {Array.isArray(fileTitleContent) && fileTitleContent.length > 0 ? (
                <>
                    {fileTitleContent.slice(0, visibleCount).map(file => (
                        <RenderArticles
                            articles={file}
                            key={file.key}
                        ></RenderArticles>
                    ))}
                </>
            ) : (
                <RenderInitialContent />
            )}
        </main>
    );
}
