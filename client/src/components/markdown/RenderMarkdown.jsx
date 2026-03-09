import classes from './RenderMarkdown.module.scss';
import 'prism-themes/themes/prism-one-light.css';

export default function RenderMarkdown({ children, ...props }) {
    return (
        <article className={classes.markdown} {...props}>
            {children}
        </article>
    );
}
