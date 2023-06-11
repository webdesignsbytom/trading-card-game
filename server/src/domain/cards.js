import dbClient from '../utils/dbClient.js';

export const findAllCards = () =>
  dbClient.card.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      memberCard: true,
      partyCard: true,
      policyCard: true,
    },
  });

export const findAllCardInstances = () =>
  dbClient.cardInstance.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

export const findCardInstanceById = (id) =>
  dbClient.cardInstance.findFirst({
    where: {
      id: id,
    },
  });

export const findCardById = (id) =>
  dbClient.card.findFirst({
    where: {
      id: id,
    },
    include: {
      memberCard: true,
      partyCard: true,
      policyCard: true,
    },
  });

export const findAllUserCardInstances = (userId) =>
  dbClient.cardInstance.findMany({
    where: {
      userId: userId,
    },
  });

export const findCardByName = (cardName) =>
  dbClient.card.findFirst({
    where: {
      cardName: cardName,
    },
    include: {
      memberCard: true,
      partyCard: true,
      policyCard: true,
    },
  });

export const findCardBySearchQuery = (cardName) =>
  dbClient.card.findMany({
    where: {
      cardName: {
        startsWith: cardName,
      },
    },
    include: {
      memberCard: true,
      partyCard: true,
      policyCard: true,
    },
  });

export const findAllCardsFromPack = (packType) =>
  dbClient.card.findMany({
    where: {
      packType: packType,
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      memberCard: true,
      partyCard: true,
      policyCard: true,
    },
  });

export const findCardsByCardType = (cardType) =>
  dbClient.card.findMany({
    where: {
      cardType: cardType,
    },
    include: {
      memberCard: true,
      partyCard: true,
      policyCard: true,
    },
  });

export const findAllPartyCards = () =>
  dbClient.card.findMany({
    where: {
      partyCard: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

export const findAllMemberCards = () =>
  dbClient.card.findMany({
    where: {
      memberCard: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

export const findAllPolicyCards = () =>
  dbClient.card.findMany({
    where: {
      policyCard: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

export const findAllCardsAvailableToBuy = () =>
  dbClient.card.findMany({
    where: {
      availability: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      memberCard: true,
      partyCard: true,
      policyCard: true,
    },
  });

export const createNewInstanceForCard = (cardId, userId, cardName) =>
  dbClient.cardInstance.create({
    data: {
      userId: userId,
      cardId: cardId,
      name: cardName,
    },
  });

export const createNewInstanceForPack = (packId, cardId, cardName) =>
  dbClient.cardInstance.create({
    data: {
      packId: packId,
      cardId: cardId,
      name: cardName,
    },
  });

export const createManyNewInstanceForPack = (cardArray) =>
  dbClient.cardInstance.createMany({
    data: cardArray
  });

export const setCardFromPackToUser = (instanceId, userId) =>
  dbClient.cardInstance.update({
    where: {
      id: instanceId,
    },
    data: {
      userId: userId,
    },
  });
