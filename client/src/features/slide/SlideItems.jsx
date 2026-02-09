import { useEffect } from 'react';
import classes from './SlideItems.module.scss';
import ArrowPrevPage from '../../components/icons/ArrowPrevPage';
import ArrowNextPage from '../../components/icons/ArrowNextPage';
import { useCarouselStates } from '../../store/zustand/carouselZustand';
import ImagesLoad from '../../components/image/ImagesLoad';

export default function SlideItems({ styleLayout }) {
    const {
        slideItems,
        curImageInd,
        withTrans,
        setCurImageInd,
        setWithTrans,
        handlePrevImage,
        handleNextImage
    } = useCarouselStates();

    const moveImage = {
        transform: `translateX(-${curImageInd * 100}%)`,
        transition: withTrans ? 'transform 300ms ease' : 'none'
    };

    useEffect(() => {
        if (!Array.isArray(slideItems) || slideItems.length < 3) return;
        let timer;

        if (curImageInd === slideItems.length - 1) {
            timer = setTimeout(() => {
                setWithTrans(false);
                setCurImageInd(1);
            }, 300);
        }

        if (curImageInd === 0) {
            timer = setTimeout(() => {
                setWithTrans(false);
                setCurImageInd(slideItems.length - 2);
            }, 300);
        }

        return () => clearTimeout(timer);
    }, [curImageInd, slideItems, setWithTrans, setCurImageInd]);

    useEffect(() => {
        if (!withTrans) {
            const id = requestAnimationFrame(() => setWithTrans(true)); // 延迟一帧恢复动画状态
            return () => cancelAnimationFrame(id);
        }
    }, [withTrans, setWithTrans]);

    return (
        <>
            {Array.isArray(slideItems) && slideItems.length !== 0 && (
                <div className={`${classes.carousel} ${styleLayout}`}>
                    <div className={classes.inner} style={moveImage}>
                        {slideItems.map((item, ind) => (
                            <div
                                key={`item-${ind}`}
                                className={classes.image}
                                // style={{
                                //     backgroundImage: `url(${url})`
                                // }}
                            >
                                <ImagesLoad
                                    lowquality={item?.src?.low}
                                    highquality={item?.src?.high}
                                    alt={item?.title}
                                    className=""
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        className={classes.arrowPrev}
                        onClick={handlePrevImage}
                    >
                        <ArrowPrevPage />
                    </button>
                    <button
                        className={classes.arrowNext}
                        onClick={handleNextImage}
                    >
                        <ArrowNextPage />
                    </button>
                </div>
            )}
        </>
    );
}
