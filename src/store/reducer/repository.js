import { createSlice } from "@reduxjs/toolkit";
import { RECAP_NAV } from "../../data/repository-page/repository";

const initialState = {
    active: false,                          // 下拉列表选项的点击状态
    curItem: RECAP_NAV?.[0]?.key ?? '',    // 当前被选中的选项（默认情况下是列表的第一个）
}

// state：当前这片 slice 的状态
// action：触发时传过来的对象，里面最常用的是 action.payload（ payload 就是 dispatch 时传的参数 ）

const repositorySlice = createSlice({
    name: 'repository',
    initialState,
    reducers: {
        setCurItem(state, action) {
            state.curItem = action.payload;
        },

        open(state) {
            state.active = true;
        },

        close(state) {
            state.active = false;
        },

        toggle(state) {
            state.active = !state.active;
        },
    }
})

export const { setCurItem, open, close, toggle } = repositorySlice.actions;
export default repositorySlice.reducer;    // 用于 store 里注册用的函数