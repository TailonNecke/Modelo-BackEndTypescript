import { Router } from 'express';
import UserController from './app/controllers/UserController'

const router = Router();

router.post('/auth', UserController.store);    

export default router;
