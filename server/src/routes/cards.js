import { Router } from 'express';
import {
  getAllCards,
  getAllCardsByType,
  getAllCardsFromPackType,
  buySingleRandomCard,
  freeSingleRandomCard,
  getAllCardInstances
} from '../controllers/cards.js';

const router = Router();

router.get('/all-cards', getAllCards);
router.get('/all-card-instances', getAllCardInstances);
router.get('/pack/:packType', getAllCardsFromPackType);
router.get('/type/:cardType', getAllCardsByType);
router.post('/free-single-card', freeSingleRandomCard);
router.post('/buy-single-card', buySingleRandomCard);

export default router;
