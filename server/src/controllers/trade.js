import { NotFoundEvent, ServerErrorEvent } from '../event/utils/errorUtils.js';
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import { findCardInstanceById } from '../domain/cards.js';
import { createTradeRecordRequest, tradeCardInstance } from '../domain/trade.js';

// add a bank account
export const createTradeCardWithUser = async (req, res) => {
  console.log('createTradeCardWithUser');
  const { createdById, creatorCardId, receivedById, recieverCardId } = req.body
  console.log('request', createdById, creatorCardId, receivedById, recieverCardId);

  try {

    const foundCreatorCard = await findCardInstanceById(creatorCardId)
    const foundRecieverCard = await findCardInstanceById(recieverCardId)
    console.log('created card', foundCreatorCard, foundRecieverCard);

    if (!foundCreatorCard || !foundRecieverCard) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundCards
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const createdTradeRecord = await createTradeRecordRequest(createdById, creatorCardId, receivedById, recieverCardId)
    console.log('createdTradeRecord', createdTradeRecord);

    const tradedCardOne = await tradeCardInstance(creatorCardId, receivedById)
    const tradedCardTwo = await tradeCardInstance(recieverCardId, createdById)
    console.log('tradedCardOne', tradedCardOne);
    console.log('tradedCardTwo', tradedCardTwo);

    return sendDataResponse(res, 201, { trade: { tradedCardOne, tradedCardTwo } });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Create trade`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
