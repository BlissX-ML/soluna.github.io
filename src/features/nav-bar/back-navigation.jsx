import { useNavigate } from "react-router-dom";
import Btns from "../../components/buttons/btns.jsx";

import classes from './back-navigation.module.scss'

export default function BackNavigation() {
    const navigate = useNavigate();

    return (
        <Btns
            ui={classes['back-btns']}
            handleClick={() => navigate('/')}
        >
            返回介绍页
        </Btns>
    )
}