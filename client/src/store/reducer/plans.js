import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    future: { activeKey: null, isActive: false },
    done: { activeKey: null, isActive: false, awards: [] },
}

// state：当前这片 slice 的状态
// action：触发时传过来的对象，里面最常用的是 action.payload（ payload 就是 dispatch 时传的参数 ）

const plansSlice = createSlice({
    name: 'plans',

    initialState,

    reducers: {
        handleActiveItem(state, action) {
            const { slot, key } = action.payload;    // 说明调用的时候输入两个参数

            // 更新当前选中的未来项目
            state[slot].activeKey = key;
            state[slot].isActive = true;
        },

        handleAwards(state, action) {
            state.done.awards = action.payload?.srcs || [];   // 输入参数是 item
        },

        resetContent(state, action) {
            const slot = action.payload;

            state[slot] = slot === 'done' ?
                { activeKey: null, isActive: false, awards: [] } :
                { activeKey: null, isActive: false }
        },
    }
})

export const { handleActiveItem, handleAwards, resetContent } = plansSlice.actions;
export default plansSlice.reducer;    // 用于 store 里注册用的函数



/*
由于 Redux 项目中不支持 React 组件（函数）
因此只在 Redux 里存「可序列化数据」（key/id），UI 再把 key→组件
*/