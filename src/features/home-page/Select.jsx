import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './Select.module.scss'
import { ICONS } from '../../_data/icons/icons.js';
import Btns from '../../components/buttons/btns';


export default function Select({ src, children }) {
    const ArrowDark = ICONS.arrowRightDark;
    const ArrowLight = ICONS.arrowRightLight;

    const navigate = useNavigate();

    const [lightArrowColor, setLightArrowColor] = useState(false)


    return (
        <Btns
            ui={classes.btn}
            handleClick={() => navigate(src)}
            onMouseEnter={() => setLightArrowColor(true)}
            onMouseLeave={() => setLightArrowColor(false)}
        >
            <p>{children}</p>

            {
                lightArrowColor ?
                    <ArrowLight className={classes.arrow} /> :
                    <ArrowDark className={classes.arrow} />
            }
        </Btns>
    )
}