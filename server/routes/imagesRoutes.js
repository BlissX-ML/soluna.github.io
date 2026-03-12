import { Router } from 'express';
import {
    imagesCertsChartController,
    imagesCertsController
} from '../controllers/images/imagesControllers.js';
import { noCacheHandler } from '../middleware/noCacheMiddleware.js';

const router = Router();

router.get('/certs-chart', imagesCertsChartController);
router.get('/dash-certs', imagesCertsController);

export default router;
