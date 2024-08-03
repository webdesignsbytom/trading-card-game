import {
  BadRequestEvent,
  NotFoundEvent,
  ServerErrorEvent,
} from '../event/utils/errorUtils.js';
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import { findCardInstanceById } from '../domain/cards.js';
import {
  createTradeRecordRequest,
  deleteTradeById,
  findTradeById,
  findAllUserTradeRecords,
  findAllTrades,
} from '../domain/trade.js';

// get all trade records
export const getAllTrades = async (req, res) => {
  try {
    const foundTrades = await findAllTrades();

    if (!foundTrades) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterUsers.emit('get-all-users', req.user);
    return sendDataResponse(res, 200, { trades: foundTrades });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get all trades failed: ${err.message}`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// get all user trades
export const getAllUserTrades = async (req, res) => {
  const { userId } = req.params;

  try {
    const foundTrades = await findAllUserTradeRecords(userId);
    if (!foundTrades) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundTrade
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { trades: foundTrades });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get all user trades failed: ${err.message}`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
// add a bank account
export const createTradeCardWithUser = async (req, res) => {
  const { createdById, creatorCardInstanceId, receivedById } = req.body;

  try {
    const foundCreatorInstanceCard = await findCardInstanceById(
      creatorCardInstanceId
    );

    if (!foundCreatorInstanceCard) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundCards
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const createdTradeRecord = await createTradeRecordRequest(
      createdById,
      creatorCardInstanceId,
      receivedById,
      foundCreatorInstanceCard.cardId,
      foundCreatorInstanceCard.name
    );


    if (!createdTradeRecord) {
      const notFound = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.createTradeFail
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 201, { createTrade: createdTradeRecord });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Create trade failed`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// delete trade
export const deleteOpenTrade = async (req, res) => {
  const { tradeId } = req.params;

  try {
    const foundTrade = await findTradeById(tradeId);

    if (!foundTrade) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundTrade
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const deletedTrade = await deleteTradeById(tradeId);

    return sendDataResponse(res, 201, { deletedTrade: deletedTrade });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Delete open trade failed`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
