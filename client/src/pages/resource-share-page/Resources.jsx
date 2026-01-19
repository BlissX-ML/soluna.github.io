import classes from "./Resources.module.scss";

import ResourcesSearchContext from "../../store/context/ResourcesContext";
import ResourcesPage from "../../layouts/resources-page/ResourcesPage";
export default function Resources() {
    return (
        <ResourcesSearchContext>
            <section id="main-content" className={classes["page-container"]}>
                <ResourcesPage />
            </section>
        </ResourcesSearchContext>
    );
}
