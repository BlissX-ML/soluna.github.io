import { useNavigate } from 'react-router-dom'
import classes from './Button.module.scss'

export default function Button({ children, src }) {
    const navigate = useNavigate();

    return (
        <button className={classes.btn} onClick={() => navigate(src)}>
            {children}
        </button>
    )
}