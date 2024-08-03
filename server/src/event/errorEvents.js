import { myEmitter } from '../utils/eventEmitter.js';
import { createErrorEvent, createLoginErrorEvent, createResendVerifyErrorEvent } from './utils/errorUtils.js'

export const myEmitterErrors = myEmitter

myEmitterErrors.on('error', async (error) => {
  createErrorEvent(error)
});

myEmitterErrors.on('error-login', async (error) => {
  createLoginErrorEvent(error)
});

myEmitterErrors.on('verification-not-found', async (error) => {
  createResendVerifyErrorEvent(error)
});
