import { SCROLL_IMAGES } from "../../../data/homepage/homePage";

const extendedImages = [...SCROLL_IMAGES, SCROLL_IMAGES[0]];

const initialState = {
    images: extendedImages,
    totals: extendedImages.length,   // 添加一个副件的数组长度
    currentImage: 0
}

export function homeImagesReducer(state = initialState, action) {
    if (action.type === 'right') {
        if (state.currentImage === state.totals - 1) {
            return { ...state }
        }
        return { ...state, currentImage: state.currentImage + 1 }

    }

    if (action.type === 'left') {
        if (state.currentImage === 0) {
            return {
                ...state,
                currentImage: state.currentImage - 2
            }
        }
        return {
            ...state,
            currentImage: state.currentImage - 1
        }
    }

    if (action.type === 'jump') {
        return {
            ...state,
            currentImage: 0
        }
    }

    return state;
}

