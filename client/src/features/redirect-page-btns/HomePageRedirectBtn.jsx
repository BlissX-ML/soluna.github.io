import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./HomePageRedirectBtn.module.scss";

import GeneralBtns from "../../components/buttons/GeneralBtns.jsx";
import ArrowRightRedirectPage from "../../components/icons/ArrowRightRedirectPage.jsx";

export default function RedirctHomePage({ src, children }) {
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
                <ArrowRightRedirectPage fill="#ececec" />
            ) : (
                <ArrowRightRedirectPage fill="black" />
            )}
        </GeneralBtns>
    );
}
