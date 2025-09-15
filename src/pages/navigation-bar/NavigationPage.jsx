import { Outlet } from "react-router-dom";
import Navigation from "../../components/navigation-bar/Navigation.jsx";

export default function NavigationPage() {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}