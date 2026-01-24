import classes from "./Loading.module.scss";

export default function Loading() {
    return (
        <div className={classes.loading}>
            <h2>Please wait a moment...</h2>
            <p>This page is loading now.</p>
        </div>
    );
}
