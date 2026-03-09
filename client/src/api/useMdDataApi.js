import {
    useGetChemistryFilesQuery,
    useGetComputerFilesQuery,
    useGetEightPartFilesQuery,
    useGetLanguageFilesQuery
} from '../store/reducer/data.mdApiSlice.js';

// skip 内对应的字符串是 repository.js 内的 key
export function useMdDataApi(routeId, hash) {
    const { data: computerData, isLoading: computerLoading } =
        useGetComputerFilesQuery(hash, {
            skip: routeId.toLowerCase() !== 'computer-related'
        });

    const { data: eightPartData, isLoading: eightPartLoading } =
        useGetEightPartFilesQuery(hash, {
            skip: routeId.toLowerCase() !== 'eight-part-essay'
        });

    const { data: chemistryData, isLoading: chemistryLoading } =
        useGetChemistryFilesQuery(hash, {
            skip: routeId.toLowerCase() !== 'chemistry-related'
        });

    const { data: languageData, isLoading: languageLoading } =
        useGetLanguageFilesQuery(hash, {
            skip: routeId.toLowerCase() !== 'language-related'
        });

    const d = {
        'computer-related': { data: computerData, isLoad: computerLoading },
        'eight-part-essay': { data: eightPartData, isLoad: eightPartLoading },
        'chemistry-related': { data: chemistryData, isLoad: chemistryLoading },
        'language-related': { data: languageData, isLoad: languageLoading }
    };

    return d[routeId.toLowerCase()];
}
