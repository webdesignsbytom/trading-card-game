import dbClient from '../utils/dbClient.js';

export const createTradeRecordRequest = (createdById, creatorCardId, receivedById, recieverCardId) =>
  dbClient.tradeRecord.create({
    data: {
      createdById: createdById,
      creatorCardId: creatorCardId,
      receivedById: receivedById,
      recieverCardId: recieverCardId
    },
  });

  export const tradeCardInstance = (cardInstanceId, userId) =>
  dbClient.cardInstance.update({
    where: {
      id: cardInstanceId,
    },
    data: {
      userId: userId,
    },
  });
