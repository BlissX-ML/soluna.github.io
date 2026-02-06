import { createSlice } from '@reduxjs/toolkit'; // 切片，之后 合并切片可以共同管理状态

const initialState = {
    sidebarActive: true, // 用这个控制侧边栏要不要打开，默认是打开的
    secondaryItemsState: false, // 默认不开启侧边栏的二级标题

    curFirstItem: null // 当前被选中的选项（一级标题）
};

// state：当前这片 slice 的状态
// action：触发时传过来的对象，里面最常用的是 action.payload（ payload 就是 dispatch 时传的参数 ）

const dropdownSidebarSlice = createSlice({
    name: 'repository',
    initialState,
    reducers: {
        // 更新侧边栏的开放状态
        setSidebarActive(state) {
            state.sidebarActive = !state.sidebarActive;
        },

        // 由于使用同一个reducer控制下拉列表和侧边栏，在页面跳转的时候，更新侧边栏的状态
        setSidebarActiveOpen(state) {
            state.sidebarActive = true;
        },

        // 更新当前选中的下拉列表的 item
        setCurItem(state, action) {
            state.curFirstItem = action.payload;
        },

        // 更新侧边栏二级标题的显示状态，实现 dropdown-list 与 sidebar-nav 之间的联动
        toggleOpenSecondaryItems(state) {
            state.secondaryItemsState = !state.secondaryItemsState;
        },

        openSecondaryItems(state) {
            state.secondaryItemsState = true;
        }
    }
});

export const {
    setSidebarActive,
    setSidebarActiveOpen,
    setCurItem,
    toggleOpenSecondaryItems,
    openSecondaryItems
} = dropdownSidebarSlice.actions;
export default dropdownSidebarSlice.reducer; // 用于 store 里注册用的函数
