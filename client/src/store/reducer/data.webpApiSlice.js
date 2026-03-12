import { webpApiSlice } from './apiSlice.js';

const DATA_URL = '/data/images';

const webpImagesApiSlice = webpApiSlice.injectEndpoints({
    endpoints: builder => ({
        getCertificateChartData: builder.query({
            query: () => ({
                url: `${DATA_URL}/certs-chart`
            })
        })
    })
});

export const { useGetCertificateChartDataQuery } = webpImagesApiSlice;
