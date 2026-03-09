import { Router } from 'express';
import {
    eightpartController,
    computerController
} from '../controllers/files/mdFilesControllers.js';
import { noCacheHandler } from '../middleware/noCacheMiddleware.js';

const router = Router();

router.use('/', noCacheHandler);
router.get('/eightpart', eightpartController);
router.get('/computer-related', computerController);

export default router;
