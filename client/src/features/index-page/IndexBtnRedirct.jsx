import { useNavigate } from "react-router-dom";
import classes from "./IndexBtnRedirct.module.scss";

import GeneralBtns from "../../components/buttons/GeneralBtns";

export default function IndexBtnRedirct({ src, children }) {
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
