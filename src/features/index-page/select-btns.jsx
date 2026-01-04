import { useNavigate } from "react-router-dom";
import classes from "./select-btns.module.scss";

import GeneralBtns from "../../components/buttons/general-btns";

export default function Select({ src, children }) {
    const navigate = useNavigate();

    return (
        <GeneralBtns
            style={classes["index-btn"]}
            handleClick={() => navigate(src)}
        >
            {children}
        </GeneralBtns>
    );
}
