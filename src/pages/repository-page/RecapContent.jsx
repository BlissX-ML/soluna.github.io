import { useParams } from "react-router-dom";

import classes from "./RecapContent.module.scss";

import { useAppSelector } from "../../store/reducer/hooks.js";
import MainContent from "../../features/sidebar-navigation/MainContent";

export default function RecapContent() {
    const { isOpen } = useAppSelector((state) => state?.asideToggle);
    const { recapId } = useParams();

    return (
        <MainContent>
            <p>这里是 {recapId} 的正文</p>
        </MainContent>
    );
}
