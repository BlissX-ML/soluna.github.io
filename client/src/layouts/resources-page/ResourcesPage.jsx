import { useContext } from "react";
import classes from "./ResourcesPage.module.scss";

import { ResourcesContext } from "../../store/context/ResourcesContext.jsx";
import { CATEGORIES } from "../../_data/resources-page/resources.js";
import ResourcesSearch from "../../features/search-box/ResourcesSearchBox.jsx";

import Nothing from "../../components/feedback/Nothing.jsx";
import ResourceSingleArticle from "./ResourceSingleArticle";
import ResourcesSearchBox from "../../features/search-box/ResourcesSearchBox.jsx";

export default function ResourcesPage() {
    const { filteredResources } = useContext(ResourcesContext);

    return (
        <>
            {/* 上面的搜索栏部分 */}
            <ResourcesSearchBox categories={CATEGORIES} />
            {/* 下面放具体的链接的位置 */}
            <main className={classes["resource-container"]}>
                {filteredResources.length === 0 ? (
                    <Nothing />
                ) : (
                    filteredResources.map((resources) => (
                        <ResourceSingleArticle resources={resources} />
                    ))
                )}
            </main>
        </>
    );
}
