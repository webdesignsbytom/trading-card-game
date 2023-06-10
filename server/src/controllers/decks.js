// Emitters
import { myEmitterErrors } from '../event/errorEvents.js';
// Response messages
import { EVENT_MESSAGES, sendDataResponse, sendMessageResponse } from '../utils/responses.js';
import {
  BadRequestEvent,
  NotFoundEvent,
  ServerErrorEvent,
} from '../event/utils/errorUtils.js';
import { createNewDeck, deleteDeckById, findAllDecks, findAllUserDecks, findDeckById, updateNewDeck } from '../domain/decks.js';
import { findUserById } from '../domain/users.js';

export const getAllDecks = async (req, res) => {
  console.log('get all decks');

  try {
    const foundDecks = await findAllDecks();
    console.log('found decks:', foundDecks);

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
  console.log('getDeckById');
  const { deckId } = req.params
  console.log('deckId', deckId);

  try {
    const foundDeck = await findDeckById(deckId);
    console.log('found deck', foundDeck);

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

// Get getAllDecksByUserId
export const getAllDecksByUserId = async (req, res) => {
  console.log('getAllDecksByUserId');
  const { userId } = req.params;
  console.log('userId', userId);

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
    const serverError = new ServerErrorEvent(req.user, `Get deck by id`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// createDeck
export const createDeck = async (req, res) => {
  console.log('createDeck');
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
    const serverError = new ServerErrorEvent(req.user, `Create deck`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// updateAndAddCardsToDeck
export const updateAndAddCardsToDeck = async (req, res) => {
  console.log('updateAndAddCardsToDeck');
  const { deckId, deckName, userId, cardsArray } = req.body;
  console.log('deckId, deckName, userId, cardsArray', deckId, deckName, userId, cardsArray);

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
    console.log('found deck', foundDeck);

    if (!foundDeck) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundDecks
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const updatedDeck = await updateNewDeck(deckId, deckName, cardsArray)

    return sendDataResponse(res, 200, { deck: updatedDeck });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Create deck`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// delete deck
export const deleteDeck = async (req, res) => {
  console.log('deleteDeck');
  const deckId = req.params.deckId;
  console.log('deckId', deckId);

  try {
    const foundDeck = await findDeckById(deckId);
    console.log('foundDeck card', foundDeck);

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
