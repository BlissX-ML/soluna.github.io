import { useNavigate } from "react-router-dom";
import NavMenuBtns from "../../components/buttons/NavMenuBtns.jsx";

export default function SecondaryNavigation() {
    const navigate = useNavigate();

    return (
        <NavMenuBtns handleClick={() => navigate("/")}>返回介绍页</NavMenuBtns>
    );
}
