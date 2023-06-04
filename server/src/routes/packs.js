import { Router } from 'express';
import {
  createNewpack,
  createPacksAndAddToUser,
  createStarterPacksForUser,
  getPackById
} from '../controllers/packs.js';

const router = Router();

router.get('/get-pack-by-id/:id', getPackById);
router.post('/create-new-pack', createNewpack);
router.post('/create-packs-for-user', createPacksAndAddToUser);
router.post('/create-starter-packs-for-user', createStarterPacksForUser);

export default router;
