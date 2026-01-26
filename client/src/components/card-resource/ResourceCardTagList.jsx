import classes from './ResourceCardTagList.module.scss';

export default function ResourceCardTagList({ resources }) {
    return (
        <div className={classes['tags']}>
            {resources?.tags.map(tag => (
                <p key={tag}>{`#${tag}`}</p>
            ))}
        </div>
    );
}
