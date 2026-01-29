import Hyperlink from '../icons/Hyperlink';
import classes from './ResourceCard.module.scss';

export default function ResourceCard({ resources }) {
    return (
        <article className={classes.article}>
            {/* 标题栏 */}
            <div className={classes.top}>
                <div className={classes.main}>
                    <h2>{resources.title}</h2>
                    <p className={classes.desc}>{resources.description}</p>
                </div>
                <p className={classes.props}>
                    <span>{resources.field}</span>
                    <span>{resources.category}</span>
                </p>
            </div>

            {/* 遍历链接内容栏 */}
            <div className={classes.content}>
                {resources?.websites.map(resource => (
                    <a
                        className={classes.link}
                        key={resource.url}
                        href={resource.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Hyperlink />

                        <span className={classes['res-title']}>
                            {resource.name}
                        </span>

                        <span className={classes['res-desc']}>
                            {resource.desc}
                        </span>
                    </a>
                ))}
            </div>

            {/* 标签栏 */}
            <div className={classes.tags}>
                {resources?.tags.map(tag => (
                    <p key={tag}>{`#${tag}`}</p>
                ))}
            </div>
        </article>
    );
}
