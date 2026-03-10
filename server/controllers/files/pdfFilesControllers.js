import asyncHandler from 'express-async-handler';
import { getOssPdfFiles } from '../../utils/oss/oss.pdf.js';

// @desc     GET resume file and DOWNLOAD it
// @route   GET /api/data/pdf/resume
// @oss     /resume
// @access   Public
export const pdfController = asyncHandler(async (req, res) => {
    const url = 'resume/';

    try {
        const { fileName, content } = await getOssPdfFiles(url);

        res.setHeader('Content-Type', 'application/pdf');

        // ⚡ 中文 / 空格文件名处理
        const encodedFileName = encodeURIComponent(fileName);
        res.setHeader(
            'Content-Disposition',
            `attachment; filename*=${encodedFileName}`
        );

        res.send(content); // 直接发送二进制
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to download PDF');
    }
});
