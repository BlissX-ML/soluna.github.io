import classes from "./GeneralBtns.module.scss";

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
