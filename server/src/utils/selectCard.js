export async function selectCommonCard(cards) {
  console.log('Selecting common card');
  let len = cards.length;
  const cardIndex = Math.floor(Math.random() * len);
  const card = cards[cardIndex];
  return card;
}
export async function selectUncommonCard(cards) {
  console.log('Selecting uncommon card');
  let len = cards.length;
  const cardIndex = Math.floor(Math.random() * len);
  const card = cards[cardIndex];
  return card;
}
export async function selectRareCard(cards) {
  console.log('Selecting rare card');
  let len = cards.length;
  const cardIndex = Math.floor(Math.random() * len);
  const card = cards[cardIndex];
  var holoNum = Math.floor(Math.random() * 5) + 1;
  if (holoNum > 3) card.holographic = true;
  return card;
}
export async function selectMegaRareCard(cards) {
  console.log('Selecting mega rare card');
  let len = cards.length;
  const cardIndex = Math.floor(Math.random() * len);
  const card = cards[cardIndex];
  var holoNum = Math.floor(Math.random() * 5) + 1;
  if (holoNum > 3) card.holographic = true;
  return card;
}
export async function selectUltimateRarityCard(cards) {
  console.log('Selecting ultimate card');
  let len = cards.length;
  const cardIndex = Math.floor(Math.random() * len);
  const card = cards[cardIndex];
  card.holographic = true;
  return card;
}

export async function cheakForHolographic(packArray, numCards) {
  if (packArray.length === numCards) {
    const notContained = packArray.every(obj => {
      return obj.holographic !== true;
    });

    if (notContained) {
      packArray.pop();
    }
  }
}

export async function createHolographicCardForPack(rareCards, megaRareCards){
  let max = 198, min = 151
  let rarityNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log('rarityNum', rarityNum);

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
    newCard.holographic = true;
    return newCard
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
    newCard.holographic = true;
    return newCard
  }
}