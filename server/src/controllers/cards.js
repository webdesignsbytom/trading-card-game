import { NotFoundEvent, ServerErrorEvent } from '../event/utils/errorUtils.js';
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import {
  findAllCards,
  findAllCardsFromPack,
  findCardsByCardType,
} from '../domain/cards.js';
import { findUserById } from '../domain/users.js';
import {
  selectCommonCard,
  selectMegaRareCard,
  selectRareCard,
  selectUltimateRarityCard,
  selectUncommonCard,
} from '../utils/selectCard.js';

// Get all cards from all packs
export const getAllCards = async (req, res) => {
  console.log('getAllUsers');
  try {
    const foundCards = await findAllCards();
    console.log('found cards', foundCards);

    if (!foundCards) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundCards
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    foundCards.forEach((card) => {
      console.log('card', card.cardType.toLowerCase());
      let newType = card.cardType.toLowerCase();
      card.cardType = newType;
    });

    return sendDataResponse(res, 200, { cards: foundCards });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get all cards`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getAllCardsFromPackType = async (req, res) => {
  console.log('getAllCardsFromPack');
  const { packType } = req.params;
  console.log('pack', packType);

  try {
    const foundCards = await findAllCardsFromPack(packType);

    if (!foundCards) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundPackType
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { cards: foundCards });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Get all cards from pack ${packType}`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getAllCardsByType = async (req, res) => {
  console.log('getAllCardsByType');
  const { cardType } = req.params;
  console.log('type: ', cardType);

  try {
    const foundCards = await findCardsByCardType(cardType);

    if (!foundCards) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundCardType
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { cards: foundCards });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Get all cards from pack ${packType}`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const buyPacketsOfCards = async (req, res) => {
  console.log('buySinglePack');
  const { numPacks, userId, packType } = req.body;
  console.log('num', numPacks, userId, packType);

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

    console.log('found', foundUser);
    delete foundUser.password;
    delete foundUser.agreedToTerms;
    // For each pack the user wants to buy
    for (let i = 0; i < numPacks; i++) {
      if (packType === 'BREXIT') {
        // Create pack
        let numCards = 22;
        // Get all cards from pack
        const allCardsInPack = await findAllCardsFromPack(packType);
        console.log('all cards in pack', allCardsInPack);
        const commonCards = allCardsInPack.filter(card => card.rarity === 'COMMON')
        const uncommonCards = allCardsInPack.filter(card => card.rarity === 'UNCOMMON')
        const rareCards = allCardsInPack.filter(card => card.rarity === 'RARE')
        const megaRareCards = allCardsInPack.filter(card => card.rarity === 'MEGARARE')
        const ultimateCards = allCardsInPack.filter(card => card.rarity === 'ULTIMATE')

        console.log('common cards', commonCards);
        // For each card find its rariry value
        for (let i = 0; i < numCards; i++) {
          let rarityNum = Math.floor(Math.random() * 200) + 1;
          console.log('rarityNum', rarityNum);

          if (rarityNum < 90) {
            console.log('COMMON');
            selectCommonCard(commonCards);
          }

          if (rarityNum < 151 && rarityNum >= 90) {
            console.log('UNCOMMON');
            selectUncommonCard(uncommonCards);
          }

          if (rarityNum < 181 && rarityNum >= 151) {
            console.log('Rare');
            selectRareCard(rareCards);
          }

          if (rarityNum < 198 && rarityNum >= 181) {
            console.log('Mega Rare');
            selectMegaRareCard(megaRareCards);
          }

          if (rarityNum < 201 && rarityNum >= 198) {
            selectUltimateRarityCard(ultimateCards);
            console.log('Ultimate');
          }
        }
      }
    }
    // return sendDataResponse(res, 200, { cards: foundCards });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Get all cards from pack ${packType}`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
