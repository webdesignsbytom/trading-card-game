import dbClient from '../utils/dbClient.js';

export const createBlankPackOfCards = (packType) =>
  dbClient.pack.create({
    data: {
      packType: packType,
    },
  });

export const createBlankPackOfCardsForUser = (packType, userId) =>
  dbClient.pack.create({
    data: {
      packType: packType,
      userId: userId,
    },
  });

export const findPackById = (id) =>
  dbClient.pack.findFirst({
    where: {
      id: id,
    },
  });

export const addCardsToEmptyPack = (myJsonString, packId) =>
  dbClient.pack.update({
    where: {
      id: packId,
    },
    data: {
      cards: myJsonString,
    },
  });

export const deletePackbyIdWhenOpened = (packId) =>
  dbClient.pack.delete({
    where: {
      id: packId,
    },
  });
