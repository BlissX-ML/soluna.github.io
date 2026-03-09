import { Router } from 'express';
import {
    eightpartController,
    computerController
} from '../controllers/files/mdFilesControllers.js';

const router = Router();

router.get('/eightpart', eightpartController);
router.get('/computer-related', computerController);

export default router;
