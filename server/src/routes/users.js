import { Router } from 'express';
import {
  getAllUsers,
  registerNewUser,
  getUserById,
  getUserByEmail,
  deleteUser,
  getAllCardsForUser,
  openPackAndAddToUser,
  getUserByUsername,
  collectDailyReward,
  getAllUserCardInstances,
  getAllPacksForUser,
  collectStarterPacks,
  findUserForBattle,
  getLoginUserData,
} from '../controllers/users.js';
import {
  validateAuthentication,
  validateAdminRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/get-all-users', getAllUsers);
router.post('/register', registerNewUser);
router.patch('/user/packs/open-pack', openPackAndAddToUser);
router.patch('/user/rewards/daily-reward/collect/:userId', collectDailyReward);
router.patch('/starter-packs/collect/:userId', collectStarterPacks);
router.get('/get-user-by-id/:userId', getUserById);
router.get('/login/get-user-by-id/:userId', getLoginUserData);
router.get('/user/userId/:userId/all-cards', getAllCardsForUser);
router.get('/user/packs/:userId/all-packs', getAllPacksForUser);
router.get(
  '/cards/cardInstances/get-all-card-instances/:userId',
  getAllUserCardInstances
);
router.get('/user/email/:email', getUserByEmail);
router.get('/user/username/:username', getUserByUsername);
router.get('/user-search/battle-search/:username', findUserForBattle);
router.delete('/delete/:userId', deleteUser);

export default router;
