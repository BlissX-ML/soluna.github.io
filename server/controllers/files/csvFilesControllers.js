import asyncHandler from 'express-async-handler';

// @desc    Get dashboard certificates files
// @route   POST /api/data/csv/dashboard/certificates
// @access  Public
export const certificatesController = asyncHandler(async (req, res) => {
    res.send('dashboard certificates files');
});

// @desc    Get dashboard expense-status files
// @route   POST /api/data/csv/dashboard/expense-status
// @access  Public
export const expenseStatusController = asyncHandler(async (req, res) => {
    res.send('dashboard expense-status files');
});
