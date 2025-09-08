import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import classes from './CarouselImages.module.css';
import { SCROLL_IMAGES } from '../../../data/homepage/homePage.js';
import OptimizedImages from './OptimizedImages';

export default function CarouselImages() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            loop={true}
            speed={800}
        >
            {SCROLL_IMAGES.map((img) => (
                <SwiperSlide key={img.key} className={classes.screen}>

                    <OptimizedImages
                        src={img.src}
                        webp={import.meta.env.PROD ? `${img.webp} 1x` : undefined}
                        className={classes.slideImg}
                        alt={img.title}
                    />

                    <div className={classes.content}>
                        <div className={classes.des}>
                            <h2>{img.title}</h2>
                            <p><i>{img.description}</i></p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
