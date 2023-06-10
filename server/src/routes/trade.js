import { Router } from 'express';
import {
  createTradeCardWithUser,
  deleteOpenTrade,
  getAllUserTrades, getAllTrades
} from '../controllers/trade.js';

const router = Router();

router.post('/create-trade', createTradeCardWithUser);
router.get('/all-trades', getAllTrades);
router.get('/user-trades/:userId', getAllUserTrades);
router.delete('/delete-trade/:tradeId', deleteOpenTrade);

export default router;
