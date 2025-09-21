import { Outlet } from "react-router-dom";
import classes from './RepositoryMainAside.module.scss';
import MainAside from "../../components/repository-comps/main-aside/MainAside";


export default function RepositoryMainAside() {
    return (
        <section className={classes.container}>
            <MainAside />
            <Outlet />
        </section>
    )
}