import {
  deletePackByIdHandlerWhenOpened,
  findAllPacks,
  findPackById,
} from '../domain/packs.js';
import {
  createBoxOfCardsForUser,
  createSinglePacksOfCards,
  createSinglePacksOfCardsForUser,
} from '../utils/cardUtils/createPackets.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import {
  ConfictEvent,
  NotFoundEvent,
  ServerErrorEvent,
} from '../event/utils/errorUtils.js';
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';
import {
  StandardBoxCost,
  StandardPackCost,
  starterPackNames,
} from '../utils/constants.js';
import {
  findUserById,
  findUserByIdBasic,
  setStarterCardsToClaimed,
  updateUserCardArray,
} from '../domain/users.js';
import { chargePackToBankAccount } from '../domain/bank.js';

// Get all packs of cards
export const getAllPacksHandler = async (req, res) => {
  try {
    const foundPacks = await findAllPacks();

    if (!foundPacks) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundPack
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterUsers.emit('get-all-users', req.user);
    return sendDataResponse(res, 200, { packs: foundPacks });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get all packs`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// Get pack by ID
export const getPackByIdHandler = async (req, res) => {
  const { packId } = req.params;

  if (!packId) {
    return sendDataResponse(res, 400, {
      email: 'Missing packId',
    });
  }

  try {
    const foundPack = await findPackById(packId);
    if (!foundPack) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundPack
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 201, { pack: foundPack });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get pack by id`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// Create a new pack with no user
export const createNewpackHandler = async (req, res) => {
  const { packType } = req.body;

  if (!packType) {
    return sendDataResponse(res, 400, {
      email: 'Missing packType',
    });
  }

  try {
    const createdPack = await createSinglePacksOfCards(packType);
    if (!createdPack) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.createPackTypeFail
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const foundPack = await findPackById(createdPack.newPack.id);
    if (!foundPack) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundPack
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 201, {
      pack: foundPack,
      cards: createdPack.cards,
    });
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

// Return new pack of any type with user id
export const createPacksAndAddToUserHandler = async (req, res) => {
  const { packType, userId } = req.body;

  if (!packType || !userId) {
    return sendDataResponse(res, 400, {
      email: 'Missing packType or userId',
    });
  }

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

    const foundPack = await findPackById(createdPack.newPack.id);
    if (!foundPack) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundPack
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 201, {
      pack: foundPack,
      cards: createdPack.cards,
    });
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

// BUY and Return new pack of any type with user id
export const buyPacketAddToUserHandler = async (req, res) => {
  const { packType, userId, cost } = req.body;

  try {
    if (cost !== StandardPackCost) {
      const conflict = new ConfictEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.dataIncorrect
      );
      myEmitterErrors.emit('error', conflict);
      return sendMessageResponse(res, conflict.code, conflict.message);
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

    const createdPack = await createSinglePacksOfCardsForUser(packType, userId);

    const foundPack = await findPackById(createdPack.id);
    if (!foundPack) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundPack
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // Update banking
    await chargePackToBankAccount(userId, cost);

    const updatedUser = await findUserById(userId);

    return sendDataResponse(res, 201, {
      pack: foundPack,
      cards: createdPack.cards,
      updatedUser: updatedUser,
    });
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
export const buyBoxPackAddToUserHandler = async (req, res) => {
  const { boxType, userId, cost } = req.body;

  if (!userId || !boxType || !cost) {
    return sendDataResponse(res, 400, {
      email: 'Missing fields in request',
    });
  }

  try {
    if (cost !== StandardBoxCost) {
      const conflict = new ConfictEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.dataIncorrect
      );
      myEmitterErrors.emit('error', conflict);
      return sendMessageResponse(res, conflict.code, conflict.message);
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

    const createdBox = await createBoxOfCardsForUser(boxType, userId);

    // Update banking
    await chargePackToBankAccount(userId, cost);

    const updatedUser = await findUserById(userId);

    return sendDataResponse(res, 201, {
      updatedUser: updatedUser,
    });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Create box of ${boxType} failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const openPacketHandler = async (req, res) => {
  const { packId, userId } = req.body;

  if (!userId || !packId) {
    return sendDataResponse(res, 400, {
      email: 'Missing userId or packId',
    });
  }

  try {
    const foundPack = await findPackById(packId);
    if (!foundPack) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundPack
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

    const deletedPack = await deletePackByIdHandlerWhenOpened(packId);

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

export const deletePackByIdHandler = async (req, res) => {
  const { packId } = req.params;

  if (!packId) {
    return sendDataResponse(res, 400, {
      email: 'Missing packId',
    });
  }
  
  try {
    const foundPacks = await findAllPacks();

    if (!foundPacks) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterUsers.emit('get-all-users', req.user);
    return sendDataResponse(res, 200, { packs: foundPacks });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get all users`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
