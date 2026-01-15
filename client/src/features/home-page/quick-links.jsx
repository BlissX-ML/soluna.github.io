import { useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./quick-links.module.scss";
import { ICONS } from "../../_data/icons/icons.js";
import GeneralBtns from "../../components/buttons/GeneralBtns";

export default function Select({ src, children }) {
    const ArrowDark = ICONS.arrowRightDark;
    const ArrowLight = ICONS.arrowRightLight;

    const navigate = useNavigate();

    const [lightArrowColor, setLightArrowColor] = useState(false);

    return (
        <GeneralBtns
            style={classes.selectBtn}
            handleClick={() => navigate(src)}
            onMouseEnter={() => setLightArrowColor(true)}
            onMouseLeave={() => setLightArrowColor(false)}
        >
            <p>{children}</p>

            {lightArrowColor ? (
                <ArrowLight className={classes.arrow} />
            ) : (
                <ArrowDark className={classes.arrow} />
            )}
        </GeneralBtns>
    );
}
