import classes from './RenderMarkdown.module.scss';
import 'prism-themes/themes/prism-one-light.css';

export default function RenderMarkdown({ anchor, children, ...props }) {
    return (
        <article id={anchor} className={classes.markdown} {...props}>
            {children}
        </article>
    );
}
