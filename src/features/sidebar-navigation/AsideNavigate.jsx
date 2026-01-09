import { useEffect, useState } from 'react';

import classes from './AsideNavigate.module.scss'
import Category from './Category'
import { useAppDispatch, useAppSelector } from '../../store/reducer/hooks';
import { changeAside } from '../../store/reducer/aside-toggle';

// 1. active 检查当前侧边栏开不开的
// 2. toggle 控制当前侧边栏开关的
// 3. content 是完整的目录内容


export default function AsideNavigate({ categories }) {
    const dispatch = useAppDispatch();
    const { isOpen } = useAppSelector(state => state?.asideToggle);

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 1024px)');
        const handleResize = () => {
            const matches = mq.matches;
            setIsDesktop(matches);
            // 桌面端自动打开，移动端自动关闭
            dispatch(changeAside(matches));  // 控制 open
        };

        handleResize(); // 初始化
        mq.addEventListener('change', handleResize);
        return () => mq.removeEventListener('change', handleResize);
    }, []);

    const toggleSidebar = () => {
        dispatch(changeAside(!isOpen));
    };

    const closeMobileSidebar = () => {
        if (!isDesktop) {
            dispatch(changeAside(false));
        }
    };


    return (
        <>
            {/* 移动端遮罩层 */}
            {!isDesktop && isOpen && (
                <div
                    className={classes.overlay}
                    onClick={closeMobileSidebar}
                    aria-label="关闭侧边栏"
                />
            )}

            <aside
                className={`
                    ${classes.aside} 
                    ${isOpen ? classes.open : classes.close} 
                    ${isDesktop ? classes.desktop : classes.mobile}
                `}
                role="navigation"
                aria-label="导航菜单"
            >
                <ul className={classes.category}>
                    <Category categories={categories} />
                </ul>
            </aside>

            <button
                onClick={toggleSidebar}
                className={`${classes.toggleBtn} ${isOpen ? classes.opened : classes.closed}`}
                aria-controls="aside-nav"
                aria-expanded={isOpen}
                aria-label={isOpen ? "关闭侧边栏" : "打开侧边栏"}
            >
                <svg
                    className={classes.arrow}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points={isOpen ? "16 4, 8 12, 16 20" : "8 4, 16 12, 8 20"} />
                </svg>
            </button>
        </>
    );
}
