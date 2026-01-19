import { createContext, useMemo, useState } from "react";
import { RESOURCES_SHARE } from "../../_data/resources-page/resources";

export const ResourcesContext = createContext(null);

export default function ResourcesSearchContext({ children }) {
    const [inputItem, setInputItem] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    function updateInputItem(e) {
        setInputItem(e.target.value);
    }

    function handleSelectCategory(category) {
        setSelectedCategory(category);
    }

    const filteredResources = useMemo(() => {
        // "任意字符串".includes(""): 永远返回 true
        return RESOURCES_SHARE.filter((resource) => {
            const matchedInputItem =
                resource?.title
                    .toLowerCase()
                    .includes(inputItem.toLowerCase()) ||
                resource?.description
                    .toLowerCase()
                    .includes(inputItem.toLowerCase()) ||
                resource?.tags.some((tag) =>
                    tag.toLowerCase().includes(inputItem.toLowerCase()),
                );

            const matchedCategory =
                selectedCategory === "all" ||
                resource.category === selectedCategory;

            return matchedInputItem && matchedCategory;
        });
    }, [inputItem, selectedCategory]);

    const ctx = useMemo(
        () => ({
            inputItem,
            selectedCategory,
            updateInputItem,
            handleSelectCategory,
            filteredResources,
        }),
        [inputItem, selectedCategory],
    );

    return (
        <ResourcesContext.Provider value={ctx}>
            {children}
        </ResourcesContext.Provider>
    );
}
