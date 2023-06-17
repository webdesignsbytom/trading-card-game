import { NotFoundEvent, ServerErrorEvent } from '../event/utils/errorUtils.js';
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import {
  createMemberCard,
  createMemberCardFromJSON,
  createNewInstanceForCard,
  createPartyCard,
  createPolicyCard,
  findAllCardInstances,
  findAllCards,
  findAllCardsFromPack,
  findCardById,
  findCardByName,
  findCardBySearchQuery,
  findCardInstanceById,
  findCardsByCardType,
  updateMemberCardById,
} from '../domain/cards.js';
import { findUserById } from '../domain/users.js';
import { createSingleCardsForUser } from '../utils/createCards.js';

// Get all cards from all packs
export const getAllCards = async (req, res) => {
  console.log('getAllCards');
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
  const cardId = Number(req.params.cardId);
  console.log('cardId', cardId);

  try {
    const foundCard = await findCardById(cardId);

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
    const serverError = new ServerErrorEvent(req.user, `Find card by id`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// Get card instance by id
export const getCardInstanceById = async (req, res) => {
  console.log('getCardById');
  const { cardInstanceId } = req.params;
  console.log('cardId', cardInstanceId);

  try {
    const foundCardInstance = await findCardInstanceById(cardInstanceId);
    console.log('found card', foundCardInstance);

    if (!foundCardInstance) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundCards
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const foundCard = await findCardByName(foundCardInstance.name);
    console.log('found card', foundCard);

    return sendDataResponse(res, 200, {
      cardInstance: foundCardInstance,
      card: foundCard,
    });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Find card instance by id`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// search cards by name
export const searchForCardsByName = async (req, res) => {
  console.log('searchForCardsByName', req.body);
  const { cardName } = req.body;
  console.log('cardName', cardName);

  try {
    const foundCards = await findCardBySearchQuery(cardName);
    console.log('found card', foundCards[0]);

    if (!foundCards) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundCards
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, {
      results: foundCards.length,
      cards: foundCards,
    });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Search for card by name`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// MEMBER createNewCards
export const createNewMemberCards = async (req, res) => {
  console.log('createNewCards', req.body);
  const { cardArray } = req.body;
  console.log('cardArray', cardArray);

  try {
    const createdCards = [];

    for (let index = 0; index < cardArray.length; index++) {
      const card = cardArray[index];
      const createdCard = await createMemberCard(
        card.serialNumber,
        card.cardName.toLowerCase(),
        card.edition.toLowerCase(),
        card.imageUrl,
        card.memberName.toLowerCase(),
        card.packType,
        card.cardType,
        card.health,
        card.attack
      );
      createdCards.push(createdCard);
    }

    if (!createdCards) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.createCardsFail
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { cards: createdCards });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Create new member cards failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// MEMBER createNewMemberCardsFromJSON
export const createNewMemberCardsFromJSON = async (req, res) => {
  console.log('createNewMemberCardsFromJSON', req.body);
  const { cardArray } = req.body;
  console.log('cardArray', cardArray[1]);

  try {
    const createdCards = [];

    for (let index = 0; index < cardArray.length; index++) {
      const card = cardArray[index];
      const createdCard = await createMemberCardFromJSON(
        card.serialNumber,
        card.cardName.toLowerCase(),
        card.edition.toLowerCase(),
        card.imageUrl,
        card.memberName.toLowerCase(),
        card.packType,
        card.cardType,
      );
      createdCards.push(createdCard);
    }

    if (!createdCards) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.createCardsFail
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { cards: createdCards });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Create new member cards from JSON failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// PARTY createNewPartyCards
export const createNewPartyCards = async (req, res) => {
  console.log('createNewCards', req.body);
  const { cardArray } = req.body;
  console.log('cardArray', cardArray);

  try {
    const createdCards = [];

    for (let index = 0; index < cardArray.length; index++) {
      const card = cardArray[index];
      const createdCard = await createPartyCard(
        card.serialNumber,
        card.cardName.toLowerCase(),
        card.edition.toLowerCase(),
        card.imageUrl,
        card.packType,
        card.cardType
      );
      createdCards.push(createdCard);
    }

    if (!createdCards) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.createCardsFail
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { cards: createdCards });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Create new member cards failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
// POLICY createNewPolicyCards
export const createNewPolicyCards = async (req, res) => {
  console.log('createNewCards', req.body);
  const { cardArray } = req.body;
  console.log('cardArray', cardArray);

  try {
    const createdCards = [];

    for (let index = 0; index < cardArray.length; index++) {
      const card = cardArray[index];
      const createdCard = await createPolicyCard(
        card.serialNumber,
        card.cardName.toLowerCase(),
        card.edition.toLowerCase(),
        card.imageUrl,
        card.packType,
        card.cardType
      );
      createdCards.push(createdCard);
    }

    if (!createdCards) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.createCardsFail
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { cards: createdCards });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Create new member cards failed`
    );
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

    return sendDataResponse(res, 200, {
      total: foundInstances.length,
      cards: foundInstances,
    });
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

    let newInstance = await createNewInstanceForCard(
      cardFound.id,
      userId,
      cardFound.cardName
    );

    if (!newInstance) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundCardType
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, {
      card: cardFound,
      cardInstance: newInstance,
    });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Create single card`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// Get one of any card currently available
export const updateCardDateById = async (req, res) => {
  console.log('updateCardDateById');
  const { cardId } = req.params;
  const cardUpdateData = req.body;

  try {
    const foundCard = await findCardById(Number(cardId));
    if (!foundCard) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundCards
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    if (cardUpdateData.cardType === 'MEMBER') {
      const updatedCard = await updateMemberCardById(
        Number(cardId),
        cardUpdateData.serialNumber,
        cardUpdateData.cardName,
        cardUpdateData.edition,
        cardUpdateData.rarity,
        Boolean(cardUpdateData.holographic),
        Boolean(cardUpdateData.editable),
        cardUpdateData.imageUrl,
        cardUpdateData.backgroundColour,
        Boolean(cardUpdateData.availability),
        cardUpdateData.memberCard.memberName,
        Number(cardUpdateData.memberCard.health),
        Number(cardUpdateData.memberCard.attack),
        cardUpdateData.memberCard.cardStat
      );

      return sendDataResponse(res, 200, { updatedCard: updatedCard });
    }
    
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Update card failed`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const freeSingleRandomCard = async (userId) => {
  console.log('buySingleRandomCard');

  try {
    let cardFound = await createSingleCardsForUser();

    let newInstance = await createNewInstanceForCard(
      cardFound.id,
      userId,
      cardFound.cardName
    );

    if (!newInstance) {
      const notFound = new NotFoundEvent(
        'free card',
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundCardType
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return { newInstance, cardFound };
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent('freecard', `Create single card`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse('Free card', serverError.code, serverError.message);
    throw err;
  }
};
