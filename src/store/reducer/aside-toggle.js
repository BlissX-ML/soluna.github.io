import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: true,     // 侧边连控制开没开
}

const asideSlice = createSlice({
    name: 'aside',

    initialState,

    reducers: {
        toggleAside(state) {
            state.isOpen = !state.isOpen
        },

        resetOpen(state) {
            state.isOpen = true;
        }
    }
})

export const { toggleAside, resetOpen } = asideSlice.actions;
export default asideSlice.reducer;    // 用于 store 里注册用的函数