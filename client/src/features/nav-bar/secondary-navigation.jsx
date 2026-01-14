import { useNavigate } from "react-router-dom";
import NavMenuBtns from "../../components/buttons/nav-menu-btns.jsx";

export default function SecondaryNavigation() {
    const navigate = useNavigate();

    return (
        <NavMenuBtns handleClick={() => navigate("/")}>返回介绍页</NavMenuBtns>
    );
}
