import { useContext, useMemo } from "react";

import classes from "./ContentFutureViewer.module.scss";

import ContentPlaceholder from "./ContentPlaceholder.jsx";
import { TodosContext } from "../../../store/context/TodosManagaeContext.jsx";
import { useSelector } from "react-redux";
// import mdxWrapper from "../../../mdxWrapper.jsx";

export default function ContentFutureViewer({ slot, items }) {
    // const { activeKey, isActive } = useSelector((state) => state?.plans[slot]);

    // // 建 key -> 组件 的本地映射（不会进 Redux）
    // const routeMap = useMemo(
    //     () => Object.fromEntries(items.map((i) => [i.key, i.learnRoute])),
    //     [items],
    // );

    // const Comp = routeMap[activeKey];

    return (
        <div className={classes.todoContent}>
            {/* {isActive && Comp ? (
                <Comp components={{ wrapper: mdxWrapper }} />
            ) : (
                <ContentPlaceholder />
            )} */}
        </div>
    );
}
