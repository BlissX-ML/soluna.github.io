import { Router } from 'express';
import { pdfController } from '../controllers/files/pdfFilesControllers.js';

const router = Router();

router.get('/resume', pdfController);

export default router;
