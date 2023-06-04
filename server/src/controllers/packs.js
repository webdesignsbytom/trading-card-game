import { deletePackbyIdWhenOpened, findPackById } from '../domain/packs.js';
import {
  createSinglePacksOfCards,
  createSinglePacksOfCardsForUser,
} from '../utils/createPackets.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import { NotFoundEvent, ServerErrorEvent } from '../event/utils/errorUtils.js';
import { sendDataResponse, sendMessageResponse } from '../utils/responses.js';
import { starterPackNames } from '../utils/constants.js';
import {
  findUserById,
  setStarterCardsToClaimed,
  updateUserCardArray,
} from '../domain/users.js';

export const getPackById = async (req, res) => {
  const id = req.params.id;

  try {
    const foundPack = await findPackById(id);
    let cards = JSON.parse(foundPack.cards);
    foundPack.cards = cards;

    return sendDataResponse(res, 201, { pack: foundPack });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get pack by id`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createNewpack = async (req, res) => {
  const { packType } = req.body;

  try {
    const createdPack = await createSinglePacksOfCards(packType);

    return sendDataResponse(res, 201, { pack: createdPack });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Create pack of ${packType}`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createPacksAndAddToUser = async (req, res) => {
  const { packType, userId } = req.body;

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

    const createdPack = await createSinglePacksOfCardsForUser(packType, userId);
    console.log('Created Pack', createdPack);

    return sendDataResponse(res, 201, { pack: createdPack });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Create pack of ${packType}`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createStarterPacksForUser = async (req, res) => {
  const { userId } = req.body;

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

    const starterPacks = [];

    const createdPack1 = await createSinglePacksOfCardsForUser(
      starterPackNames[0],
      userId
    );
    starterPacks.push(createdPack1);
    const createdPack2 = await createSinglePacksOfCardsForUser(
      starterPackNames[1],
      userId
    );
    starterPacks.push(createdPack2);
    const createdPack3 = await createSinglePacksOfCardsForUser(
      starterPackNames[2],
      userId
    );
    starterPacks.push(createdPack3);

    const updatedUser = await setStarterCardsToClaimed(userId);

    return sendDataResponse(res, 201, {
      packs: starterPacks,
      updatedUser: updatedUser,
    });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Create start packs`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const openPackAndAddToUser = async (req, res) => {
  console.log('openPackAndAddToUser');
  const { packId, userId } = req.body;

  try {
    const foundPack = await findPackById(packId);
    if (!foundPack) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

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

    // All user packs (objects)
    const userPackArray = foundUser.packs;
    
    const index = userPackArray.findIndex((pack) => pack.id === packId);

    const packItem = userPackArray.splice(index, 1);

    const newCardArray = JSON.stringify(foundPack.cards);

    const deletedPack = await deletePackbyIdWhenOpened(packId);

    const updatedUserCards = await updateUserCardArray(userId, newCardArray);

    const foundUserUpdated = await findUserById(userId);

    return sendDataResponse(res, 201, { updatedUser: foundUserUpdated });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Create start packs`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
