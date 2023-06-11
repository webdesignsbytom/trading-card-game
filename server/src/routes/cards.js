import { Router } from 'express';
import {
  getAllCards,
  getAllCardsByType,
  getAllCardsFromPackType,
  buySingleRandomCard,
  freeSingleRandomCard,
  getAllCardInstances,
  getCardInstanceById,
  getCardById,
  searchForCardsByName
} from '../controllers/cards.js';

const router = Router();

router.get('/all-cards', getAllCards);
router.get('/all-card-instances', getAllCardInstances);
router.get('/pack/:packType', getAllCardsFromPackType);
router.get('/card/get-by-id/:cardId', getCardById);
router.get('/card/cardInstance/get-by-id/:cardInstanceId', getCardInstanceById);
router.post('/card/search-cards-by-name', searchForCardsByName);
router.get('/type/:cardType', getAllCardsByType);
router.post('/free-single-card', freeSingleRandomCard);
router.post('/buy-single-card', buySingleRandomCard);

export default router;
