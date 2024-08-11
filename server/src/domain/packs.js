import dbClient from '../utils/dbClient.js';

export const findAllPacks = () =>
  dbClient.pack.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      cards: true,
    },
  });

export const findAllPacksForUser = (userId) =>
  dbClient.pack.findMany({
    where: {
      userId: userId
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      cards: true,
    },
  });
export const findAllBoxesForUser = (userId) =>
  dbClient.box.findMany({
    where: {
      userId: userId
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      cards: true,
    },
  });
  
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
  });
  
export const createBlankBoxForUser = (boxType, userId) =>
  dbClient.box.create({
    data: {
      boxType: boxType,
      userId: userId,
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
export const findBoxById = (id) =>
  dbClient.box.findFirst({
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

export const deleteBoxbyIdWhenOpened = (boxId) =>
  dbClient.box.delete({
    where: {
      id: boxId,
    },
  });
