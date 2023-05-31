import { NotFoundEvent, ServerErrorEvent } from '../event/utils/errorUtils.js';
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import { findAllCards, findAllCardsFromPack, findCardsByCardType } from '../domain/cards.js';

// Get all cards from all packs
export const getAllCards = async (req, res) => {
  console.log('getAllUsers');
  try {
      const foundCards = await findAllCards();
      console.log('found cards', foundCards);

      if (!foundCards) {
        const notFound = new NotFoundEvent(
          req.user,
          EVENT_MESSAGES.notFound,
          EVENT_MESSAGES.notFoundCards
        );
        myEmitterErrors.emit('error', notFound);
        return sendMessageResponse(res, notFound.code, notFound.message);
      }

      foundCards.forEach((card) => {
        console.log('card', card.cardType.toLowerCase());
        let newType = card.cardType.toLowerCase();
        card.cardType = newType;
      })
      
    return sendDataResponse(res, 200, { cards: foundCards });

  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get all cards`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getAllCardsFromPackType = async (req, res) => {
  console.log('getAllCardsFromPack');
  const { packType } = req.params;
  console.log('pack', packType);

  try {
    const foundCards = await findAllCardsFromPack(packType);

    if (!foundCards) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundPackType
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { cards: foundCards });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Get all cards from pack ${packType}`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getAllCardsByType = async (req, res) => {
  console.log('getAllCardsByType');
  const { cardType } = req.params;
  console.log('type: ', cardType);

  try {
    const foundCards = await findCardsByCardType(cardType);

    if (!foundCards) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundCardType
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { cards: foundCards });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Get all cards from pack ${packType}`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
}

