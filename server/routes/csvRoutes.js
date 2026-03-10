import { Router } from 'express';
import {
    certificatesController,
    expenseStatusController
} from '../controllers/files/csvFilesControllers.js';

const router = Router();

router.get('/dashboard/certificates', certificatesController);
router.get('/dashboard/expense-status', expenseStatusController);

export default router;
