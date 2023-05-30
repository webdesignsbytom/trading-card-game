import { Router } from 'express';
import {
  getAllUsers,
  registerNewUser,
  getUserById,
} from '../controllers/users.js';
import {
  validateAuthentication,
  validateAdminRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/all-users', getAllUsers);
router.post('/register', registerNewUser);
router.get('/user/:id', getUserById);

export default router;
