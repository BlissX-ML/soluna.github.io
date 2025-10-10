import classes from './Titles.module.css';

export default function Titles({ children }) {
    return <h2 className={classes.h2}>{children}</h2>
}