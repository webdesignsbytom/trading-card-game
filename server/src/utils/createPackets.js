import { findAllCardsFromPack } from '../domain/cards.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import { NotFoundEvent } from '../event/utils/errorUtils.js';
import { EVENT_MESSAGES, sendMessageResponse } from './responses.js';
import {
  cheakForHolographic,
  createHolographicCardForPack,
  selectCommonCard,
  selectMegaRareCard,
  selectRareCard,
  selectUltimateRarityCard,
  selectUncommonCard,
} from './selectCard.js';

export async function createPacksOfCards(numPacks, packType) {
  let purchasedPacksArray = [];
  // For each pack the user wants to buy
  for (let i = 0; i < numPacks; i++) {
    // Create pack
    let numCards = 6;
    let packArray = [];
    let containsHolo = false;

    // Get all cards from pack
    const allCardsInPack = await findAllCardsFromPack(packType);
    const commonCards = allCardsInPack.filter(
      (card) => card.rarity === 'COMMON'
    );
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
    const holoCard = await createHolographicCardForPack(rareCards, megaRareCards)
    console.log('HOLOCARD: ', holoCard);
    packArray.push(holoCard);
    // Create one policy card

    // For each card find its rariry value
    while (packArray.length < numCards && containsHolo === false) {
      let rarityNum = Math.floor(Math.random() * 200) + 1;

      if (rarityNum < 90) {
        console.log('COMMON');
        const newCard = await selectCommonCard(commonCards);

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
          cheakForHolographic(packArray, numCards);
          packArray.push(newCard);
        }
      }

      if (rarityNum < 151 && rarityNum >= 90) {
        console.log('UNCOMMON');
        const newCard = await selectUncommonCard(uncommonCards);

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
          cheakForHolographic(packArray, numCards);
          packArray.push(newCard);
        }
      }

      if (rarityNum < 181 && rarityNum >= 151) {
        console.log('Rare');
        const newCard = await selectRareCard(rareCards);

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
          cheakForHolographic(packArray, numCards);
          packArray.push(newCard);
        }
      }

      if (rarityNum < 198 && rarityNum >= 181) {
        console.log('Mega Rare');
        const newCard = await selectMegaRareCard(megaRareCards);

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
          cheakForHolographic(packArray, numCards);
          packArray.push(newCard);
        }
      }

      if (rarityNum < 201 && rarityNum >= 198) {
        console.log('Ultimate');
        const newCard = await selectUltimateRarityCard(ultimateCards);

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
          cheakForHolographic(packArray, numCards);
          packArray.push(newCard);
        }
      }

      if (packArray.length === numCards) {
        console.log('PACK FULL');
        // containsHolo = true;
      }
    }

    // End of while
    console.log('END OF WHILE');
    if (!packArray) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.createPackTypeFail
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    purchasedPacksArray.push(packArray);
  }

  return purchasedPacksArray;
}
