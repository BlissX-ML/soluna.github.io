import classes from "./Navigation.module.scss";

import { ICONS } from "../../_data/icons/icons.js";
import MainNavigation from "../../features/nav-bar/main-navigation.jsx";
import BackNavigation from "../../features/nav-bar/secondary-navigation.jsx";

const Logo = ICONS.logo;

export default function Navigation() {
    return (
        <header className="header">
            <nav className={classes.nav}>
                <Logo className={classes.logo} />

                <MainNavigation />

                <div className={classes["back-btn"]}>
                    <BackNavigation />
                </div>
            </nav>
        </header>
    );
}
