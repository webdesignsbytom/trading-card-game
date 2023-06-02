import { Router } from 'express';
import {
  buyPacketsOfCards,
  getAllCards,
  getAllCardsByType,
  getAllCardsFromPackType,
} from '../controllers/cards.js';

const router = Router();

router.get('/all-cards', getAllCards);
router.get('/pack/:packType', getAllCardsFromPackType);
router.get('/type/:cardType', getAllCardsByType);
router.post('/buyPacketsOfCards', buyPacketsOfCards);

export default router;
