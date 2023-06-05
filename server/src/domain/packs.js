import dbClient from '../utils/dbClient.js';

export const createBlankPackOfCards = (packType) =>
  dbClient.pack.create({
    data: {
      packType: packType,
    },
    include: {
      cards: true,
    },
  });

export const createBlankPackOfCardsForUser = (packType, userId) =>
  dbClient.pack.create({
    data: {
      packType: packType,
      userId: userId,
    },
    include: {
      cards: true,
    },
  });

export const findPackById = (id) =>
  dbClient.pack.findFirst({
    where: {
      id: id,
    },
    include: {
      cards: true,
    },
  });

export const deletePackbyIdWhenOpened = (packId) =>
  dbClient.pack.delete({
    where: {
      id: packId,
    },
  });
