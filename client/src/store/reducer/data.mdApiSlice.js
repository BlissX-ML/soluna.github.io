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
    })
});

export const { useGetComputerFilesQuery } = mdFileApiSlice;
