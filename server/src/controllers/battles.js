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
  acceptBattleRequestById,
  createNewBattle,
  createNewBattleRequest,
  deleteBattleById,
  deleteBattleRequestById,
  findAllBattles,
  findAllUserBattleRequests,
  findAllUserBattles,
  findBattleById,
  findBattleRequestById,
  updateBattleConfirmOpponent,
} from '../domain/battles.js';
import { findUserById, findUserByIdBasic } from '../domain/users.js';

export const getAllBattlesHandler = async (req, res) => {
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

export const getAllUserBattleRequestsHandler = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return sendDataResponse(res, 400, {
      email: 'Missing userId',
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

    const foundBattleRequests = await findAllUserBattleRequests(userId);

    if (!foundBattleRequests) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.battleNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { battleRequests: foundBattleRequests });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(
      req.user,
      `Get all user battle requests failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// Get battle by id
export const getBattleByIdHandler = async (req, res) => {
  const { battleId } = req.params;

  if (!battleId) {
    return sendDataResponse(res, 400, {
      email: 'Missing battleId',
    });
  }

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

// Get getAllUserBattlesHandler
export const getAllUserBattlesHandler = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return sendDataResponse(res, 400, {
      email: 'Missing userId',
    });
  }

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

// createBattleHandler
export const createBattleHandler = async (req, res) => {
  const { createdById, receivedById } = req.body;

  if (!userId) {
    return sendDataResponse(res, 400, {
      email: 'Missing userId',
    });
  }
  
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

// createBattleRequestHandler
export const createBattleRequestHandler = async (req, res) => {
  const { senderId, receiverId, senderUsername, receiverUsername } = req.body;

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

    const createdBattleRequest = await createNewBattleRequest(
      senderId,
      receiverId,
      senderUsername,
      receiverUsername
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
export const deleteBattleHandler = async (req, res) => {
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

// acceptBattleRequestHandler battle
export const acceptBattleRequestHandler = async (req, res) => {
  const { requestId } = req.params;

  try {
    const foundBattleRequest = await findBattleRequestById(requestId);

    if (!foundBattleRequest) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.battleRequestNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const acceptedRequest = await acceptBattleRequestById(requestId);
    if (!acceptedRequest) {
      const notDeleted = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.eventNotDeleted
      );
      myEmitterErrors.emit('error', notDeleted);
      return sendMessageResponse(res, notDeleted.code, notDeleted.message);
    }

    return sendDataResponse(res, 201, { updateRequest: acceptedRequest });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Accept battle request failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
// deleteBattleRequestHandler
export const deleteBattleRequestHandler = async (req, res) => {
  const { requestId } = req.params;
  console.log('requestId', requestId);
  
  try {
    const deletedBattle = await deleteBattleRequestById(requestId);
    if (!deletedBattle) {
      const notDeleted = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.battleRequestNotDeleted
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
