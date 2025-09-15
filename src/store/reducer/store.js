import { configureStore } from '@reduxjs/toolkit'

import repositoryReducer from './repository.js'


export const store = configureStore({
    reducer: {
        repository: repositoryReducer,    // 控制 repository 页的下拉列表
    },
})