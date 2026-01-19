import Hyperlink from "../icons/hyperlink";
import classes from "./ResourceLinkList.module.scss";

export default function ResourceLinkList({ resources }) {
    return (
        <div className={classes["conetnt"]}>
            {resources?.websites.map((resource) => (
                <a
                    className={classes["link"]}
                    href={resource.url}
                    target="_blank"
                >
                    <Hyperlink />

                    <span className={classes["res-title"]}>
                        {resource.name}
                    </span>

                    <span className={classes["res-desc"]}>{resource.desc}</span>
                </a>
            ))}
        </div>
    );
}
