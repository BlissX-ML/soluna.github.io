import classes from "./general-btns.module.scss";

export default function GeneralBtns({
    style,
    handleClick,
    children,
    ...props
}) {
    return (
        <button
            className={`${classes["btns"]} ${style}`}
            onClick={handleClick}
            {...props}
        >
            {children}
        </button>
    );
}
