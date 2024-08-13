import { Router } from 'express';
import { loginHandler } from '../controllers/auth.js';

const router = Router();

router.post('/login', loginHandler);

export default router;
