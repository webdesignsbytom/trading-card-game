// Domain
import { createSingleCardsForUser } from '../utils/createCards.js';
import { createNewInstanceForCard } from './cards.js';
// Responses
import { sendMessageResponse } from '../utils/responses.js';
// Errors
import { myEmitterErrors } from '../event/errorEvents.js';
import { NotFoundEvent, ServerErrorEvent } from '../event/utils/errorUtils.js';

export const collectLoginReward = async (daysInARow, userId) => {

  try {
    let cardFound = await createSingleCardsForUser();
    let newInstance = await createNewInstanceForCard(cardFound.id, userId);

    if (!newInstance) {
      const notFound = new NotFoundEvent(
        'free card',
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundCardType
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return [ newInstance, cardFound ];
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, 'Collect daily login reward failed');
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse('Free card', serverError.code, serverError.message);
    throw err;
  }
};
