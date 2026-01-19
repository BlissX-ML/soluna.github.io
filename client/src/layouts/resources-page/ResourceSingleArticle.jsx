import classes from "./ResourceSingleArticle.module.scss";

import ResourceCardHeader from "../../components/resource/ResourceCardHeader";
import ResourceLinkList from "../../components/resource/ResourceLinkList";
import ResourceTagList from "../../components/resource/ResourceTagList";

export default function ResourceSingleArticle({ resources }) {
    return (
        <article className={classes.article}>
            {/* 单个图块的标题位置 */}
            <ResourceCardHeader resources={resources} />

            {/* 单个图块的链接位置 */}
            <ResourceLinkList resources={resources} />

            {/* 单个图块的 tags 下角标位置 */}
            <ResourceTagList resources={resources} />
        </article>
    );
}
