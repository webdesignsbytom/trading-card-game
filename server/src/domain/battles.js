import dbClient from '../utils/dbClient.js';

export const findAllBattles = () =>
  dbClient.battle.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

export const findAllUserBattleRequests = (userId) =>
  dbClient.battleRequest.findMany({
    where: {
      id: userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

export const findBattleById = (battleId) =>
  dbClient.battle.findFirst({
    where: {
      id: battleId,
    },
  });

export const findBattleRequestById = (requestId) =>
  dbClient.battleRequest.findFirst({
    where: {
      id: requestId,
    },
  });

export const acceptBattleRequestById = (requestId) =>
  dbClient.battleRequest.findFirst({
    where: {
      id: requestId,
    },
    data: {
      receiverConfirmed: true,
    },
  });

export const deleteBattleRequestById = (requestId) =>
  dbClient.battleRequest.delete({
    where: {
      id: requestId,
    },
  });

export const findAllUserBattles = (userId) =>
  dbClient.battle.findMany({
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

export const updateBattleConfirmOpponent = (battleId) =>
  dbClient.battle.update({
    where: {
      id: battleId,
    },
    data: {
      playerTwoConfirmed: true,
    },
  });

export const createNewBattle = (
  createdById,
  receivedById,
  foundUser,
  foundOpponent
) =>
  dbClient.battle.create({
    data: {
      createdById: createdById,
      receivedById: receivedById,
      playerOneUserName: foundUser,
      playerTwoUserName: foundOpponent,
    },
  });

export const createNewBattleRequest = (
  senderId,
  receiverId,
  senderUsername,
  receiverUsername
) =>
  dbClient.battleRequest.create({
    data: {
      senderId: senderId,
      receiverId: receiverId,
      senderUsername: senderUsername,
      receiverUsername: receiverUsername,
      senderConfirmed: true, // Automatically confirm the sender
      receiverConfirmed: false, // Initial state, receiver not yet confirmed
    },
  });

export const deleteBattleById = (battleId) =>
  dbClient.battle.delete({
    where: {
      id: battleId,
    },
  });
