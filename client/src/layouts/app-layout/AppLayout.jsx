import { Outlet } from "react-router-dom";
import classes from "./AppLayout.module.scss";

import NavigationLayout from "../../layouts/nav/NavigationLayout.jsx";
import FooterLayout from "../footer/FooterLayout.jsx";

export default function AppLayout() {
    return (
        <>
            <NavigationLayout />
            <Outlet />
            <FooterLayout />
        </>
    );
}
