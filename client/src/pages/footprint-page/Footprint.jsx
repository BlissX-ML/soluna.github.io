import classes from "./Footprint.module.scss";
import GeoChinaMap from "../../components/charts/GeoChinaMap";

export default function Footprint() {
    return (
        <section id="main-content" className={classes["footprint"]}>
            <main className={classes["map-related"]}>
                {/* 地图 */}
                <GeoChinaMap />
                <main className={classes["content"]}></main>
            </main>
            <main className={classes["tour-memo"]}>1</main>
        </section>
    );
}
