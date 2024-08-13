import { Router } from 'express';
import {
  getAllEventsHandler,
  deleteEventHandler,
  getEventByIdHandler,
} from '../controllers/events.js';
import {
  validateAuthentication,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/all-events', getAllEventsHandler);
router.get('/event/:eventId', getEventByIdHandler);
router.delete('/delete-event-by-id/:eventId', deleteEventHandler);

export default router;
