import dbClient from '../utils/dbClient.js';

export const findAllCards = () =>
  dbClient.card.findMany({
    orderBy: {
      createdAt: 'asc',
    },
    include: {
      cardStats: true,  
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
  });

export const findCardBySearchQuery = (cardName) =>
  dbClient.card.findMany({
    where: {
      cardName: {
        startsWith: cardName,
      },
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
  });

export const findCardsByCardType = (cardType) =>
  dbClient.card.findMany({
    where: {
      cardType: cardType,
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
    data: cardArray,
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

export const createMemberCard = (
  serialNumber,
  cardName,
  edition,
  imageUrl,
  memberName,
  packType,
  cardType,
  health,
  attack
) =>
  dbClient.card.create({
    data: {
      serialNumber: serialNumber,
      cardName: cardName,
      edition: edition,
      imageUrl: imageUrl,
      packType: packType,
      cardType: cardType,
      memberCard: {
        create: {
          memberName: memberName,
          health: health,
          attack: attack,
        },
      },
    },
  });

export const createMemberCardFromJSON = (
  serialNumber,
  cardName,
  edition,
  imageUrl,
  memberName,
  packType,
  cardType,
  health,
  attack
) =>
  dbClient.card.create({
    data: {
      serialNumber: serialNumber,
      cardName: cardName,
      edition: edition,
      imageUrl: imageUrl,
      packType: packType,
      cardType: cardType,
      memberCard: {
        create: {
          memberName: memberName,
        },
      },
    },
  });
export const updateMemberCardById = (
  cardId, serialNumber, cardName, edition, rarity, holographic, editable, imageUrl, backgroundColour, availability, memberName, health, attack, cardStat
) =>
  dbClient.card.update({
    where: {
      id: cardId
    },
    data: {
      serialNumber: serialNumber,
      cardName: cardName,
      edition: edition,
      rarity: rarity,
      holographic: holographic,
      editable: editable,
      imageUrl: imageUrl,
      backgroundColour: backgroundColour,
      availability: availability,
      memberCard: {
        update: {
          memberName: memberName,
          health: health,
          attack: attack,
          cardStat: cardStat
        },
      },
    },
    include: {
      memberCard: true
    }
  });

export const createPolicyCard = (
  serialNumber,
  cardName,
  edition,
  imageUrl,
  memberName,
  packType,
  cardType,
  health,
  attack
) =>
  dbClient.card.create({
    data: {
      serialNumber: serialNumber,
      cardName: cardName,
      edition: edition,
      imageUrl: imageUrl,
      packType: packType,
      cardType: cardType,
      policyCard: {
        create: {

        },
      },
    },
  });

export const createPartyCard = (
  serialNumber,
  cardName,
  edition,
  imageUrl,
  memberName,
  packType,
  cardType,
  health,
  attack
) =>
  dbClient.card.create({
    data: {
      serialNumber: serialNumber,
      cardName: cardName,
      edition: edition,
      imageUrl: imageUrl,
      packType: packType,
      cardType: cardType,
      partyCard: {
        create: {

        },
      },
    },
  });
