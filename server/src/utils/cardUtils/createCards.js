import {
  findAllCardsAvailableToBuy,
  findAllCardsFromPack,
} from '../../domain/cards.js';
import { myEmitterErrors } from '../../event/errorEvents.js';
import { NotFoundEvent } from '../../event/utils/errorUtils.js';
import { NumCardsInPack } from '../constants.js';
import { EVENT_MESSAGES, sendMessageResponse } from '../responses.js';
import {
  createHolographicCardForPack,
  selectCommonCard,
  selectMegaRareCard,
  selectRareCard,
  selectUltimateRarityCard,
  selectUncommonCard,
} from './selectCard.js';

// Create one random card
export async function createSingleCardsForUser(packType, packId) {
  // Return all cards
  const allCardsAvailable = await findAllCardsAvailableToBuy();

  const commonCards = allCardsAvailable.filter(
    (card) => card.rarity === 'COMMON'
  );
  const uncommonCards = allCardsAvailable.filter(
    (card) => card.rarity === 'UNCOMMON'
  );
  const rareCards = allCardsAvailable.filter((card) => card.rarity === 'RARE');
  const megaRareCards = allCardsAvailable.filter(
    (card) => card.rarity === 'MEGARARE'
  );
  const ultimateCards = allCardsAvailable.filter(
    (card) => card.rarity === 'ULTIMATE'
  );

  let rarityNum = Math.floor(Math.random() * 200) + 1;
  // Pick one card
  if (rarityNum < 90) {
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
    return newCard;
  }

  if (rarityNum < 151 && rarityNum >= 90) {
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
    return newCard;
  }

  if (rarityNum < 181 && rarityNum >= 151) {
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
    return newCard;
  }

  if (rarityNum < 198 && rarityNum >= 181) {
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
    return newCard;
  }

  if (rarityNum < 201 && rarityNum >= 198) {
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
    return newCard;
  }
}

// created cards from pack
export async function createCardsForPack(
  packType,
  packId,
  numCardsForType,
  repeatedCards = false
) {
  // Create pack
  let numCards = numCardsForType;
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
  packArray.push(holoCard);

  // For each card find its rariry value
  while (packArray.length < numCards) {
    let rarityNum = Math.floor(Math.random() * 200) + 1;

    if (rarityNum < 90) {
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

      if (packArray.includes(newCard) && !repeatedCards) {
        continue;
      } else {
        packArray.push(newCard);
      }
    }

    if (rarityNum < 151 && rarityNum >= 90) {
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

      if (packArray.includes(newCard) && !repeatedCards) {
        continue;
      } else {
        packArray.push(newCard);
      }
    }

    if (rarityNum < 181 && rarityNum >= 151) {
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
      if (packArray.includes(newCard) && !repeatedCards) {
        continue;
      } else {
        packArray.push(newCard);
      }
    }

    if (rarityNum < 198 && rarityNum >= 181) {
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
      if (packArray.includes(newCard) && !repeatedCards) {
        continue;
      } else {
        packArray.push(newCard);
      }
    }

    if (rarityNum < 201 && rarityNum >= 198) {
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
      if (packArray.includes(newCard) && !repeatedCards) {
        continue;
      } else {
        packArray.push(newCard);
      }
    }
  }
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

  return packArray;
}
