import { useNavigate } from 'react-router-dom'
import classes from './Select.module.scss'

import Btns from '../../components/buttons/btns.jsx';

export default function Select({ src, children }) {
    const navigate = useNavigate();

    return (
        <Btns
            ui={classes.btn}
            handleClick={() => navigate(src)}
        >
            {children}
        </Btns>
    )
}