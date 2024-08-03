import { myEmitterErrors } from '../event/errorEvents.js';
import { NotFoundEvent, ServerErrorEvent } from '../event/utils/errorUtils.js';
import { createSingleCardsForUser } from '../utils/createCards.js';
import { sendMessageResponse } from '../utils/responses.js';
import { createNewInstanceForCard } from './cards.js';

export const collectLoginReward = async (daysInARow, userId) => {
  console.log('daysInARow xxx ', daysInARow);
  console.log('userID xxx ', userId);

  try {
    let cardFound = await createSingleCardsForUser();
    console.log('cardFound xxx ', cardFound);
    let newInstance = await createNewInstanceForCard(cardFound.id, userId);
    console.log('new instance xxx ', newInstance);

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
    const serverError = new ServerErrorEvent('freecard', `Create single card`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse('Free card', serverError.code, serverError.message);
    throw err;
  }
};
