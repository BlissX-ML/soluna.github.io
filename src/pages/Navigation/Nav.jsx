import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation.jsx";
import { RecapAsideManageContext } from "../../store/RecapAsideManageContext.jsx";

export default function Nav() {
    return (
        <>
            <RecapAsideManageContext>
                <Navigation />
                <Outlet />
            </RecapAsideManageContext>
        </>
    )
}