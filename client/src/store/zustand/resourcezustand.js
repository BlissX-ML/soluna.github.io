import { create } from 'zustand';
import { RESOURCES_SHARE } from '../../_data/resources-page/resources';

// Resources 页面

export const useResourceStates = create((set, get) => ({
    inputItem: '',
    selectedCategory: 'all',

    setInputItem: e => set({ inputItem: e.target.value }), // 更新 inputItem
    setSelectedCategory: category => set({ selectedCategory: category }), // 更新选择的标签

    setResources: () => {
        const state = get();

        return RESOURCES_SHARE.filter(resource => {
            const matchedInputItem =
                resource?.title
                    .toLowerCase()
                    .includes(state.inputItem.toLowerCase()) ||
                resource?.description
                    .toLowerCase()
                    .includes(state.inputItem.toLowerCase()) ||
                resource?.tags.some(tag =>
                    tag.toLowerCase().includes(state.inputItem.toLowerCase())
                );

            const matchedCategory =
                state.selectedCategory === 'all' ||
                resource.category === state.selectedCategory;

            return matchedInputItem && matchedCategory;
        });
    }
}));
