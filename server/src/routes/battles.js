import { Router } from 'express';
import {
  getAllBattles,
  getBattleById,
  deleteBattle,
  createBattle,
  getAllBattlesByUserId,
  opponentConfirmBattle,
  createBattleRequest,
  getAllUserBattleRequests,
  acceptBattleRequest,
  deleteBattleRequest,
} from '../controllers/battles.js';
import {
  validateAuthentication,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/all-battles', getAllBattles);
router.get('/battle/:battleId', getBattleById);
router.get('/battle/user-battles/:userId', getAllBattlesByUserId);
router.post('/battle/create-battle', createBattle);
router.post('/battle/create-battle-request', createBattleRequest);
router.get('/battle/get-all-user-battle-requests/:userId', getAllUserBattleRequests);
router.patch('/battle-requests/accept/:requestId', acceptBattleRequest);
router.delete('/battle-requests/delete/:requestId', deleteBattleRequest);
router.delete('/delete-battle-by-id/:battleId', deleteBattle);

export default router;
