import { useDispatch, useSelector } from 'react-redux';
import classes from './CarouselImages.module.css'

import { useCallback, useEffect, useRef, useState } from 'react';
import ArrowImages from './Arrow';
import ImagesLoop from './ImagesLoop';

const selectHomeImages = state => state.homeImages;

export default function CarouselImages() {
    const [paused, setPaused] = useState(false);   // 控制自动轮播
    const timerRef = useRef(null);                 // 控制轮播计时器是否暂停

    const [isTransitioning, setIsTransitioning] = useState(true);
    const carouselRef = useRef(null)

    const { totals, currentImage } = useSelector(selectHomeImages);
    const dispatch = useDispatch();

    // 开启自动播放
    const startAutoPlay = useCallback(() => {
        if (timerRef.current) return;
        timerRef.current = setInterval(() => dispatch({ type: 'right' }), 5000)
    }, [dispatch]);

    // 取消自动播放
    const stopAutoPlay = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, [])

    // 根据自动轮播控制是否自动播放
    useEffect(() => {
        if (!paused) startAutoPlay();
        return stopAutoPlay;
    }, [paused, startAutoPlay, stopAutoPlay])

    // 控制鼠标进入界面的情况下，不再执行自动播放
    const handleEnter = () => { setPaused(true); stopAutoPlay(); }
    const handleLeave = () => { setPaused(false); }

    // 根据当前的事件状态，控制图片翻转的动画效果
    const handleTransitionEnd = (event) => {
        if (event.propertyName !== 'transform') return;  // 只在 CSS 的 transform 属性过渡动画结束时才执行后面的逻辑
        if (currentImage !== totals - 1) return;
        setIsTransitioning(false);
        requestAnimationFrame(() => {
            dispatch({ type: 'jump' });
            requestAnimationFrame(() => setIsTransitioning(true))
        })
    }

    // 控制左右箭头的点击效果
    function leftArrowHandle() { dispatch({ type: 'left' }) }
    function rightArrowHandle() { dispatch({ type: 'right' }) }

    // 实现图片移动的关键
    let MOVE_IMAGES = {
        transform: `translateX(-${currentImage * 100}%)`,
        transition: isTransitioning ? 'transform 0.5s ease' : 'none',
        width: `${totals * 100}%`
    };

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) stopAutoPlay();
            else if (!paused) startAutoPlay();
        }

        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [paused, stopAutoPlay, startAutoPlay])

    return (
        // `flex` 与 `hidden` 是必要的 ✔✔✔
        <main className={classes.carousel} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <ArrowImages btnCN={classes.leftBtn} spanCN={classes.left} arrowHandle={leftArrowHandle} />

            {/* `flex` 是必要的，同时作为包裹图片与文字的代码块，实现移动的 style 要安放在这里 ✔✔✔ */}
            <div className={classes.inner} style={MOVE_IMAGES} ref={carouselRef} onTransitionEnd={handleTransitionEnd}>
                <ImagesLoop screen={classes.screen} content={classes.content} des={classes.des} />
            </div>

            <ArrowImages btnCN={classes.rightBtn} spanCN={classes.right} arrowHandle={rightArrowHandle} />

        </main >
    )
}
