import { findAllCardsFromPack } from '../domain/cards.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import { NotFoundEvent } from '../event/utils/errorUtils.js';
import { NumCardsInPack } from './constants.js';
import { EVENT_MESSAGES, sendMessageResponse } from './responses.js';
import {
  createHolographicCardForPack,
  selectCommonCard,
  selectMegaRareCard,
  selectRareCard,
  selectUltimateRarityCard,
  selectUncommonCard,
} from './selectCard.js';

export async function createCardsForPack(packType, packId) {
  console.log('CREated');
  // Create pack
  let numCards = NumCardsInPack;
  console.log('NUMCARDS', numCards);
  let packArray = [];

  // Get all cards from pack
  const allCardsInPack = await findAllCardsFromPack(packType);
  const commonCards = allCardsInPack.filter((card) => card.rarity === 'COMMON');
  const uncommonCards = allCardsInPack.filter(
    (card) => card.rarity === 'UNCOMMON'
  );
  const rareCards = allCardsInPack.filter((card) => card.rarity === 'RARE');
  const megaRareCards = allCardsInPack.filter(
    (card) => card.rarity === 'MEGARARE'
  );
  const ultimateCards = allCardsInPack.filter(
    (card) => card.rarity === 'ULTIMATE'
  );

  // Create required cards for pack.

  // Create one holo card
  const holoCard = await createHolographicCardForPack(rareCards, megaRareCards);
  holoCard.packId = packId;
  console.log('HOLOCARD: ', holoCard);
  packArray.push(holoCard);

  // For each card find its rariry value
  while (packArray.length < numCards) {
    let rarityNum = Math.floor(Math.random() * 200) + 1;

    if (rarityNum < 90) {
      console.log('COMMON');
      const newCard = await selectCommonCard(commonCards, packId);

      if (!newCard) {
        const notFound = new NotFoundEvent(
          req.user,
          EVENT_MESSAGES.notFound,
          EVENT_MESSAGES.createCardsFail
        );
        myEmitterErrors.emit('error', notFound);
        return sendMessageResponse(res, notFound.code, notFound.message);
      }

      if (packArray.includes(newCard)) {
        continue;
      } else {
        packArray.push(newCard);
      }
    }

    if (rarityNum < 151 && rarityNum >= 90) {
      console.log('UNCOMMON');
      const newCard = await selectUncommonCard(uncommonCards, packId);

      if (!newCard) {
        const notFound = new NotFoundEvent(
          req.user,
          EVENT_MESSAGES.notFound,
          EVENT_MESSAGES.createCardsFail
        );
        myEmitterErrors.emit('error', notFound);
        return sendMessageResponse(res, notFound.code, notFound.message);
      }

      if (packArray.includes(newCard)) {
        continue;
      } else {
        packArray.push(newCard);
      }
    }

    if (rarityNum < 181 && rarityNum >= 151) {
      console.log('Rare');
      const newCard = await selectRareCard(rareCards, packId);

      if (!newCard) {
        const notFound = new NotFoundEvent(
          req.user,
          EVENT_MESSAGES.notFound,
          EVENT_MESSAGES.createCardsFail
        );
        myEmitterErrors.emit('error', notFound);
        return sendMessageResponse(res, notFound.code, notFound.message);
      }
      if (packArray.includes(newCard)) {
        continue;
      } else {
        packArray.push(newCard);
      }
    }

    if (rarityNum < 198 && rarityNum >= 181) {
      console.log('Mega Rare');
      const newCard = await selectMegaRareCard(megaRareCards, packId);

      if (!newCard) {
        const notFound = new NotFoundEvent(
          req.user,
          EVENT_MESSAGES.notFound,
          EVENT_MESSAGES.createCardsFail
        );
        myEmitterErrors.emit('error', notFound);
        return sendMessageResponse(res, notFound.code, notFound.message);
      }
      if (packArray.includes(newCard)) {
        continue;
      } else {
        packArray.push(newCard);
      }
    }

    if (rarityNum < 201 && rarityNum >= 198) {
      console.log('Ultimate');
      const newCard = await selectUltimateRarityCard(ultimateCards, packId);

      if (!newCard) {
        const notFound = new NotFoundEvent(
          req.user,
          EVENT_MESSAGES.notFound,
          EVENT_MESSAGES.createCardsFail
        );
        myEmitterErrors.emit('error', notFound);
        return sendMessageResponse(res, notFound.code, notFound.message);
      }
      if (packArray.includes(newCard)) {
        continue;
      } else {
        packArray.push(newCard);
      }
    }
  }

  console.log('END OF WHILE');
  // End of while
  if (!packArray) {
    const notFound = new NotFoundEvent(
      req.user,
      EVENT_MESSAGES.notFound,
      EVENT_MESSAGES.createPackTypeFail
    );
    myEmitterErrors.emit('error', notFound);
    return sendMessageResponse(res, notFound.code, notFound.message);
  }

  console.log('END');
  return packArray;
}
