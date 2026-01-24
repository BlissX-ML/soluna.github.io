import { useNavigate } from "react-router-dom";
import classes from "./IndexPageRedirectBtn.module.scss";

import GeneralBtns from "../../components/buttons/GeneralBtns.jsx";

export default function IndexPageRedirectBtn({ src, children }) {
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
