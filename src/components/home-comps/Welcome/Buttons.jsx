import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './Buttons.module.scss'
import { ICONS } from '../../../data/icons/icons.js';


export default function Buttons({ src, children }) {
    const ArrowDark = ICONS.arrowRightDark;
    const ArrowLight = ICONS.arrowRightLight;
    const navigate = useNavigate();

    const [arrowColor, setArrowColor] = useState(false)

    function handleMouseEnter() {
        setArrowColor(true);
    }

    function handleMouseLeave() {
        setArrowColor(false)
    }

    function handleClick(src) {
        navigate(src)
    }

    return (
        <button
            className={classes.btn}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(src)}
        >
            <p>{children}</p>
            {
                arrowColor ?
                    <ArrowLight className={classes.arrow} /> :
                    <ArrowDark className={classes.arrow} />
            }
        </button>
    )
}