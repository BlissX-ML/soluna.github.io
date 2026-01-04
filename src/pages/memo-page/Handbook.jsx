import { useContext } from "react";
import { HTML_HANDBOOK } from "../../_data/articles/interview-handbook/front-end/basis/html.js";

import classes from "./Handbook.module.scss";
import "prismjs/themes/prism-tomorrow.css";

import { HandbookContext } from "../../store/context/HandbookAsideContext.jsx";
import { useAppSelector } from "../../store/reducer/hooks.js";
import MainContent from "../../features/aside-fixed-navigation/MainContent.jsx";

export default function Handbook() {
    const { isOpen } = useAppSelector((state) => state?.asideToggle);

    const Content = HTML_HANDBOOK[0].content;

    return (
        <MainContent>
            <h2>{HTML_HANDBOOK[0]?.titleCh}</h2>
            <Content />
        </MainContent>
    );
}
