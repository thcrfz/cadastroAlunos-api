import { Router } from 'express';
import userController from '../controllers/User';
import logiRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', userController.index);
// router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/:id', logiRequired, userController.update);
router.delete('/:id', logiRequired, userController.delete);

export default router;
