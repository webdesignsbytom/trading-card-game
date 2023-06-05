import { Router } from 'express';
import {
  getAllCards,
  getAllCardsByType,
  getAllCardsFromPackType,
  buySingleRandomCard
} from '../controllers/cards.js';

const router = Router();

router.get('/all-cards', getAllCards);
router.get('/pack/:packType', getAllCardsFromPackType);
router.get('/type/:cardType', getAllCardsByType);
router.post('/buy-single-card', buySingleRandomCard);

export default router;
