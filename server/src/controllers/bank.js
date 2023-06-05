import { createBankForUser } from '../domain/bank.js';
import { NotFoundEvent, ServerErrorEvent } from '../event/utils/errorUtils.js';
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';
import { myEmitterErrors } from '../event/errorEvents.js';

// add a bank account
export const createUserBankAccount = async (req, res) => {
  console.log('createUserBankAccount');

  try {
    const createdBank = await createBankForUser();
    console.log('createdBank', createdBank);

    if (!createdBank) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundCards
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { bank: createdBank });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get all cards`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
