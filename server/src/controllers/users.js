import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dbClient from '../utils/dbClient.js';
// Components
import { createVerificationInDB, createPasswordResetInDB } from './utils.js';
// Emitters
import { myEmitterUsers } from '../event/userEvents.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import {
  findAllUsers,
  findUserByEmail,
  createUser,
  findVerification,
  findResetRequest,
  findUserById,
  resetUserPassword,
  deleteUserHandlerById,
  findUsersByRole,
  createNewsletterMembershipForNewMember,
  findUserByUsername,
  findUserLoginRecord,
  updateUserLoginRecordToCollectedReward,
  setStarterCardsToClaimed,
  findUserByUsernameForBattle,
  findUserByIdForLogin,
} from '../domain/users.js';
import { createAccessToken } from '../utils/tokens.js';
import {
  sendVerificationEmail,
  sendResetPasswordEmail,
  testEmail,
} from '../utils/sendEmail.js';
// Response messages
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';
import {
  NotFoundEvent,
  ServerErrorEvent,
  MissingFieldEvent,
  RegistrationServerErrorEvent,
  BadRequestEvent,
} from '../event/utils/errorUtils.js';
// Time
import {
  findAllUserCardInstances,
  findCardById,
  setCardFromBoxToUser,
  setCardFromPackToUser,
} from '../domain/cards.js';
import {
  deleteBoxbyIdWhenOpened,
  deletePackByIdHandlerWhenOpened,
  findAllBoxesForUser,
  findAllPacksForUser,
  findBoxById,
  findPackById,
} from '../domain/packs.js';
import { starterPackNames } from '../utils/constants.js';
import { createSinglePacksOfCardsForUser } from '../utils/createPackets.js';
import { collectLoginReward } from '../domain/rewards.js';
// Password hash
const hashRate = 8;

export const getAllUsersHandler = async (req, res) => {
  try {
    const foundUsers = await findAllUsers();

    if (!foundUsers) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    foundUsers.forEach((user) => {
      delete user.password;
    });

    // myEmitterUsers.emit('get-all-users', req.user);
    return sendDataResponse(res, 200, { users: foundUsers });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get all users failed`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getUserByIdHandler = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return sendDataResponse(res, 400, {
      email: 'Missing userId',
    });
  }

  try {
    const foundUser = await findUserById(userId);
    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    delete foundUser.password;
    delete foundUser.agreedToTerms;

    // myEmitterUsers.emit('get-user-by-id', req.user);
    return sendDataResponse(res, 200, { user: foundUser });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get user by ID failed`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getLoginUserDataHandler = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return sendDataResponse(res, 400, {
      email: 'Missing userId',
    });
  }

  try {
    const foundUser = await findUserByIdForLogin(userId);
    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    delete foundUser.password;
    delete foundUser.agreedToTerms;

    // myEmitterUsers.emit('get-user-by-id', req.user);
    return sendDataResponse(res, 200, { user: foundUser });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get user by ID failed`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getUserByEmailHandler = async (req, res) => {
  const { email } = req.params;

  if (!email) {
    return sendDataResponse(res, 400, {
      email: 'Missing email',
    });
  }

  const lowerCaseEmail = email.toLowerCase();
  try {
    const foundUser = await findUserByEmail(lowerCaseEmail);

    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    delete foundUser.password;
    delete foundUser.agreedToTerms;

    myEmitterUsers.emit('get-user-by-id', req.user);
    return sendDataResponse(res, 200, { user: foundUser });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Get user by email address failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getUserByUsernameHandler = async (req, res) => {
  const { username } = req.params;

  if (!username) {
    return sendDataResponse(res, 400, {
      email: 'Missing username',
    });
  }

  const lowerCaseUsername = username.toLowerCase();

  try {
    const foundUser = await findUserByUsername(lowerCaseUsername);

    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    delete foundUser.password;
    delete foundUser.agreedToTerms;

    // myEmitterUsers.emit('get-user-by-username', req.user);
    return sendDataResponse(res, 200, { user: foundUser });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Get user by username failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const findUserForBattleHandler = async (req, res) => {
  const { username } = req.params;

  if (!username) {
    return sendDataResponse(res, 400, {
      email: 'Missing username',
    });
  }

  const lowerCaseUsername = username.toLowerCase();

  try {
    const foundUser = await findUserByUsernameForBattle(lowerCaseUsername);

    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const user = { id: foundUser.user.id, username: foundUser.username };

    return sendDataResponse(res, 200, { battleUser: user });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Get user by username failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const registerNewUserHandler = async (req, res) => {
  const { email, password, username, country, agreedToTerms } = req.body;

  const lowerCaseEmail = email.toLowerCase();

  try {
    if (
      !lowerCaseEmail ||
      !password ||
      !username ||
      !country ||
      !agreedToTerms
    ) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Registration: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    const foundUser = await findUserByEmail(lowerCaseEmail);
    const foundUsername = await findUserByUsername(username);

    if (foundUser) {
      return sendDataResponse(res, 400, { email: EVENT_MESSAGES.emailInUse });
    }
    if (foundUsername) {
      return sendDataResponse(res, 400, {
        username: EVENT_MESSAGES.usernameInUse,
      });
    }

    const hashedPassword = await bcrypt.hash(password, hashRate);

    const createdUser = await createUser(
      lowerCaseEmail,
      hashedPassword,
      username,
      country,
      agreedToTerms
    );

    if (!createdUser) {
      const notCreated = new BadRequestEvent(
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.createUserFail
      );
      myEmitterErrors.emit('error', notCreated);
      return sendMessageResponse(res, notCreated.code, notCreated.message);
    }

    let userId = createdUser.id;

    delete createdUser.password;
    delete createdUser.updatedAt;

    // const uniqueString = uuid() + createdUser.id;
    // const hashedString = await bcrypt.hash(uniqueString, hashRate);

    // await createVerificationInDB(createdUser.id, hashedString);
    // await sendVerificationEmail(
    //   createdUser.id,
    //   createdUser.email,
    //   uniqueString
    // );

    const starterPacks = [];
    const cardsInPackArray = [];

    const createdPack1 = await createSinglePacksOfCardsForUser(
      starterPackNames[0],
      userId
    );
    starterPacks.push(createdPack1.cardInstanceArray);
    cardsInPackArray.push(createdPack1.cards);

    const createdPack2 = await createSinglePacksOfCardsForUser(
      starterPackNames[1],
      userId
    );
    starterPacks.push(createdPack2.cardInstanceArray);
    cardsInPackArray.push(createdPack2.cards);

    const createdPack3 = await createSinglePacksOfCardsForUser(
      starterPackNames[2],
      userId
    );
    starterPacks.push(createdPack3.cardInstanceArray);
    cardsInPackArray.push(createdPack3.cards);

    return sendDataResponse(res, 201, { createdUser });
  } catch (err) {
    // Error
    const serverError = new RegistrationServerErrorEvent(
      `Register Server error`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getAllCardsHandlerForUserHandler = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return sendDataResponse(res, 400, {
      email: 'Missing userId',
    });
  }

  try {
    const foundUser = await findUserById(userId);
    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const cardsToFindArray = foundUser.cards;

    const userCardArray = [];

    for (let index = 0; index < cardsToFindArray.length; index++) {
      const card = cardsToFindArray[index];
      const foundCard = await findCardById(card.cardId);
      userCardArray.push(foundCard);
    }

    return sendDataResponse(res, 200, { cards: userCardArray });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Get all cards for user`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// get all packs for user
export const getAllUserPackersHandler = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return sendDataResponse(res, 400, {
      email: 'Missing userId',
    });
  }

  try {
    const foundUser = await findUserById(userId);
    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const foundPacks = await findAllPacksForUser(userId);

    return sendDataResponse(res, 200, { packs: foundPacks });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Get all packs for user`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getAllUserBoxPackHandler = async (req, res) => {
  console.log('getAllUserBoxPackHandler');
  const { userId } = req.params;

  if (!userId) {
    return sendDataResponse(res, 400, {
      email: 'Missing userId',
    });
  }

  try {
    const foundUser = await findUserById(userId);
    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const foundBoxes = await findAllBoxesForUser(userId);

    return sendDataResponse(res, 200, { boxes: foundBoxes });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Get all boxes for user`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// get all user card instances
export const getAllUserCardInstanceHandler = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return sendDataResponse(res, 400, {
      email: 'Missing userId',
    });
  }

  try {
    const foundUser = await findUserById(userId);
    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const foundInstances = await findAllUserCardInstances(userId);

    return sendDataResponse(res, 200, { cardInstances: foundInstances });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Get all card instances for user`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const openPacketHandler = async (req, res) => {
  const { packId, userId } = req.body;

  if (!userId || !packId) {
    return sendDataResponse(res, 400, {
      email: 'Missing userId or userId',
    });
  }

  try {
    const foundUser = await findUserById(userId);
    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const foundPack = await findPackById(packId);
    if (!foundPack) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundPack
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // Emtpy card array
    let newCardsArray = [];

    for (let index = 0; index < foundPack.cards.length; index++) {
      const card = foundPack.cards[index];
      let updatedCardish = await setCardFromPackToUser(card.id, userId);
      const newCard = await findCardById(card.cardId);
      newCardsArray.push(newCard);
    }

    // Delete pack once opened
    const deletedPack = await deletePackByIdHandlerWhenOpened(packId);
    if (!deletedPack) {
      const badRequest = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.failedToDeletePack
      );
      myEmitterErrors.emit('error', badRequest);
      return sendMessageResponse(res, badRequest.code, badRequest.message);
    }

    const updatedUser = await findUserById(userId);
    if (!updatedUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, {
      cards: newCardsArray,
      deletedPack: deletedPack,
      updatedUser: updatedUser,
    });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Open pack and add to card instances failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const openBoxPackHandler = async (req, res) => {
  console.log('openBoxPackHandler');
  const { boxId, userId } = req.body;

  if (!userId || !boxId) {
    return sendDataResponse(res, 400, {
      email: 'Missing userId or boxId',
    });
  }

  try {
    const foundUser = await findUserById(userId);
    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const foundBox = await findBoxById(boxId);
    if (!foundBox) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundBox
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // Empty card aray
    let newCardsArray = [];

    for (let index = 0; index < foundBox.cards.length; index++) {
      const card = foundBox.cards[index];
      let updatedCardish = await setCardFromBoxToUser(card.id, userId);
      const newCard = await findCardById(card.cardId);
      newCardsArray.push(newCard);
    }

    // Delete empty box once opened
    const deletedBox = await deleteBoxbyIdWhenOpened(boxId);
    if (!deletedBox) {
      const badRequest = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.failedToDeleteBox
      );
      myEmitterErrors.emit('error', badRequest);
      return sendMessageResponse(res, badRequest.code, badRequest.message);
    }

    const updatedUser = await findUserById(userId);
    if (!updatedUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, {
      cards: newCardsArray,
      deletedBox: deletedBox,
      updatedUser: updatedUser,
    });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Open box and add to card instances failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const collectDailyRewardHandler = async (req, res) => {
  const { userId } = req.params;
  const { daysInARow } = req.body;

  if (!userId) {
    return sendDataResponse(res, 400, {
      email: 'Missing userId',
    });
  }

  if (!daysInARow) {
    return sendDataResponse(res, 400, {
      email: 'Missing daysInARow',
    });
  }

  try {
    const foundRecord = await findUserLoginRecord(userId);
    if (!foundRecord) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // Update collected reward to true and add one day to record
    await updateUserLoginRecordToCollectedReward(foundRecord.id);

    // Create reward
    const loginReward = await collectLoginReward(daysInARow, userId);
    if (!loginReward) {
      const badRequest = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.createRewardFail
      );
      myEmitterErrors.emit('error', badRequest);
      return sendMessageResponse(res, badRequest.code, badRequest.message);
    }

    return sendDataResponse(res, 200, {
      reward: loginReward,
    });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Get daily reward failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const collectStarterPacksHandler = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return sendDataResponse(res, 400, {
      email: 'Missing userId',
    });
  }

  try {
    const updatedRecord = await setStarterCardsToClaimed(userId);

    if (!updatedRecord) {
      const badRequest = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        'Failed to set starter packs to claimed'
      );
      myEmitterErrors.emit('error', badRequest);
      return sendMessageResponse(res, badRequest.code, badRequest.message);
    }

    const updatedUser = await findUserById(userId);
    if (!updatedUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, {
      user: updatedUser,
    });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Get claim new user packs`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// export const verifyUser = async (req, res) => {
//   console.log('Verifying user');
//   const { userId, uniqueString } = req.params;

//   try {
//     const foundVerification = await findVerification(userId);

//     if (!foundVerification) {
//       const missingVerification = new NotFoundEvent(
//         userId,
//         EVENT_MESSAGES.verificationNotFound
//       );
//       myEmitterErrors.emit('error', missingVerification);
//       return sendMessageResponse(
//         res,
//         404,
//         EVENT_MESSAGES.verificationNotFoundReturnMessage
//       );
//     }

//     const { expiresAt } = foundVerification;
//     if (expiresAt < Date.now()) {
//       await dbClient.userVerification.delete({ where: { userId } });
//       await dbClient.user.delete({ where: { userId } });
//       return sendMessageResponse(res, 401, EVENT_MESSAGES.expiredLinkMessage);
//     }

//     const isValidString = await bcrypt.compare(
//       uniqueString,
//       foundVerification.uniqueString
//     );

//     if (!isValidString) {
//       return sendMessageResponse(
//         res,
//         401,
//         EVENT_MESSAGES.invalidVerificationMessage
//       );
//     }

//     const updatedUser = await dbClient.user.update({
//       where: { id: userId },
//       data: { isVerified: true },
//     });

//     delete updatedUser.password;

//     const token = createAccessToken(updatedUser.id, updatedUser.email);

//     await dbClient.userVerification.delete({ where: { userId } });

//     sendDataResponse(res, 200, { token, user: updatedUser });
//     myEmitterUsers.emit('verified', updatedUser);
//   } catch (err) {
//     // Create error instance
//     const serverError = new RegistrationServerErrorEvent(
//       `Verify New User Server error`
//     );
//     myEmitterErrors.emit('error', serverError);
//     sendMessageResponse(res, serverError.code, serverError.message);
//     throw err;
//   }
// };

// export const resendVerificationEmail = async (req, res) => {
//   console.log('resendVerificationEmail');
//   const { email } = req.params;

//   if (!email) {
//     const badRequest = new BadRequestEvent(
//       EVENT_MESSAGES.missingUserIdentifier
//     );
//     return sendMessageResponse(res, badRequest.code, badRequest.message);
//   }

//   try {
//     const foundUser = await dbClient.user.findUnique({ where: { email } });
//     if (!foundUser) {
//       const notFound = new NotFoundEvent('user', 'email');
//       return sendMessageResponse(res, notFound.code, notFound.message);
//     }

//     const foundVerification = await dbClient.userVerification.findUnique({
//       where: { userId: foundUser.id },
//     });

//     if (!foundVerification) {
//       const serverError = new ServerConflictError(
//         email,
//         EVENT_MESSAGES.verificationNotFoundReturnMessage
//       );

//       myEmitterErrors.emit('verification-not-found', serverError);
//       return sendMessageResponse(res, serverError.code, serverError.message);
//     }

//     await dbClient.userVerification.delete({ where: { userId: foundUser.id } });

//     const uniqueString = uuid() + foundUser.id;
//     const hashedString = await bcrypt.hash(uniqueString, hashRate);
//     await createVerificationInDB(foundUser.id, hashedString);

//     await sendVerificationEmail(foundUser.id, foundUser.email, uniqueString);
//     myEmitterUsers.emit('resend-verification', foundUser);
//     return sendMessageResponse(res, 201, 'Verification email resent');
//   } catch (err) {
//     // Create error instance
//     const serverError = new RegistrationServerErrorEvent(
//       `Verify New User Server error`
//     );
//     myEmitterErrors.emit('error', serverError);
//     sendMessageResponse(res, serverError.code, serverError.message);
//     throw err;
//   }
// };

// export const sendPasswordReset = async (req, res) => {
//   const { resetEmail } = req.body;

//   if (!resetEmail) {
//     const badRequest = new BadRequestEvent(
//       null,
//       'Reset Password - Missing email'
//     );
//     myEmitterErrors.emit('error', badRequest);
//     return sendMessageResponse(res, badRequest.code, badRequest.message);
//   }

//   const lowerCaseEmail = resetEmail.toLowerCase();

//   try {
//     const foundUser = await findUserByEmail(lowerCaseEmail);

//     if (!foundUser) {
//       return sendDataResponse(res, 404, {
//         email: EVENT_MESSAGES.emailNotFound,
//       });
//     }
//     // Create unique string for verify URL
//     const uniqueString = uuid() + foundUser.id;
//     const hashedString = await bcrypt.hash(uniqueString, hashRate);

//     await createPasswordResetInDB(foundUser.id, hashedString);
//     await sendResetPasswordEmail(foundUser.id, foundUser.email, uniqueString);
//   } catch (err) {
//     // Create error instance
//     const serverError = new ServerErrorEvent(
//       `Request password reset Server error`
//     );
//     myEmitterErrors.emit('error', serverError);
//     sendMessageResponse(res, serverError.code, serverError.message);
//     throw err;
//   }
// };

// export const resetPassword = async (req, res) => {
//   const { userId, uniqueString } = req.params;
//   const { password, confirmPassword } = req.body;

//   if (password !== confirmPassword) {
//     const badRequest = new BadRequestEvent(
//       userId,
//       EVENT_MESSAGES.passwordMatchError
//     );
//     myEmitterErrors.emit('error', badRequest);
//     return sendMessageResponse(res, badRequest.code, badRequest.message);
//   }

//   try {
//     const foundResetRequest = await findResetRequest(userId);

//     if (!foundResetRequest) {
//       const missingRequest = new NotFoundEvent(
//         userId,
//         EVENT_MESSAGES.verificationNotFound
//       );
//       myEmitterErrors.emit('error', missingRequest);
//       return sendMessageResponse(res, 404, EVENT_MESSAGES.passwordResetError);
//     }

//     const { expiresAt } = foundResetRequest;
//     if (expiresAt < Date.now()) {
//       await dbClient.passwordReset.delete({ where: { userId } });
//       await dbClient.user.delete({ where: { userId } });
//       return sendMessageResponse(res, 401, EVENT_MESSAGES.expiredLinkMessage);
//     }

//     const isValidString = await bcrypt.compare(
//       uniqueString,
//       foundResetRequest.uniqueString
//     );

//     if (!isValidString) {
//       return sendMessageResponse(
//         res,
//         401,
//         EVENT_MESSAGES.invalidVerificationMessage
//       );
//     }

//     const foundUser = await findUserById(userId);

//     const hashedPassword = await bcrypt.hash(password, hashRate);

//     const updatedUser = await resetUserPassword(foundUser.id, hashedPassword);

//     delete updatedUser.password;

//     await dbClient.passwordReset.delete({ where: { userId } });

//     sendDataResponse(res, 200, { user: updatedUser });
//     myEmitterUsers.emit('password-reset', updatedUser);
//   } catch (err) {
//     // Error
//     const serverError = new ServerErrorEvent(`Verify New User Server error`);
//     myEmitterErrors.emit('error', serverError);
//     sendMessageResponse(res, serverError.code, serverError.message);
//     throw err;
//   }
// };

// export const updateUser = async (req, res) => {
//   console.log('update user');
//   const userId = req.params.userId;
//   console.log('userId: ', userId);
//   const { email, firstName, lastName, country } = req.body;
//   console.log('reqbody: ', req.body);

//   try {
//     const foundUser = await findUserById(userId);

//     if (!foundUser) {
//       const notFound = new NotFoundEvent(
//         req.user,
//         EVENT_MESSAGES.notFound,
//         EVENT_MESSAGES.userNotFound
//       );
//       myEmitterErrors.emit('error', notFound);
//       return sendMessageResponse(res, notFound.code, notFound.message);
//     }

//     // const updatedUser = await updateUserById(
//     //   userId,
//     //   email,
//     //   firstName,
//     //   lastName,
//     //   country
//     // );

//     // delete updatedUser.password;
//     // delete updatedUser.agreedToTerms;

//     // // myEmitterUsers.emit('update-user', req.user);
//     // return sendDataResponse(res, 200, { user: updatedUser });
//   } catch (err) {
//     // Error
//     const serverError = new ServerErrorEvent(`Verify New User Server error`);
//     myEmitterErrors.emit('error', serverError);
//     sendMessageResponse(res, serverError.code, serverError.message);
//     throw err;
//   }
// };

export const deleteUserHandler = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return sendDataResponse(res, 400, {
      email: 'Missing userId',
    });
  }

  try {
    const foundUser = await findUserById(userId);
    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    await deleteUserHandlerById(userId);

    const updatedUserArray = await findAllUsers();

    return sendDataResponse(res, 200, {
      deletedUser: foundUser,
      updatedUserArray: updatedUserArray,
      message: `User ${foundUser.email} deleted`,
    });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(
      req.user,
      `Delete user by ID failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
