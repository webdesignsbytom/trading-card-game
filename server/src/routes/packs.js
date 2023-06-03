import { Router } from 'express';
import {
  createNewpack,
  createPacksAndAddToUser,
  getPackById
} from '../controllers/packs.js';

const router = Router();

router.get('/get-pack-by-id/:id', getPackById);
router.post('/create-new-pack', createNewpack);
router.post('/create-packs-for-user', createPacksAndAddToUser);

export default router;
