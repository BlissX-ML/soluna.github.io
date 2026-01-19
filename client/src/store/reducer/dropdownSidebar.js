import { createSlice } from "@reduxjs/toolkit"; // 切片，之后 合并切片可以共同管理状态
import { Repository_Navigate } from "../../_data/repository-page/repository";

const initialState = {
    // 用这个控制侧边栏要不要打开，默认是打开的
    asidebarActive: true,

    // 默认不开启侧边栏的二级标题
    secondaryItemsState: false,

    // 当前被选中的选项（默认情况下是列表的第一个）
    curItem: null,

    // 当前选中大类下的小分类的内容
    content: "",
};

// state：当前这片 slice 的状态
// action：触发时传过来的对象，里面最常用的是 action.payload（ payload 就是 dispatch 时传的参数 ）

const dropdownSidebarSlice = createSlice({
    name: "repository",
    initialState,
    reducers: {
        // 更新侧边栏的开放状态
        setAsidebarActive(state) {
            state.asidebarActive = !state.asidebarActive;
        },

        // 由于使用同一个reducer控制下拉列表和侧边栏，在页面跳转的时候，更新侧边栏的状态
        setAsidebarActiveOpen(state) {
            state.asidebarActive = true;
        },

        // 更新当前选中的下拉列表的 item
        setCurItem(state, action) {
            state.curItem = action.payload;
        },

        // 更新当前选中的 item 的二级标题 (HTML, CSS等等)
        updateItemContent(state, action) {
            // 取消原有固定的数据，使用`{}`占位
            state.content = {}?.[action.payload]?.detail_content;
        },

        // 更新侧边栏二级标题的显示状态，实现 dropdown-list 与 sidebar-nav 之间的联动
        toggleOpenSecondaryItems(state) {
            state.secondaryItemsState = !state.secondaryItemsState;
        },

        openSecondaryItems(state) {
            state.secondaryItemsState = true;
        },
    },
});

export const {
    setAsidebarActive,
    setAsidebarActiveOpen,
    setCurItem,
    updateItemContent,
    toggleOpenSecondaryItems,
    openSecondaryItems,
} = dropdownSidebarSlice.actions;
export default dropdownSidebarSlice.reducer; // 用于 store 里注册用的函数
