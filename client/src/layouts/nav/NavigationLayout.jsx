import classes from "./NavigationLayout.module.scss";

import Logo from "../../components/icons/Logo";
import MainNavigation from "../../features/nav/MainNavigation.jsx";
import SecondaryNavigation from "../../features/nav/SecondaryNavigation.jsx";

export default function NavigationLayout() {
    return (
        <header className="header">
            <nav className={classes.nav}>
                <Logo />

                <MainNavigation />

                <SecondaryNavigation />
            </nav>
        </header>
    );
}
