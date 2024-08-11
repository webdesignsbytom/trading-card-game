import {
  BadRequestEvent,
  MissingFieldEvent,
  NotFoundEvent,
  ServerErrorEvent,
} from '../event/utils/errorUtils.js';
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import { findCardInstanceById, setCardTradingState } from '../domain/cards.js';
import {
  createOpenTradeRecord,
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

    return sendDataResponse(res, 200, { trades: foundTrades });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Get all trades failed: ${err.message}`
    );
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
    const serverError = new ServerErrorEvent(
      req.user,
      `Get all user trades failed: ${err.message}`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
// add a bank account
export const createOpenTradeHandler = async (req, res) => {
  const { createdById, tradingCardId, cardName, cardId, creatorUsername } = req.body;

  try {
    if (!createdById || !tradingCardId || !cardName || !cardId || !creatorUsername) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Trade creation: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    const foundCreatorInstanceCard = await findCardInstanceById(tradingCardId);

    if (!foundCreatorInstanceCard) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundCards
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const createdTradeRecord = await createOpenTradeRecord(
      createdById,
      tradingCardId,
      cardName,
      cardId,
      creatorUsername
    );

    if (!createdTradeRecord) {
      const badRequest = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.createTradeFail
      );
      myEmitterErrors.emit('error', badRequest);
      return sendMessageResponse(res, badRequest.code, badRequest.message);
    }

    const cardUpdated = await setCardTradingState(tradingCardId, true);
    if (!cardUpdated) {
      const badRequest = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.createTradeFail
      );
      myEmitterErrors.emit('error', badRequest);
      return sendMessageResponse(res, badRequest.code, badRequest.message);
    }

    return sendDataResponse(res, 201, {
      createdTradeRecord: createdTradeRecord,
    });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Create new open trade failed`);
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
    const serverError = new ServerErrorEvent(
      req.user,
      `Delete open trade failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
