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
    }
  });

export const createNewInstanceForCard = (cardId, userId) =>
  dbClient.cardInstance.create({
    data: {
      userId: userId,
      cardId: cardId,
    },
  });

export const createNewInstanceForPack = (packId, cardId) =>
  dbClient.cardInstance.create({
    data: {
      packId: packId,
      cardId: cardId,
    },
  });
