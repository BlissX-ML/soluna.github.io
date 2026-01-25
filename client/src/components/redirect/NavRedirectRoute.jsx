import { NavLink } from "react-router-dom";
import classes from "./NavRedirectRoute.module.scss";

export default function NavRedirectRoute({
    path,
    listStyle,
    extraContentInList,
    children,
    ...props
}) {
    return (
        <li className={`${classes["nav-list"]} ${listStyle}`}>
            <NavLink
                to={path}
                className={({ isActive }) => (isActive ? classes.active : "")}
                {...props}
            >
                {children}
            </NavLink>
            {extraContentInList}
        </li>
    );
}
