import { Router } from 'express';
import {
  getAllCards,
  getAllCardsByType,
  getAllCardsFromPackType,
  buySingleRandomCard,
  freeSingleRandomCard,
  getAllCardInstances,
  getCardById,
  searchForCardsByName
} from '../controllers/cards.js';

const router = Router();

router.get('/all-cards', getAllCards);
router.get('/all-card-instances', getAllCardInstances);
router.get('/pack/:packType', getAllCardsFromPackType);
router.get('/card/get-by-id/:cardInstanceId', getCardById);
router.get('/card/search-cards-by-name/:cardName', searchForCardsByName);
router.get('/type/:cardType', getAllCardsByType);
router.post('/free-single-card', freeSingleRandomCard);
router.post('/buy-single-card', buySingleRandomCard);

export default router;
