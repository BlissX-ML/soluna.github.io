import { createContext, useMemo, useRef, useState } from "react";
import { RECAP_NAV } from "../data/recap/recap";


export const recapAsideContext = createContext({
    activeKey: '',                         // 保存当前被选中的导航栏的元素的 key
    setActiveKey: (curCategory) => { },    // 修改当前选中的导航
    dropState: false,                      // 保存 recap 下拉选项的效果
    openDrop: () => { },                   // 保持 recap 下拉状态
    closeDrop: () => { },                  // 取消 recap 下拉状态 
    toggleDrop: () => { },                 // 修改 recap 下拉选项的状态
})

export function RecapAsideManageContext({ children }) {
    const [dropList, setDropList] = useState(false);
    const [selectCategory, setSelectCategory] = useState(RECAP_NAV[0].key);  // 把第一个选项视作默认

    function handleChangeCategory(curCategory) {
        setSelectCategory(curCategory);
    }

    const timer = useRef(null);

    function open() {
        clearTimeout(timer.current);
        setDropList(true);
    }

    function close() {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setDropList(false), 120);
    }

    function setDrop() {
        setDropList(prev => !prev)
    }

    const ctx = useMemo(() => ({
        activeKey: selectCategory,
        setActiveKey: handleChangeCategory,
        dropState: dropList,
        openDrop: open,
        closeDrop: close,
        toggleDrop: setDrop,
    }), [selectCategory, dropList, open, close])

    return <recapAsideContext.Provider value={ctx}>{children}</recapAsideContext.Provider>
}