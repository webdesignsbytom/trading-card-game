import { Router } from 'express';
import {
  getAllBattlesHandler,
  getBattleByIdHandler,
  deleteBattleHandler,
  createBattleHandler,
  getAllUserBattlesHandler,
  opponentConfirmBattle,
  createBattleRequestHandler,
  getAllUserBattleRequestsHandler,
  acceptBattleRequestHandler,
  deleteBattleRequestHandler,
} from '../controllers/battles.js';
import {
  validateAuthentication,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/all-battles', getAllBattlesHandler);
router.get('/battle/:battleId', getBattleByIdHandler);
router.get('/battle/user-battles/:userId', getAllUserBattlesHandler);
router.post('/battle/create-battle', createBattleHandler);
router.post('/battle/create-battle-request', createBattleRequestHandler);
router.get('/battle/get-all-user-battle-requests/:userId', getAllUserBattleRequestsHandler);
router.patch('/battle-requests/accept/:requestId', acceptBattleRequestHandler);
router.delete('/battle-requests/delete/:requestId', deleteBattleRequestHandler);
router.delete('/delete-battle-by-id/:battleId', deleteBattleHandler);

export default router;
