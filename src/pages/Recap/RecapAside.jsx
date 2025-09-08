import { Outlet } from "react-router-dom";
import classes from './RecapAside.module.css';

import RecapNav from "../../components/Recap/Navigation/RecapNav.jsx";

export default function RecapAside() {
    return (
        <section className={classes.container}>
            <RecapNav />
            <main className={classes.mainContent}>
                <Outlet />
            </main>
        </section>
    )
}