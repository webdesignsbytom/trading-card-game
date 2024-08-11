import { Router } from 'express';
import {
  createOpenTradeHandler,
  deleteOpenTrade,
  getAllUserTrades, getAllTrades
} from '../controllers/trade.js';

const router = Router();

router.post('/create-new-open-trade', createOpenTradeHandler);
router.get('/all-trades', getAllTrades);
router.get('/get-all-open-trades', getAllTrades);
router.get('/user-trades/:userId', getAllUserTrades);
router.get('/user-trades/:userId', getAllUserTrades);
router.delete('/delete-trade/:tradeId', deleteOpenTrade);

export default router;
