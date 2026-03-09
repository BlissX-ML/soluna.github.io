import { Router } from 'express';
import {
    certificatesController,
    expenseStatusController
} from '../controllers/files/mdFilesControllers.js';

const router = Router();

router.get('/dashboard/certificates', certificatesController);
router.get('/dashboard/expense-status', expenseStatusController);

export default router;
