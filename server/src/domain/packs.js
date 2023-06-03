import dbClient from '../utils/dbClient.js';

export const createBlankPackOfCards = () => dbClient.pack.create({ data: {} });

export const findPackById = (id) => dbClient.pack.findFirst({
    where: {
        id: id,
    },
    include: {
        cards: true
    }
})

export const addCardsToEmptyPack = (fullPack, newPack) =>
  dbClient.pack.update({
    where: {
      id: newPack.id,
    },
    data: {
      cards: fullPack,
    },
  });

export const createNewFullPackOfCards = (fullPack, packId) =>
  dbClient.pack.update({
    where: {
      id: packId,
    },
    data: {
      cards: {
        fullPack,
      },
    },
  });
