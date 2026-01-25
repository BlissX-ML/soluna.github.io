import classes from "./ResourceSingleArticle.module.scss";

import ResourceCardHeader from "../../components/resource/ResourceCardHeader";
import ResourceCardLinkList from "../../components/resource/ResourceCardLinkList";
import ResourceCardTagList from "../../components/resource/ResourceCardTagList";

export default function ResourceSingleArticle({ resources }) {
    return (
        <article className={classes.article}>
            {/* 单个图块的标题位置 */}
            <ResourceCardHeader resources={resources} />

            {/* 单个图块的链接位置 */}
            <ResourceCardLinkList resources={resources} />

            {/* 单个图块的 tags 下角标位置 */}
            <ResourceCardTagList resources={resources} />
        </article>
    );
}
