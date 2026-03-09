import { create } from 'zustand';

export const useDashboardNestedNavigateStates = create(set => ({
    curSecNavItem: 'personal-plan', // 选中的二级导航栏
    curSecNavInd: 0, // 当前选中的二级导航栏的索引

    setCurSecNavItem: key => {
        set(state => ({ ...state, curSecNavItem: key }));
    },

    setCurSecNavInd: ind => {
        set(state => ({ ...state, curSecNavInd: ind }));
    }
}));
