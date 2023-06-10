import { Router } from 'express';
import {
  getAllDecks,
  getDeckById,
  createDeck,
  deleteDeck,
  getAllDecksByUserId,
  updateAndAddCardsToDeck
} from '../controllers/decks.js';
import {
  validateAuthentication,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/all-decks', getAllDecks);
router.get('/deck/:deckId', getDeckById);
router.patch('/deck/update-deck', updateAndAddCardsToDeck);
router.get('/deck/user-decks/:userId', getAllDecksByUserId);
router.post('/deck/create-deck', createDeck);
router.delete('/delete-deck-by-id/:deckId', deleteDeck);

export default router;
