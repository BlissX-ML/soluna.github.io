import { configureStore } from "@reduxjs/toolkit";

import repositoryReducer from "./dropdownSidebar.js";
import plansReducer from "./plans.js";

export const store = configureStore({
    reducer: {
        repository: repositoryReducer, // 控制 repository 页的下拉列表
        plans: plansReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
