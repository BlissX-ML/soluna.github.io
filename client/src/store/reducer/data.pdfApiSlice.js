import { pdfApiSlice } from './apiSlice';

const DATA_URL = '/data/pdf';

const pdfFileApiSlice = pdfApiSlice.injectEndpoints({
    endpoints: builder => ({
        getResumeFiles: builder.query({
            query: () => ({
                url: `${DATA_URL}/resume`
            })
        })
    })
});

export const { useGetResumeFilesQuery } = pdfFileApiSlice;
