import { NotFoundEvent, ServerErrorEvent } from '../event/utils/errorUtils.js';
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import {
  createNewInstanceForCard,
  findAllCardInstances,
  findAllCards,
  findAllCardsFromPack,
  findCardById,
  findCardsByCardType,
} from '../domain/cards.js';
import { findUserById } from '../domain/users.js';
import { createSingleCardsForUser } from '../utils/createCards.js';

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

    return sendDataResponse(res, 200, { cards: foundCards });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get all cards`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// Get card by id
export const getCardById = async (req, res) => {
  console.log('getCardById');
  const { cardId } = req.body
  console.log('cardId');

  try {
    const foundCard = await findCardById(cardId);
    console.log('found card', foundCard);

    if (!foundCard) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundCards
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { card: foundCard });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get all cards`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// Get all cards isntances from all packs
export const getAllCardInstances = async (req, res) => {
  console.log('getAllCardInstances');
  try {
    const foundInstances = await findAllCardInstances();
    console.log('found cards', foundInstances);

    if (!foundInstances) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundInstances
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { total: foundInstances.length, cards: foundInstances });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get all cards`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// get all cards from pack type i.e brexit
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

// Get all cards by type i.e policy
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
};

// Get one of any card currently available
export const buySingleRandomCard = async (req, res) => {
  console.log('buySingleRandomCard');
  const { userId } = req.body;

  try {
    let cardFound = await createSingleCardsForUser();
    console.log('AAWW cardFound', cardFound);

    let newInstance = await createNewInstanceForCard(cardFound.id, userId, cardFound.cardName);

    if (!newInstance) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundCardType
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { card: cardFound, cardInstance: newInstance });
    
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Create single card`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const freeSingleRandomCard = async (userId) => {
  console.log('buySingleRandomCard');

  try {
    let cardFound = await createSingleCardsForUser();

    let newInstance = await createNewInstanceForCard(cardFound.id, userId, cardFound.cardName);

    if (!newInstance) {
      const notFound = new NotFoundEvent(
        'free card',
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundCardType
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return { newInstance, cardFound }
    
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent('freecard', `Create single card`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse('Free card', serverError.code, serverError.message);
    throw err;
  }
};
