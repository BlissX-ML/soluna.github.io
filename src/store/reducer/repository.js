import { createSlice } from "@reduxjs/toolkit";
import { Repository_Navigate } from "../../data/repository-page/repository";

const initialState = {
    active: false,                                   // 下拉列表选项的点击状态
    curItem: Repository_Navigate?.[0]?.key ?? '',    // 当前被选中的选项（默认情况下是列表的第一个）
    content: '',                                     // 当前选中大类下的小分类的内容
}

// state：当前这片 slice 的状态
// action：触发时传过来的对象，里面最常用的是 action.payload（ payload 就是 dispatch 时传的参数 ）

const repositorySlice = createSlice({
    name: 'repository',
    initialState,
    reducers: {
        // 更新选中的当前 item
        setCurItem(state, action) {
            state.curItem = action.payload;
        },

        // 更新选中的当前 item (如 Computer) 所对应的小分类 (HTML, CSS等等)
        updateItemContent(state, action) {
            state.content = Repository_Navigate?.[action.payload]?.detail_content
        },

        // 更新下拉列表的显示为 true
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

export const { setCurItem, updateItemContent, open, close, toggle } = repositorySlice.actions;
export default repositorySlice.reducer;    // 用于 store 里注册用的函数