import { Router } from 'express';
import {
  createTradeCardWithUser
} from '../controllers/trade.js';

const router = Router();

router.post('/trade-card', createTradeCardWithUser);

export default router;
