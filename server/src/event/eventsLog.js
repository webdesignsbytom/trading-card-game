import { myEmitter } from '../utils/eventEmitter.js';
import {
    creategetAllEventsHandlerEvent,
} from './utils/eventLogUtils.js';

export const myEmitterEvents = myEmitter;

myEmitterEvents.on('get-all-events', async (user) => creategetAllEventsHandlerEvent(user));
