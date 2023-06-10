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
  getAllPacksForUser
} from '../controllers/users.js';
import {
  validateAuthentication,
  validateAdminRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/all-users', getAllUsers);
router.post('/register', registerNewUser);
router.patch('/user/packs/open-pack', openPackAndAddToUser);
router.patch('/user/rewards/collect', collectDailyReward);
router.get('/user/userId/:userId', getUserById);
router.get('/user/userId/:userId/all-cards', getAllCardsForUser);
router.get('/user/packs/:userId/all-packs', getAllPacksForUser);
router.get('/cards/cardInstances/get-all-card-instances/:userId', getAllUserCardInstances);
router.get('/user/email/:email', getUserByEmail);
router.get('/user/username/:username', getUserByUsername);
router.delete('/delete/:userId', deleteUser);

export default router;
