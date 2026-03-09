import { mdApiSlice } from './apiSlice.js';

const DATA_URL = '/data/md';

const mdFileApiSlice = mdApiSlice.injectEndpoints({
    endpoints: builder => ({
        getComputerFiles: builder.query({
            query: hash => ({
                url: `${DATA_URL}/computer-related`,
                params: { hash }
            })
        }),

        getEightPartFiles: builder.query({
            query: hash => ({
                url: `${DATA_URL}/eightpart`,
                params: { hash }
            })
        }),

        getChemistryFiles: builder.query({
            query: hash => ({
                url: `${DATA_URL}/chemistry-related`,
                params: { hash }
            })
        }),

        getLanguageFiles: builder.query({
            query: hash => ({
                url: `${DATA_URL}/language-related`,
                params: { hash }
            })
        })
    })
});

export const {
    useGetComputerFilesQuery,
    useGetEightPartFilesQuery,
    useGetChemistryFilesQuery,
    useGetLanguageFilesQuery
} = mdFileApiSlice;
