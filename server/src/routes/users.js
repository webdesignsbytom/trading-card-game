import { Router } from 'express';
import {
  getAllUsers,
  registerNewUser,
  getUserById,
  getUserByEmail,
  deleteUser,
  getAllCardsForUser
} from '../controllers/users.js';
import {
  validateAuthentication,
  validateAdminRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/all-users', getAllUsers);
router.post('/register', registerNewUser);
router.get('/user/id/:id', getUserById);
router.get('/user/id/:id/all-cards', getAllCardsForUser);
router.get('/user/email/:email', getUserByEmail);
router.delete('/delete/:id', deleteUser);

export default router;
