import { Router } from 'express';
import { mdFilesController } from '../controllers/files/mdFilesControllers.js';
import { noCacheHandler } from '../middleware/noCacheMiddleware.js';

const router = Router();

// router.use('/', noCacheHandler);

// ✨ 使用 req.params 来获取动态路由参数
// - 对于 /:routeId，req.params = { routeId: 'xxx' }
// - 对于 /:routeId/:secondRouteId，req.params = { routeId: 'xxx', secondRouteId: 'yyy' }
router.get('/:routeId', mdFilesController);
router.get('/:routeId/:secondRouteId', mdFilesController);

// router.get('/eightpart', eightpartController);
// router.get('/computer-related', computerController);

export default router;
