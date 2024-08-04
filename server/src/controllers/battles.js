// Emitters
import { myEmitterErrors } from '../event/errorEvents.js';
// Domain
// Response messages
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';
import {
  BadRequestEvent,
  NotFoundEvent,
  ServerErrorEvent,
} from '../event/utils/errorUtils.js';
import {
  createNewBattle,
  createNewBattleRequest,
  deleteBattleById,
  findAllBattles,
  findAllUserBattles,
  findBattleById,
  updateBattleConfirmOpponent,
} from '../domain/battles.js';
import { findUserById, findUserByIdBasic } from '../domain/users.js';

export const getAllBattles = async (req, res) => {
  try {
    const foundBattles = await findAllBattles();

    if (!foundBattles) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.battleNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { battles: foundBattles });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all battle`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// Get battle by id
export const getBattleById = async (req, res) => {
  const { battleId } = req.params;

  try {
    const foundBattle = await findBattleById(battleId);

    if (!foundBattle) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.battleNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { battle: foundBattle });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get battle by id`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// Get getAllBattlesByUserId
export const getAllBattlesByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const foundBattles = await findAllUserBattles(userId);

    if (!foundBattles) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.battleNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { battles: foundBattles });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get battle by id`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// createBattle
export const createBattle = async (req, res) => {
  const { createdById, receivedById } = req.body;

  try {
    const foundUser = await findUserById(createdById);
    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const foundOpponent = await findUserById(receivedById);
    if (!foundOpponent) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFoundOpponent,
        EVENT_MESSAGES.oppenentNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const createdBattle = await createNewBattle(
      createdById,
      receivedById,
      foundUser.profile.username,
      foundOpponent.profile.username
    );

    return sendDataResponse(res, 200, { battle: createdBattle });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get battle by id`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// createBattleRequest
export const createBattleRequest = async (req, res) => {
  console.log('XXXXXXXX');
  const { senderId, receiverId } = req.body;
  console.log('senders: ', senderId);
  console.log('receivers: ', receiverId);
  try {
    const foundUser = await findUserByIdBasic(senderId);
    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    console.log('founduser', foundUser);

    const foundOpponent = await findUserByIdBasic(receiverId);
    if (!foundOpponent) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFoundOpponent,
        EVENT_MESSAGES.oppenentNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    console.log('foundOpponent', foundOpponent);

    const createdBattleRequest = await createNewBattleRequest(
      senderId,
      receiverId
    );

    console.log('createdBattleRequest', createdBattleRequest);

    return sendDataResponse(res, 201, { battleRequest: createdBattleRequest });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Create battle request failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// opponentConfirmBattle
export const opponentConfirmBattle = async (req, res) => {
  const { battleId, opponentId } = req.body;

  try {
    const foundUser = await findUserById(opponentId);
    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const foundBattle = await findBattleById(battleId);

    if (!foundBattle) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.battleNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const updatedBattle = await updateBattleConfirmOpponent(battleId);

    return sendDataResponse(res, 200, { updatedBattle: updatedBattle });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get battle by id`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// delete battle
export const deleteBattle = async (req, res) => {
  const { battleId } = req.params;

  try {
    const foundBattle = await findBattleById(battleId);

    if (!foundBattle) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.eventNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const deletedBattle = await deleteBattleById(battleId);
    if (!deletedBattle) {
      const notDeleted = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.eventNotDeleted
      );
      myEmitterErrors.emit('error', notDeleted);
      return sendMessageResponse(res, notDeleted.code, notDeleted.message);
    }

    return sendDataResponse(res, 201, { deletedBattle: deletedBattle });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Delete battle`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
