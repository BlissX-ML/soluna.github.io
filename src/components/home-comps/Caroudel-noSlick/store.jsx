import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { homeImagesReducer } from "./homeImages.jsx";

const reducer = combineReducers({
    homeImages: homeImagesReducer,
})

const store = configureStore({ reducer: reducer });

export default store;