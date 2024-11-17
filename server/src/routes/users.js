import { Router } from 'express';
import {
  getAllUsersHandler,
  registerNewUserHandler,
  getUserByIdHandler,
  getUserByEmailHandler,
  deleteUserHandler,
  getAllCardsHandlerForUserHandler,
  openPacketHandler,
  getUserByUsernameHandler,
  collectDailyRewardHandler,
  getAllUserCardInstanceHandler,
  getAllUserPackersHandler,
  collectStarterPacksHandler,
  findUserForBattleHandler,
  getLoginUserDataHandler,
  getAllUserBoxPackHandler,
  openBoxPackHandler,
} from '../controllers/users.js';
import {
  validateAuthentication,
  validateAdminRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/get-all-users', getAllUsersHandler);
router.post('/register', registerNewUserHandler);
router.patch('/user/packs/open-pack', openPacketHandler);
router.patch('/user/boxes/open-box', openBoxPackHandler);
router.patch(
  '/user/rewards/daily-reward/collect/:userId',
  collectDailyRewardHandler
);
router.patch('/starter-packs/collect/:userId', collectStarterPacksHandler);
router.get('/get-user-by-id/:userId', getUserByIdHandler);
router.get('/login/get-user-by-id/:userId', getLoginUserDataHandler); // TODO: remove this
router.get('/user/userId/:userId/all-cards', getAllCardsHandlerForUserHandler);
router.get('/user/packs/:userId/all-packs', getAllUserPackersHandler);
router.get('/user/boxes/:userId/all-boxes', getAllUserBoxPackHandler);
router.get(
  '/cards/cardInstances/get-all-card-instances/:userId',
  getAllUserCardInstanceHandler
);
router.get('/user/email/:email', getUserByEmailHandler);
router.get('/user/username/:username', getUserByUsernameHandler);
router.get('/user-search/battle-search/:username', findUserForBattleHandler);
router.delete('/delete/:userId', deleteUserHandler);

export default router;
