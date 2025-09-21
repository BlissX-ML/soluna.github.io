import { NavLink } from "react-router-dom";
import classes from './NavigationItems.module.scss'

export default function NavigationItems({ path, children }) {
    return (
        <>
            <NavLink
                to={path}
                className={({ isActive }) => isActive ? classes.active : undefined}
            >
                {children}
            </NavLink>
        </>
    )
}