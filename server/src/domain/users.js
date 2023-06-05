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
      userFunds: true,
    },
  });

export const findUserByEmail = (email) =>
  dbClient.user.findUnique({
    where: { email: email },
    include: {
      profile: true,
      cards: true,
      packs: true,
      userFunds: true,
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
      userFunds: true,
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
      userFunds: true,
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
      collectedStartedPacks: true
    },
    include: {
      profile: true,
      cards: true,
      packs: true,
      userFunds: true,
    },
  });

export const updateUserCardArray = (userId, newCardArray) =>
  dbClient.user.update({
    where: {
      id: userId,
    },
    data: {
      cards: newCardArray
    }
  });

