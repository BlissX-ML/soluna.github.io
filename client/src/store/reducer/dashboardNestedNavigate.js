import { createSlice } from '@reduxjs/toolkit'; // 切片，之后 合并切片可以共同管理状态

const initialState = {
    // 选中的二级导航栏
    curSecNavItem: null,

    // 当前选中的二级导航栏的索引
    curSecNavInd: 0
};

const dashboardNestedNavigateSlice = createSlice({
    name: 'dashboardNestedNavigate',
    initialState,
    reducers: {
        // 更新选中的二级导航栏
        setCurSecNavItem(state, action) {
            state.curSecNavItem = action.payload;
        },

        // 更新索引
        setCurSecNavInd(state, action) {
            state.curSecNavInd = action.payload;
        }
    }
});

export const { setCurSecNavItem, setCurSecNavInd } =
    dashboardNestedNavigateSlice.actions;
export default dashboardNestedNavigateSlice.reducer; // 用于 store 里注册用的函数
