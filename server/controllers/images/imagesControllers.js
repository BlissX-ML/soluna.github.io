import asyncHandler from 'express-async-handler';
import {
    getOssCertChartStats,
    getOssWebpFiles
} from '../../utils/oss/oss.webp.js';

// @desc     GET images files
// @route    GET /api/data/images/dash-certs?certs=
// @oss      /images/dashboard-certificates/
// certs → learn-typescript = dist → coursera-learn-typescript/
// certs → meta-frontend = dist → coursera-meta-front-end/
// certs → english = dist → language-english/
// certs → japanese = dist → language-japanese/
// @access   Public
export const imagesCertsController = asyncHandler(async (req, res) => {
    const url = 'images/dashboard-certificates/';

    // @ts-ignore
    const certs = (req.query.certs || '').trim().toLowerCase();

    // @ts-ignore
    const size = (req.query.size || '').trim().toLowerCase();

    if (!certs) {
        res.status(400).send('Missing query');
    }

    try {
        let dist = '';

        if (certs === 'learn-typescript') {
            dist = 'coursera-learn-typescript';
        } else if (certs === 'meta-frontend') {
            dist = 'coursera-meta-front-end';
        } else if (certs === 'english') {
            dist = 'language-english';
        } else if (certs === 'japanese') {
            dist = 'language-japanese';
        }

        const certsBuffer = await getOssWebpFiles(url + dist + '/', size);

        // res.send 会自动转换为 json 数据
        res.send(certsBuffer);
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to fetch images.');
    }
});

// @desc     GET images files
// @route    GET /api/data/images/certs-chart
// @oss      /images/dashboard-certificates/
// @access   Public
export const imagesCertsChartController = asyncHandler(async (req, res) => {
    try {
        const certsChartData = await getOssCertChartStats();
        res.send(certsChartData);
    } catch (error) {
        res.status(500);
        console.error(error.message);
        res.send("Failed to get certificate chart's data.");
    }
});
