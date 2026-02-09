import { VISITED_CITIES } from '../../_data/footprint/visit-cities';
import GeoChinaMap from '../../components/charts/geo/GeoMap';
import classes from './Footprint.module.scss';

export default function Footprint() {
    return (
        <section id="main-content" className={classes['footprint']}>
            <main className={classes['map-related']}>
                {/* 地图 */}
                <GeoChinaMap
                    className={classes.map}
                    tipClassName={classes.tip}
                />

                <main className={classes['content']}>
                    {VISITED_CITIES.map((province, index) => (
                        <main
                            key={`province-${index}`}
                            className={classes['each-card']}
                        >
                            <p className={classes.provinces}>
                                📌 {province.title}
                            </p>
                            <div className={classes.cities}>
                                {province?.detail.map((city, ind) => (
                                    <span key={`city-${ind}`}>
                                        {city?.title}
                                    </span>
                                ))}
                            </div>
                        </main>
                    ))}
                </main>
            </main>
            {/* <main className={classes['tour-memo']}>1</main> */}
        </section>
    );
}
