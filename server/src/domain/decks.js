import dbClient from '../utils/dbClient.js';

export const findAllDecks = () =>
  dbClient.deck.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

export const findDeckById = (deckId) =>
  dbClient.deck.findFirst({
    where: {
      id: deckId,
    },
    include: {
      cards: true,
    },
  });

export const updateNewDeck = (deckId, deckName, cardsArray) =>
  dbClient.deck.update({
    where: {
      id: deckId,
    },
    data: {
      cards: {

      }
    },
    include: {
      cards: true,
    },
  });

export const findAllUserDecks = (userId) =>
  dbClient.deck.findMany({
    where: {
      userId: userId,
    },
    include: {
      cards: true,
    },
  });

export const createNewDeck = (deckName, userId) =>
  dbClient.deck.create({
    data: {
      deckName: deckName,
      userId: userId,
    },
    include: {
      cards: true,
    },
  });

export const deleteDeckById = (deckId) =>
  dbClient.deck.delete({
    where: {
      id: deckId,
    },
  });

export const addCardInstanceToDeck = (instanceId, deckId) =>
  dbClient.cardInstance.update({
    where: {
      id: instanceId,
    },
    data: {
      deckId: deckId
    }
  });

