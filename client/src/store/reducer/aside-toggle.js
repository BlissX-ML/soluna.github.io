import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: true,     // 侧边连控制开没开
}

const asideSlice = createSlice({
    name: 'aside',

    initialState,

    reducers: {
        // 根据提供的参数确定是 true 还是 false
        changeAside(state, action) {
            state.isOpen = action.payload
        },

        resetOpen(state) {
            state.isOpen = true;
        }
    }
})

export const { changeAside, resetOpen } = asideSlice.actions;
export default asideSlice.reducer;    // 用于 store 里注册用的函数