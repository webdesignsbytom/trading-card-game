import { Router } from 'express';
import { getAllEvents, deleteEvent } from '../controllers/events.js';
import {
  validateAuthentication,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get(
  '/all-events',
  validateAuthentication,
  validateDeveloperRole,
  getAllEvents
);
router.get(
  '/delete/event/:eventId',
  validateAuthentication,
  validateDeveloperRole,
  deleteEvent
);

export default router;
