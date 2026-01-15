import classes from "./NavMenuBtns.module.scss";

export default function NavMenuBtns({ handleClick, children }) {
    return (
        <button className={classes["nav-menu-btns"]} onClick={handleClick}>
            {children}
        </button>
    );
}
