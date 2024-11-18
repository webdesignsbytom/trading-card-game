import { NotFoundEvent, ServerErrorEvent } from '../event/utils/errorUtils.js';
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import {
  createMemberCard,
  createNewCardCard,
  createNewInstanceForCard,
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
import { createSingleCardsForUser } from '../utils/cardUtils/createCards.js';

// Get all cards from all packs
export const getAllCardsHandler = async (req, res) => {
  try {
    const foundCards = await findAllCards();

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
    const serverError = new ServerErrorEvent(req.user, `Get all cards failed`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// Get card by id
export const getCardByIdHandler = async (req, res) => {
  const { cardId } = Number(req.params);

  if (!cardId) {
    return sendDataResponse(res, 400, {
      email: 'Missing cardId',
    });
  }

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
    const serverError = new ServerErrorEvent(
      req.user,
      `Find card by id failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// Get card instance by id
export const getCardInstanceByIdHandler = async (req, res) => {
  const { cardInstanceId } = req.params;

  if (!cardInstanceId) {
    return sendDataResponse(res, 400, {
      email: 'Missing cardInstanceId',
    });
  }

  try {
    const foundCardInstance = await findCardInstanceById(cardInstanceId);

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

    return sendDataResponse(res, 200, {
      cardInstance: foundCardInstance,
      card: foundCard,
    });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Find card instance by id failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// search cards by name
export const searchForCardsByNameHandler = async (req, res) => {
  const { cardName } = req.body;

  if (!cardName) {
    return sendDataResponse(res, 400, {
      email: 'Missing cardName',
    });
  }

  try {
    const foundCards = await findCardBySearchQuery(cardName);

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
      `Search for card by name failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// MEMBER createNewCards
export const createNewMemberCards = async (req, res) => {
  const { cardArray } = req.body;

  if (!cardArray) {
    return sendDataResponse(res, 400, {
      email: 'Missing cardArray',
    });
  }

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

// createNewMemberCardHandler
export const createNewCardsHandler = async (req, res) => {
  const { cardArray } = req.body;
  const { adminId } = req.params;

  if (!cardArray) {
    return sendDataResponse(res, 400, {
      email: 'Missing cardArray',
    });
  }

  if (!adminId) {
    return sendDataResponse(res, 400, {
      email: 'Missing adminId',
    });
  }

  try {
    const createdCards = [];

    for (let index = 0; index < cardArray.length; index++) {
      const card = cardArray[index];
      const createdCard = await createNewCardCard(
        card.serialNumber,
        card.cardName.toLowerCase(),
        card.edition.toLowerCase(),
        card.imageUrl,
        card.memberName.toLowerCase(),
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
      `Create new cards failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// Get all cards isntances from all packs
export const getAllCardInstancesHandler = async (req, res) => {
  try {
    const foundInstances = await findAllCardInstances();

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
export const GetAllCardByPackHandler = async (req, res) => {
  const { packType } = req.body;

  if (!packType) {
    return sendDataResponse(res, 400, {
      email: 'Missing packType',
    });
  }

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
export const getAllCardsByTypeHandler = async (req, res) => {
  const { cardType } = req.body;

  if (!cardType) {
    return sendDataResponse(res, 400, {
      email: 'Missing cardType',
    });
  }

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
export const buySingleRandomCardHandler = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return sendDataResponse(res, 400, {
      email: 'Missing userId',
    });
  }

  try {
    let cardFound = await createSingleCardsForUser();

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
export const updateCardDateByIdHandler = async (req, res) => {
  const { cardId } = req.params;
  const { cardUpdateData } = req.body;

  if (!cardId) {
    return sendDataResponse(res, 400, {
      email: 'Missing cardId',
    });
  }

  if (!cardUpdateData) {
    return sendDataResponse(res, 400, {
      email: 'Missing cardUpdateData',
    });
  }

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

export const freeSingleRandomCardHandler = async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return sendDataResponse(res, 400, {
      email: 'Missing userId',
    });
  }

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
    return sendDataResponse(res, 200, { newInstance, cardFound });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent('freecard', `Create single card`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse('Free card', serverError.code, serverError.message);
    throw err;
  }
};
