import { Outlet } from "react-router-dom";
import Navigation from "../../layouts/nav-bar/Navigation.jsx";

export default function NavigationPage() {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}