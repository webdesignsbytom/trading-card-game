import { Router } from 'express';
import {
  getAllDecksHandler,
  getDeckByIdHandler,
  createDeckHandler,
  deleteDeckHandler,
  getAllUserDecksHandler,
  addCardsToDeckHandler,
  getAllDisplayCardsFromDeckHandler
} from '../controllers/decks.js';
import {
  validateAuthentication,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/all-decks', getAllDecksHandler);
router.get('/deck/:deckId', getDeckByIdHandler);
router.get('/deck/:deckId/all-cards', getAllDisplayCardsFromDeckHandler);
router.patch('/deck/update-deck', addCardsToDeckHandler);
router.get('/deck/user-decks/:userId', getAllUserDecksHandler);
router.post('/deck/create-deck', createDeckHandler);
router.delete('/delete-deck-by-id/:deckId', deleteDeckHandler);

export default router;
