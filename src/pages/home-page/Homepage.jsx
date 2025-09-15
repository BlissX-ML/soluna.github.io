import classes from './Homepage.module.css';
import Welcome from "../../components/home-comps/Welcome/Welcome.jsx";

export default function Homepage() {
    return (
        <section className={classes.homepage}>
            <Welcome />
        </section>
    )
}