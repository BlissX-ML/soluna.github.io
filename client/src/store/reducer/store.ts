import { configureStore } from '@reduxjs/toolkit';
import { mdApiSlice, pdfApiSlice } from './apiSlice.js';
import dropdownSidebarReducer from './dropdownSidebar.js';

export const store = configureStore({
    reducer: {
        dropdownSidebar: dropdownSidebarReducer, // 控制 repository 页的下拉列表
        [mdApiSlice.reducerPath]: mdApiSlice.reducer,
        [pdfApiSlice.reducerPath]: pdfApiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(mdApiSlice.middleware)
            .concat(pdfApiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
