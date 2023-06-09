import { createManyNewInstanceForPack, createNewInstanceForPack } from '../domain/cards.js';
import {
  createBlankPackOfCards,
  createBlankPackOfCardsForUser,
} from '../domain/packs.js';
import { createCardsForPack } from './createCards.js';


// Create One Pack Of card of any type
export async function createSinglePacksOfCards(packType) {

  const newPack = await createBlankPackOfCards(packType);

  const cards = await createCardsForPack(packType, newPack.id);

  const cardInstanceArray = []
  // create instances
  for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    const cardInstance = await createNewInstanceForPack(newPack.id, card.id, card.cardName)
    cardInstanceArray.push(cardInstance)
  }

  return {cards, cardInstanceArray, newPack};
}

// Buy pack of cards and id to user
export async function createSinglePacksOfCardsForUser(packType, userId) {
  const newPack = await createBlankPackOfCardsForUser(packType, userId);
  const cards = await createCardsForPack(packType, newPack.id);
  const cardInstanceArray = []
  // create instances
  for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    cardInstanceArray.push({ packId: newPack.id, cardId: card.id, name: card.cardName })
  }
  await createManyNewInstanceForPack(cardInstanceArray)

  return newPack;
}

