import { Router } from 'express';
import {
  createUserBankAccount
} from '../controllers/bank.js';

const router = Router();

router.post('/create-bank-account', createUserBankAccount);

export default router;
