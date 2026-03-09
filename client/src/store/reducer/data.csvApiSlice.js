import { csvApiSlice } from './apiSlice.js';

const DATA_URL = '/data/csv';

const csvFileApiSlice = csvApiSlice.injectEndpoints({
    endpoints: builder => ({
        getDashboardExpenseFiles: builder.query({
            query: () => ({
                url: `${DATA_URL}`
            })
        })
    })
});

export const { useGetDashboardExpenseFilesQuery } = csvFileApiSlice;
