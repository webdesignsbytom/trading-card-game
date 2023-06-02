import { findAllCardsFromPack } from '../domain/cards.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import { NotFoundEvent } from '../event/utils/errorUtils.js';
import { EVENT_MESSAGES, sendMessageResponse } from './responses.js';
import {
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
    if (packType === 'BREXIT') {
      // Create pack
      let numCards = 12;
      let packArray = [];
      // Get all cards from pack
      const allCardsInPack = await findAllCardsFromPack(packType);
      console.log('all cards in pack', allCardsInPack);
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

      console.log('common cards', commonCards);
      // For each card find its rariry value
      for (let i = 0; i < numCards; i++) {
        let rarityNum = Math.floor(Math.random() * 200) + 1;
        console.log('rarityNum', rarityNum);

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
          console.log('NEWCARD', newCard);
          packArray.push(newCard);
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
          packArray.push(newCard);
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
          packArray.push(newCard);
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
          packArray.push(newCard);
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
          packArray.push(newCard);
        }
      }

      console.log('Pack Array', packArray);

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
  }
  return purchasedPacksArray;
}
