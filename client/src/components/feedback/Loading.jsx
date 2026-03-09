import classes from './Loading.module.scss';

export default function Loading() {
    return (
        <div className={classes.loading}>
            <div className={classes.spin}></div>
            <p>请稍后，内容正在加载...</p>
        </div>
    );
}
