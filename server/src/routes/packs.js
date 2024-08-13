import { Router } from 'express';
import {
  createNewpackHandler,
  createPacksAndAddToUserHandler,
  deletePackByIdHandler,
  getAllPacksHandler,
  getPackByIdHandler,
  openPacketHandler,
  buyPacketAddToUserHandler,
  buyBoxPackAddToUserHandler
} from '../controllers/packs.js';

const router = Router();

router.get('/get-all-packs', getAllPacksHandler);
router.get('/get-pack-by-id/:packId', getPackByIdHandler);
router.delete('/delete-pack-by-id/:packId', deletePackByIdHandler);
router.post('/create-new-pack', createNewpackHandler);
router.post('/create-packs-for-user', createPacksAndAddToUserHandler);
router.post('/buy-pack-for-user', buyPacketAddToUserHandler);
router.post('/buy-box-for-user', buyBoxPackAddToUserHandler);
router.post('/open-pack', openPacketHandler);

export default router;
