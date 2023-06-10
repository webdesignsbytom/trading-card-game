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
  deleteBattleById,
  findAllBattles,
  findBattleById,
  updateBattleConfirmOpponent,
} from '../domain/battles.js';
import { findUserById } from '../domain/users.js';

export const getAllBattles = async (req, res) => {
  console.log('get all battles');

  try {
    const foundBattles = await findAllBattles();
    console.log('found battles:', foundBattles);

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
  console.log('getBattleById');
  const { battleId } = req.params;
  console.log('battleId', battleId);

  try {
    const foundBattle = await findBattleById(battleId);

    if (!foundBattle) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundEvents
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

// createBattle
export const createBattle = async (req, res) => {
  console.log('createBattle');
  const { createdById, receivedById } = req.body;
  console.log('battleId', receivedById, createdById);

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

    const createdBattle = await createNewBattle(createdById, receivedById, foundUser.profile.username, foundOpponent.profile.username)
    console.log('createdBattle', createdBattle);

    return sendDataResponse(res, 200, { battle: createdBattle });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get battle by id`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// opponentConfirmBattle
export const opponentConfirmBattle = async (req, res) => {
  console.log('opponentConfirmBattle');
  const { battleId, opponentId } = req.body;
  console.log('battleId', battleId, opponentId);

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

    const updatedBattle = await updateBattleConfirmOpponent(battleId)

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
  console.log('deleteOpenBattle');
  console.log('req', req.params);
  const battleId = req.params.battleId;
  console.log('battleId', battleId);

  try {
    const foundBattle = await findBattleById(battleId);
    console.log('foundBattle card', foundBattle);

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
