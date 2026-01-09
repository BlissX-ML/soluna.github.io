import { createSlice } from "@reduxjs/toolkit"; // 切片，之后 合并切片可以共同管理状态
import { Repository_Navigate } from "../../_data/repository-page/repository";

const initialItem = Repository_Navigate?.[0]?.key ?? ""; // 默认选中的项目

const initialState = {
    // 下拉列表选项的点击状态（📢 直接通过 :hover 控制显示状态）
    // active: false,
    initialItem: initialItem,

    // 默认不开启侧边栏的二级标题
    secondaryItemsState: false,

    // 当前被选中的选项（默认情况下是列表的第一个）
    curItem: initialItem,

    // 当前选中大类下的小分类的内容
    content: "",
};

// state：当前这片 slice 的状态
// action：触发时传过来的对象，里面最常用的是 action.payload（ payload 就是 dispatch 时传的参数 ）

const repositorySlice = createSlice({
    name: "repository",
    initialState,
    reducers: {
        // 更新当前选中的下拉列表的 item
        setCurItem(state, action) {
            state.curItem = action.payload;
        },

        // 更新当前选中的 item 的二级标题 (HTML, CSS等等)
        updateItemContent(state, action) {
            state.content =
                Repository_Navigate?.[action.payload]?.detail_content;
        },

        // 更新侧边栏二级标题的显示状态，实现 dropdown-list 与 sidebar-nav 之间的联动
        toggleOpenSecondaryItems(state) {
            state.secondaryItemsState = !state.secondaryItemsState;
        },

        openSecondaryItems(state) {
            state.secondaryItemsState = true;
        },

        // 更新下拉列表的显示为 true
        // open(state) { state.active = true; },
        // close(state) { state.active = false;},
        // toggle(state) {state.active = !state.active;},
    },
});

export const {
    setCurItem,
    updateItemContent,
    toggleOpenSecondaryItems,
    openSecondaryItems,
} = repositorySlice.actions;
export default repositorySlice.reducer; // 用于 store 里注册用的函数
