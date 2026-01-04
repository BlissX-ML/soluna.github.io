import classes from "./nav-menu-btns.module.scss";

export default function NavMenuBtns({ handleClick, children }) {
    return (
        <button className={classes["nav-menu-btns"]} onClick={handleClick}>
            {children}
        </button>
    );
}
