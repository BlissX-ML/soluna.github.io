import classes from './ResourceSingleArticle.module.scss';

import ResourceCardHeader from '../../components/card-resource/ResourceCardHeader';
import ResourceCardLinkList from '../../components/card-resource/ResourceCardLinkList';
import ResourceCardTagList from '../../components/card-resource/ResourceCardTagList';

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
