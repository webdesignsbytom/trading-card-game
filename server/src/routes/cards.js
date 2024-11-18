import { Router } from 'express';
import {
  getAllCardsHandler,
  getAllCardsByTypeHandler,
  GetAllCardByPackHandler,
  buySingleRandomCardHandler,
  freeSingleRandomCardHandler,
  getAllCardInstancesHandler,
  getCardInstanceByIdHandler,
  getCardByIdHandler,
  createNewMemberCards,
  searchForCardsByNameHandler,
  updateCardDateByIdHandler,
  createNewCardsHandler,
} from '../controllers/cards.js';
import { validateAuthentication, validateDeveloperRole } from '../middleware/auth.js';

const router = Router();

router.get('/get-all-cards', getAllCardsHandler);
router.get('/all-card-instances', getAllCardInstancesHandler);
router.get('/pack/:packType', GetAllCardByPackHandler);
router.get('/card/get-by-id/:cardId', getCardByIdHandler);
router.get('/card/cardInstance/get-by-id/:cardInstanceId', getCardInstanceByIdHandler);
router.post('/card/search-cards-by-name', searchForCardsByNameHandler);
router.post('/card/admin/create-new-cards/:adminId', validateAuthentication, validateDeveloperRole, createNewCardsHandler);
router.get('/type/:cardType', getAllCardsByTypeHandler);
router.post('/free-single-card', freeSingleRandomCardHandler);
router.post('/buy-single-card', buySingleRandomCardHandler);
router.patch('/update-card/:cardId', updateCardDateByIdHandler);

export default router;
