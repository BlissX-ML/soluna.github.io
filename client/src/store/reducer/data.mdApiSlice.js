import { mdApiSlice } from './apiSlice.js';

const DATA_URL = '/data/md';

const mdFileApiSlice = mdApiSlice.injectEndpoints({
    endpoints: builder => ({
        getComputerFiles: builder.query({
            // ✨ 规定只能传递一个参数
            query: ({ routeId, secondRouteId }) => {
                return {
                    url: `${DATA_URL}/${routeId}/${secondRouteId || ''}`
                };
            }
        })

        // getEightPartFiles: builder.query({
        //     query: hash => ({
        //         url: `${DATA_URL}/eightpart`,
        //         params: { hash }
        //     })
        // }),

        // getChemistryFiles: builder.query({
        //     query: hash => ({
        //         url: `${DATA_URL}/chemistry-related`,
        //         params: { hash }
        //     })
        // }),

        // getLanguageFiles: builder.query({
        //     query: hash => ({
        //         url: `${DATA_URL}/language-related`,
        //         params: { hash }
        //     })
        // })
    })
});

export const { useGetComputerFilesQuery } = mdFileApiSlice;
