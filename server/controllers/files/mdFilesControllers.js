import asyncHandler from 'express-async-handler';
import { getOssMdFiles } from '../../utils/oss/oss.md.js';

// @desc    GET repository files
// @route   GET /api/data/md/computer-related
// @oss     /articles/computer-catalogue-repository/
// @access  Public
export const computerController = asyncHandler(async (req, res) => {
    const params = req.query.hash || ''; // 动态路由

    const url = 'articles/computer-catalogue-repository/';
    const urlFile = !params ? url : url + params + '/';
    const info = await getOssMdFiles(urlFile);

    try {
        if (!info) {
            throw new Error('Cannot get anything about Computer.');
        }
        res.status(200).json(info);
    } catch (error) {
        res.status(401);
        throw new Error('Cannot get the whole lists with controller logics');
    }
});

// @desc    GET memo files
// @route   GET /api/data/md/eightpart
// @oss     /articles/eightpart-essay-catalogue-repository/
// @access  Public
export const eightpartController = asyncHandler(async (req, res) => {
    const params = req.query.hash || ''; // 动态路由

    const url = 'articles/eightpart-essay-catalogue-repository/';

    const urlFile = !params ? url : url + params + '/';
    const info = await getOssMdFiles(urlFile);

    try {
        if (!info) {
            throw new Error('Cannot get anything about Eight-parts.');
        }
        res.status(200).json(info);
    } catch (error) {
        res.status(401);
        console.error(error.message);
        throw new Error('Cannot get the whole lists with controller logics');
    }
});

// @desc    Get dashboard certificates files
// @route   GET /api/data/dashboard/certificates
// @access  Public
export const certificatesController = asyncHandler(async (req, res) => {
    res.send('dashboard certificates files');
});

// @desc    Get dashboard expense-status files
// @route   GET /api/data/dashboard/expense-status
// @access  Public
export const expenseStatusController = asyncHandler(async (req, res) => {
    res.send('dashboard expense-status files');
});
