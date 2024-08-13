import { Router } from 'express';
import {
  createOpenTradeHandler,
  deleteOpenTradeHandler,
  getAllUserTradesHandler, getAllTradesHandler
} from '../controllers/trade.js';

const router = Router();

router.post('/create-new-open-trade', createOpenTradeHandler);
router.get('/get-all-open-trades', getAllTradesHandler);
router.get('/user-trades/:userId', getAllUserTradesHandler);
router.delete('/delete-trade/:tradeId', deleteOpenTradeHandler);

export default router;
