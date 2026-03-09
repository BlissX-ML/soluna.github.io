import { create } from 'zustand';

export const useDashboardPlanStates = create(set => ({
    isOpen: false, // 下拉列表选项栏是否打开
    hasOption: 'all', // 当前选中要显示的项目

    setInitialOption: key => {
        // 选中当前项目的 key，并在选中后默认关闭选项界面
        set(state => ({ ...state, hasOption: key }));
    },

    toogleOpen: () => {
        set(state => ({ ...state, isOpen: !state.isOpen }));
    },

    closeOpen: () => {
        set(state => ({ ...state, isOpen: false }));
    },

    handleSelect: key => {
        // 选中当前项目的 key，并在选中后默认关闭选项界面
        set(state => ({ ...state, hasOption: key, isOpen: false }));
    }
}));
