import { createContext, useMemo, useState } from "react";

export const HandbookContext = createContext(null)

export default function HandbookAsideContext({ children }) {
    const [openAside, setOpenAside] = useState(true);

    function handleAside() {
        setOpenAside(prev => !prev)
    }

    const ctx = useMemo(() => ({
        active: openAside,
        toggle: handleAside
    }), [openAside])

    return <HandbookContext.Provider value={ctx}>{children}</HandbookContext.Provider>
}