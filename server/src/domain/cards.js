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
