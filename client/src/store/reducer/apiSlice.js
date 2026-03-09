import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: '/api' });

// mdApiSlice.js
export const mdApiSlice = createApi({
    reducerPath: 'mdApi', // 必须唯一
    baseQuery,
    tagTypes: ['md-data'],
    endpoints: builder => ({})
});

// csvApiSlice.js
export const csvApiSlice = createApi({
    reducerPath: 'csvApi', // 必须唯一
    baseQuery,
    tagTypes: ['csv-data'],
    endpoints: builder => ({})
});

// pdfApiSlice.js
export const pdfApiSlice = createApi({
    reducerPath: 'pdfApi', // 必须唯一
    baseQuery,
    tagTypes: ['PDF-data'],
    endpoints: builder => ({})
});
