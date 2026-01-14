import { createContext, useCallback, useMemo, useState } from "react";
import { ICONS } from "../../_data/icons/icons.js";


export const CardContext = createContext({
    state: false,
    icon: null,
    changeVisible: () => { }
})

export function KnowledgeCardContext({ children }) {
    const [visibility, setVisibility] = useState(false);

    const Icon = useMemo(
        () => (visibility ? ICONS.OpenEye : ICONS.CloseEye),
        [visibility]
    );

    const handleBtnVisible = useCallback(() => {
        setVisibility(prev => !prev)
    }, [])

    const ctx = useMemo(
        () => ({
            state: visibility,
            icon: Icon,
            changeVisible: handleBtnVisible
        }),
        [visibility, Icon, handleBtnVisible]
    )

    return <CardContext.Provider value={ctx}>{children}</CardContext.Provider>
}