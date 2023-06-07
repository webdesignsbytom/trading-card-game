import { Router } from 'express';
import {
  createTradeCardWithUser,
  deleteOpenTrade
} from '../controllers/trade.js';

const router = Router();

router.post('/create-trade', createTradeCardWithUser);
router.delete('/delete-trade/:tradeId', deleteOpenTrade);

export default router;
