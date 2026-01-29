import { create } from 'zustand';

export const useCarouselStates = create(set => ({
    slideItems: [], // 滑动的图片列表
    curImageInd: 1, // 当前滑动的图片的索引
    withTrans: true, // 是否添加动态效果

    // moveImage: set(state => ({
    //     transform: `translateX(-${state.curImageInd * 100}%)`,
    //     transition: state.withTrans ? 'transform 300ms ease' : 'none'
    // })),

    setCurImageInd: ind => {
        set(state => ({ ...state, curImageInd: ind }));
    },

    setWithTrans: bool => {
        set(state => ({ ...state, withTrans: bool }));
    },

    // 修改滑动的图片列表,通过点击了二级标题，更换数据
    handleCarouselItem: key => {
        const elements = key?.details;

        // 首尾克隆，防止轮播图不丝滑
        if (elements.length > 0 && Array.isArray(elements)) {
            if (elements.length === 1) {
                set(state => ({
                    ...state,
                    slideItems: elements,
                    curImageInd: 0
                }));
                return;
            }

            set(state => ({
                ...state,
                slideItems: [
                    elements[elements.length - 1],
                    ...elements,
                    elements[0]
                ]
            }));
        }
    },

    handlePrevImage: () => {
        set(state => {
            const len = state.slideItems.length;
            if (len === 0) return;

            return {
                ...state,
                curImageInd: (state.curImageInd - 1 + len) % len
            };
        });
    },

    handleNextImage: () => {
        set(state => {
            const len = state.slideItems.length;
            if (len === 0) return;

            return {
                ...state,
                curImageInd: (state.curImageInd + 1) % len
            };
        });
    }
}));
