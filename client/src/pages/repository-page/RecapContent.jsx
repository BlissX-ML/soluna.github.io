import { useParams } from "react-router-dom";

import classes from "./RecapContent.module.scss";

// import MainContent from "../../features/sidebar-navigation/MainContent";

export default function RecapContent() {
    const { recapId } = useParams();

    return <p>这里是 {recapId} 的正文</p>;
}
