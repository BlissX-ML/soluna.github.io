import classes from "./AsidebarCatalogs.module.scss";

export default function AsidebarCatalogs() {
    return (
        <div className={classes["sidebar-toggle-container"]}>
            <p>
                <span>目录</span>
                <span>catalogs</span>
            </p>
        </div>
    );
}
