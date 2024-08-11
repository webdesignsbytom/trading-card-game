import {
  createManyNewInstanceForPack,
  createNewInstanceForPack,
} from '../domain/cards.js';
import {
  createBlankBoxForUser,
  createBlankPackOfCards,
  createBlankPackOfCardsForUser,
} from '../domain/packs.js';
import { createCardsForPack } from './createCards.js';
// Constants
import { NumCardsInBox, NumCardsInPack } from './constants.js';

// Create One Pack Of card of any type
export async function createSinglePacksOfCards(packType) {
  const newPack = await createBlankPackOfCards(packType);

  const cards = await createCardsForPack(packType, newPack.id, NumCardsInPack);

  const cardInstanceArray = [];
  // create instances
  for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    const cardInstance = await createNewInstanceForPack(
      newPack.id,
      card.id,
      card.cardName
    );
    cardInstanceArray.push(cardInstance);
  }

  return { cards, cardInstanceArray, newPack };
}

// Buy pack of cards and id to user
export async function createSinglePacksOfCardsForUser(packType, userId) {
  const newPack = await createBlankPackOfCardsForUser(packType, userId);
  const cards = await createCardsForPack(packType, newPack.id, NumCardsInPack);
  console.log('Eeeeeeeeeee');
  const cardInstanceArray = [];
  console.log('cardInstanceArray', cardInstanceArray);
  // create instances
  for (let index = 0; index < cards.length; index++) {
    const card = cards[index];

    cardInstanceArray.push({
      packId: newPack.id,
      cardName: card.cardName,
      cardId: card.id,
    });
  }
  console.log('cardInstanceArray', cardInstanceArray);

  await createManyNewInstanceForPack(cardInstanceArray);

  return newPack;
}

// Buy pack of cards and id to user
export async function createBoxOfCardsForUser(boxType, userId) {
  const newBox = await createBlankBoxForUser(boxType, userId);
  const cards = await createCardsForPack(
    boxType,
    newBox.id,
    NumCardsInBox,
    true
  );
  const cardInstanceArray = [];
  // create instances
  for (let index = 0; index < cards.length; index++) {
    const card = cards[index];

    cardInstanceArray.push({
      boxId: newBox.id,
      cardName: card.cardName,
      cardId: card.id,
    });
  }

  await createManyNewInstanceForPack(cardInstanceArray);

  return newBox;
}
