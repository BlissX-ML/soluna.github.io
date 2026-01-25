import classes from "./ResourceCardLinkList.module.scss";
import Hyperlink from "../icons/Hyperlink.jsx";

export default function ResourceCardLinkList({ resources }) {
    return (
        <div className={classes["content"]}>
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
