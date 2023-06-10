import dbClient from '../utils/dbClient.js';

export const createTradeRecordRequest = (
  createdById,
  creatorCardInstanceId,
  receivedById,
  creatorCardId,
  creatorCardName
) =>
  dbClient.tradeRecord.create({
    data: {
      createdById: createdById,
      creatorCardInstanceId: creatorCardInstanceId,
      receivedById: receivedById,
      creatorCardId: creatorCardId,
      creatorCardName: creatorCardName,
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
  dbClient.tradeRecord.findMany({
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
