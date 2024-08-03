// Emitters
import { myEmitterErrors } from '../event/errorEvents.js';
// Response messages
import { EVENT_MESSAGES, sendDataResponse, sendMessageResponse } from '../utils/responses.js';
import {
  BadRequestEvent,
  NotFoundEvent,
  ServerErrorEvent,
} from '../event/utils/errorUtils.js';
import { addCardInstanceToDeck, createNewDeck, deleteDeckById, findAllDecks, findAllUserDecks, findDeckById, updateNewDeck } from '../domain/decks.js';
import { findUserById } from '../domain/users.js';
import { findCardById } from '../domain/cards.js';

export const getAllDecks = async (req, res) => {

  try {
    const foundDecks = await findAllDecks();

    if (!foundDecks) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundDecks
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { decks: foundDecks });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all decks`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// Get deck by id
export const getDeckById = async (req, res) => {
  const { deckId } = req.params

  try {
    const foundDeck = await findDeckById(deckId);

    if (!foundDeck) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundDecks
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { deck: foundDeck });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get deck by id `);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// Get getAllDisplayCardsFromDeck
export const getAllDisplayCardsFromDeck = async (req, res) => {
  const { deckId } = req.params

  try {
    const foundDeck = await findDeckById(deckId);

    if (!foundDeck) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundDecks
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const cardsArray = []
    for (let index = 0; index < foundDeck.cards.length; index++) {
      const card = foundDeck.cards[index];
      const foundCard = await findCardById(card.cardId)
      cardsArray.push(foundCard);
    }

    return sendDataResponse(res, 200, { deck: cardsArray });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get cards from deck`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// Get getAllDecksByUserId
export const getAllDecksByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const foundDecks = await findAllUserDecks(userId);

    if (!foundDecks) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundDecks
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { decks: foundDecks });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get deck by user id`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// createDeck
export const createDeck = async (req, res) => {
  const { deckName, userId } = req.body;

  try {
    const foundUser = await findUserById(userId);
    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.createDecksFail
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const createdDeck = await createNewDeck(deckName, userId)

    return sendDataResponse(res, 200, { deck: createdDeck });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Create new deck`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// addCardsToDeck
export const addCardsToDeck = async (req, res) => {
  const { deckId, userId, cardInstancesArray } = req.body;

  try {
    const foundUser = await findUserById(userId);
    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const foundDeck = await findDeckById(deckId);

    if (!foundDeck) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundDecks
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    let newDeck = []

    for (let index = 0; index < cardInstancesArray.length; index++) {
      const instance = cardInstancesArray[index];
      const addedToDeck = await addCardInstanceToDeck(instance.id, deckId)
      newDeck.push(addedToDeck);
    }

    return sendDataResponse(res, 200, { deck: newDeck });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Add card instances to deck`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// delete deck
export const deleteDeck = async (req, res) => {
  const deckId = req.params.deckId;

  try {
    const foundDeck = await findDeckById(deckId);

    if (!foundDeck) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundDecks
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const deletedDeck = await deleteDeckById(deckId);
    if (!deletedDeck) {
      const notDeleted = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.deckNotDeleted
      );
      myEmitterErrors.emit('error', notDeleted);
      return sendMessageResponse(res, notDeleted.code, notDeleted.message);
    }
    
    return sendDataResponse(res, 201, { deletedDeck: deletedDeck });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Delete deck`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
