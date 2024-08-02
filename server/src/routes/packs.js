import { Router } from 'express';
import {
  createNewpack,
  createPacksAndAddToUser,
  deletePackById,
  getAllPacks,
  getPackById,
  openPackAndAddToUser,
  buyPackAndAddToUser
} from '../controllers/packs.js';

const router = Router();

router.get('/get-all-packs', getAllPacks);
router.get('/get-pack-by-id/:packId', getPackById);
router.delete('/delete-pack-by-id/:packId', deletePackById);
router.post('/create-new-pack', createNewpack);
router.post('/create-packs-for-user', createPacksAndAddToUser);
router.post('/buy-pack-for-user', buyPackAndAddToUser);
router.post('/open-pack', openPackAndAddToUser);

export default router;
