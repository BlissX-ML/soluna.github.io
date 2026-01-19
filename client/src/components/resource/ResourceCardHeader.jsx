import classes from "./ResourceCardHeader.module.scss";

export default function ResourceCardHeader({ resources }) {
    return (
        <div className={classes["top"]}>
            <div className={classes["main"]}>
                <h2>{resources.title}</h2>
                <p className={classes["desc"]}>{resources.description}</p>
            </div>
            <p className={classes["props"]}>
                <span>{resources.field}</span>
                <span>{resources.category}</span>
            </p>
        </div>
    );
}
