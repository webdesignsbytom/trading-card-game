import { findAllCardsFromPack } from '../domain/cards.js';
import {
  addCardsToEmptyPack,
  createBlankPackOfCards,
  createBlankPackOfCardsForUser,
} from '../domain/packs.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import { NotFoundEvent } from '../event/utils/errorUtils.js';
import { createCardsForPack } from './createCards.js';
import { EVENT_MESSAGES, sendMessageResponse } from './responses.js';
import {
  createHolographicCardForPack,
  selectCommonCard,
  selectMegaRareCard,
  selectRareCard,
  selectUltimateRarityCard,
  selectUncommonCard,
} from './selectCard.js';

export async function createSinglePacksOfCards(packType) {
  const newPack = await createBlankPackOfCards(packType);

  const cards = await createCardsForPack(packType, newPack.id);
  var myJsonString = JSON.stringify(cards);

  const fullPack = await addCardsToEmptyPack(myJsonString, newPack.id);

  return fullPack;
}

export async function createSinglePacksOfCardsForUser(packType, userId) {

  const newPack = await createBlankPackOfCardsForUser(packType, userId);
  const cards = await createCardsForPack(packType, newPack.id);
  var myJsonString = JSON.stringify(cards);

  const fullPack = await addCardsToEmptyPack(myJsonString, newPack.id);

  return fullPack;
}

