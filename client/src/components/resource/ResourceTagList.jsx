import classes from "./ResourceTagList.module.scss";

export default function ResourceTagList({ resources }) {
    return (
        <div className={classes["tags"]}>
            {resources?.tags.map((tag) => (
                <p>{`#${tag}`}</p>
            ))}
        </div>
    );
}
