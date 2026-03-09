import asyncHandler from 'express-async-handler';
import { getOssPdfFiles } from '../../utils/oss/oss.pdf.js';

export const resumeController = asyncHandler(async (req, res) => {
    const url = 'resume/';
    const resumeFile = await getOssPdfFiles(url);
    res.status(200).json(resumeFile);
});
