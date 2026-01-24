import classes from "./Nothing.module.scss";

export default function Nothing() {
    return (
        <div className={classes.nothing}>
            <h2>📢 资源不存在</h2>
            <p>当前选中范围并无所需资源，或本资源压根不存在</p>
            <p>请重新选择并查找 . . .</p>
        </div>
    );
}
