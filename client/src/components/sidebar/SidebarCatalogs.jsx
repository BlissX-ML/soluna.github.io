import classes from "./SidebarCatalogs.module.scss";

export default function SidebarCatalogs() {
    return (
        <div className={classes["sidebar-toggle-container"]}>
            <p>
                <span>目录</span>
                <span>catalogs</span>
            </p>
        </div>
    );
}
