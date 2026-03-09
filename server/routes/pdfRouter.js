import { Router } from 'express';
import { resumeController } from '../controllers/files/pdfFilesControllers.js';

const router = Router();

router.get('/resume', resumeController);

export default router;
