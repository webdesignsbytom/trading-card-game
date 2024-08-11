import dbClient from '../utils/dbClient.js';

export const createOpenTradeRecord = (
  createdById,
  tradingCardId,
  cardName,
  cardId,
  creatorUsername
) =>
  dbClient.trade.create({
    data: {
      createdById: createdById,
      tradingCardId: tradingCardId,
      cardName: cardName,
      cardId: cardId,
      creatorUsername: creatorUsername
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

export const findAllTrades = (tradeId) =>
  dbClient.trade.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

export const findTradeById = (tradeId) =>
  dbClient.tradeRecord.findFirst({
    where: {
      id: tradeId,
    },
  });

export const deleteTradeById = (tradeId) =>
  dbClient.tradeRecord.delete({
    where: {
      id: tradeId,
    },
  });

export const findAllUserTradeRecords = (userId) =>
  dbClient.tradeRecord.findMany({
    where: {
      OR: [
        {
          createdById: userId,
        },
        {
          receivedById: userId,
        },
      ],
    },
  });
