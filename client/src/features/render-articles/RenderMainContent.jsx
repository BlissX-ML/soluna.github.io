import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useAppSelector } from '../../store/reducer/hooks';

import classes from './RenderMainContent.module.scss';

import RenderArticles from '../../components/render-articles/RenderArticles.jsx';
import RenderNoneContent from './RenderNoneContent';

import { MEMOS_ROUTE } from '../../_data/memo/memo';
import { REPOSITORY_SIDEBAR } from '../../_data/repository/repository';

// 这里需要的 data 是以 {key: tags, data: [{符合 tags 的数据}]}
export default function RenderMainContent({ startUrl }) {
    const { hash } = useLocation();
    const { routeId } = useParams();
    const { sidebarActive } = useAppSelector(state => state.dropdownSidebar);

    const maxRendered = useRef(0); // 记录曾经渲染过的最大值
    const [visibleCount, setVisibleCount] = useState(10);

    const categoriFiles = useMemo(() => {
        if (startUrl === '/memo') {
            return MEMOS_ROUTE.find(d => d.key.toLowerCase() === routeId)?.data;
        } else if (startUrl === '/repository') {
            const category = REPOSITORY_SIDEBAR.find(
                el => el?.key.toLowerCase() === routeId
            );

            const chapter = category?.detail?.data.find(
                d => d.key.toLowerCase() === hash.replace('#', '').toLowerCase()
            );

            return chapter?.detail[0]?.data || [];
        }
    }, [routeId, startUrl, hash]);

    const anchorId = useMemo(() => {
        if (!hash || startUrl !== '/repository') return null;
        const id = hash.replace('#', '');

        const section = REPOSITORY_SIDEBAR.find(
            el => el?.key.toLowerCase() === routeId
        )?.detail?.data.find(d => d.key === id);

        return section?.fileName || null; // ← 改为返回 fileName
    }, [hash, routeId, startUrl]);

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
    }, [visibleCount, categoriFiles.length]);

    // Memo 页面：预加载目标文章
    useEffect(() => {
        if (startUrl === '/memo' && hash && categoriFiles?.length > 0) {
            const id = hash.replace('#', '');

            const targetIndex = categoriFiles.findIndex(
                file =>
                    file.fileName === id ||
                    file.titleEh === id ||
                    file.fileName?.toLowerCase() === id ||
                    file.titleEh?.toLowerCase() === id
            );

            if (targetIndex !== -1 && targetIndex >= visibleCount) {
                const newCount = Math.min(
                    targetIndex + 10,
                    categoriFiles.length
                );
                setVisibleCount(newCount);
                maxRendered.current = newCount;
            }
        }
    }, [hash, categoriFiles, startUrl, visibleCount]);

    // 在 Memo 预加载逻辑后面添加（约第 81 行）
    useEffect(() => {
        if (
            startUrl === '/repository' &&
            anchorId &&
            categoriFiles?.length > 0
        ) {
            // 找到目标章节在数据中的索引
            const targetIndex = categoriFiles.findIndex(
                file => file.fileName === anchorId
            );

            if (targetIndex !== -1 && targetIndex >= visibleCount) {
                const newCount = Math.min(
                    targetIndex + 10,
                    categoriFiles.length
                );
                setVisibleCount(newCount);
                maxRendered.current = newCount;
            }
        }
    }, [anchorId, categoriFiles, startUrl, visibleCount]);

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
            id={startUrl === '/repository' ? routeId : undefined}
            className={`${classes.container} ${sidebarActive ? '' : classes.close}`}
        >
            {Array.isArray(categoriFiles) && categoriFiles.length > 0 ? (
                <>
                    {categoriFiles.slice(0, visibleCount).map(file => (
                        <RenderArticles
                            articles={file}
                            key={file.key}
                        ></RenderArticles>
                    ))}
                </>
            ) : (
                <RenderNoneContent startURL={startUrl} />
            )}
        </main>
    );
}
