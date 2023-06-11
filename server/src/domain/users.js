import dbClient from '../utils/dbClient.js';

export const findAllUsers = () =>
  dbClient.user.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      profile: true,
      cards: true,
      packs: true,
      bank: true,
      loginRecord: true,
    },
  });

export const findUserByEmail = (email) =>
  dbClient.user.findUnique({
    where: { email: email },
    include: {
      profile: true,
      cards: true,
      packs: true,
      bank: true,
      loginRecord: true,
    },
  });

export const findUserByUsername = (username) =>
  dbClient.user.findFirst({
    where: { 
      profile: {
        username: username 
      },
    }, 
  });

export const findUserById = (userId) =>
  dbClient.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      profile: true,
      cards: true,
      packs: true,
      bank: true,
      loginRecord: true,
    },
  });

export const findUserByIdBasic = (userId) =>
  dbClient.user.findUnique({
    where: {
      id: userId,
    },
  });

export const findUserLoginRecord = (userId) =>
  dbClient.loginRecord.findUnique({
    where: {
      userId: userId,
    },
  });

export const updateUserLoginRecordToCollectedReward = (recordId) =>
  dbClient.loginRecord.update({
    where: {
      id: recordId,
    },
    data: {
      collectedReward: true,
      daysInARow: {
        increment: 1,
      },
    },
  });

export const resetUserLoginRecord = (recordId, newLoginTime) =>
  dbClient.loginRecord.update({
    where: {
      id: recordId,
    },
    data: {
      collectedReward: true,
      daysInARow: 1,
      lastLoginDateTime: newLoginTime,
    },
  });

export const updateUserLoginRecordToRewardAvailable = (
  recordId,
  newLoginTime
) =>
  dbClient.loginRecord.update({
    where: {
      id: recordId,
    },
    data: {
      lastLoginDateTime: newLoginTime,
      collectedReward: false,
    },
  });

export const findUsersByRole = (role) =>
  dbClient.user.findMany({
    where: {
      role: role,
    },
    include: {
      profile: true,
      cards: true,
      packs: true,
      bank: true,
      loginRecord: true,
    },
  });

export const createUser = (email, password, username, country, agreedToTerms) =>
  dbClient.user.create({
    data: {
      email: email,
      password: password,
      agreedToTerms: agreedToTerms,
      profile: {
        create: {
          username: username,
          country: country,
        },
      },
    },
  });

export const createNewsletterMembershipForNewMember = (userId, email) =>
  dbClient.newsletterMember.create({
    data: {
      userId: userId,
      email: email,
    },
  });

export const findVerification = (userId) =>
  dbClient.userVerification.findUnique({
    where: {
      userId: userId,
    },
  });

export const findResetRequest = (userId) =>
  dbClient.passwordReset.findUnique({
    where: {
      userId: userId,
    },
  });

export const resetUserPassword = (userId, password) =>
  dbClient.user.update({
    where: {
      id: userId,
    },
    data: {
      password: password,
    },
  });

export const deleteUserById = (userId) =>
  dbClient.user.delete({
    where: {
      id: userId,
    },
  });

export const setStarterCardsToClaimed = (userId) =>
  dbClient.user.update({
    where: {
      id: userId,
    },
    data: {
      collectedStartedPacks: true,
    }
  });

export const updateUserCardArray = (userId, newCardArray) =>
  dbClient.user.update({
    where: {
      id: userId,
    },
    data: {
      cards: newCardArray,
    },
  });
