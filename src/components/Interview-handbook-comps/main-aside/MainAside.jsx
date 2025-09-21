import { useEffect } from "react";
import AsideNavigate from "../../aside-fixed-navigation/AsideNavigate";

import { useAppDispatch, useAppSelector } from "../../../store/reducer/hooks";
import { resetOpen, toggleAside } from "../../../store/reducer/aside-toggle";

export default function MainAside() {
    const dispatch = useAppDispatch();
    const { isOpen } = useAppSelector(state => state?.asideToggle)

    // 因为是同时控制所有的侧边栏，所以先初始化设置
    useEffect(() => { dispatch(resetOpen()) }, []);

    return (
        <AsideNavigate
            active={isOpen}
            control={() => dispatch(toggleAside())}
            categories={['前端八股文']}
        />
    )
}