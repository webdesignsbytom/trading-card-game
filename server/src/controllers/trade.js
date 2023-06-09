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
  tradeCardInstance,
  findAllUserTradeRecords,
  findAllTrades,
} from '../domain/trade.js';

// get all trade records
export const getAllTrades = async (req, res) => {
  console.log('getAllTrades');
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
    const serverError = new ServerErrorEvent(req.user, `Get all users`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// get all user trades
export const getAllUserTrades = async (req, res) => {
  console.log('getAllUserTrades');
  const userId = req.params.userId;
  console.log('xxx', userId);

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

    console.log('trades', foundTrades);

    return sendDataResponse(res, 200, { trades: foundTrades });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get user by ID`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
// add a bank account
export const createTradeCardWithUser = async (req, res) => {
  console.log('createTradeCardWithUser');
  const { createdById, creatorCardInstanceId, receivedById } = req.body;
  console.log('request', createdById, creatorCardInstanceId, receivedById);

  try {
    const foundCreatorInstanceCard = await findCardInstanceById(
      creatorCardInstanceId
    );
    console.log('created card', foundCreatorInstanceCard);

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

    console.log('createdTradeRecord', createdTradeRecord);

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
    const serverError = new ServerErrorEvent(req.user, `Create trade`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// delete trade
export const deleteOpenTrade = async (req, res) => {
  console.log('deleteOpenTrade');
  console.log('req', req.params);
  const tradeId = req.params.tradeId;
  console.log('tradeId', tradeId);

  try {
    const foundTrade = await findTradeById(tradeId);
    console.log('foundTrade card', foundTrade);

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
    const serverError = new ServerErrorEvent(req.user, `Create trade`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
