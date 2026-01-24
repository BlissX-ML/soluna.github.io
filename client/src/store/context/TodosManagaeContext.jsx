import { createContext, useCallback, useMemo, useState } from "react";
// import mdxWrapper from "../../mdxWrapper.jsx";

export const TodosContext = createContext(null);

export function TodosManagaeContext({ children }) {
    // 未来计划分片
    const [futureActive, setFutureActive] = useState(null);
    const [futureContent, setFutureContent] = useState(null);
    const [isFutureActive, setIsFutureActive] = useState(false);

    // 已完成计划分片
    const [doneActive, setDoneActive] = useState(null);
    const [doneAwards, setDoneAwards] = useState([]);
    const [isDoneActive, setIsDoneActive] = useState(false);

    // 两个独立的选择函数（最直观，不用额外参数）
    const handleFutureClick = useCallback((item) => {
        setFutureActive(item);
        setIsFutureActive(true);
        const Comp = item?.learnRoute;
        // setFutureContent(Comp ? <Comp components={{ wrapper: mdxWrapper }} /> : null);
    }, []);

    const handletDoneClick = useCallback((item) => {
        setDoneActive(item);
        setIsDoneActive(true);
        setDoneAwards(item?.srcs || "");
    }, []);

    const ctx = useMemo(
        () => ({
            future: {
                active: isFutureActive,
                activeItem: futureActive,
                content: futureContent,
                click: handleFutureClick,
            },
            done: {
                active: isDoneActive,
                activeItem: doneActive,
                content: doneAwards,
                click: handletDoneClick,
            },
        }),
        [
            futureActive,
            futureContent,
            isFutureActive,
            doneActive,
            doneAwards,
            isDoneActive,
        ],
    );

    return (
        <TodosContext.Provider value={ctx}>{children}</TodosContext.Provider>
    );
}
