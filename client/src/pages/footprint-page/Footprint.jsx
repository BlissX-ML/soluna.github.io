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
                <main className={classes['content']}></main>
            </main>
            <main className={classes['tour-memo']}>1</main>
        </section>
    );
}
