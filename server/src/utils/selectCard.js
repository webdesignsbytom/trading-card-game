export async function selectCommonCard(cards, packId) {
  const cardIndex = Math.floor(Math.random() * cards.length);
  const card = cards[cardIndex];
  card.packId = packId;
  return card;
}
export async function selectUncommonCard(cards, packId) {
  const cardIndex = Math.floor(Math.random() * cards.length);
  const card = cards[cardIndex];
  card.packId = packId;
  return card;
}
export async function selectRareCard(cards, packId) {
  const cardIndex = Math.floor(Math.random() * cards.length);
  const card = cards[cardIndex];
  var holoNum = Math.floor(Math.random() * 5) + 1;
  if (holoNum > 3) card.holographic = true;
  card.packId = packId;
  return card;
}
export async function selectMegaRareCard(cards, packId) {
  const cardIndex = Math.floor(Math.random() * cards.length);
  const card = cards[cardIndex];
  var holoNum = Math.floor(Math.random() * 5) + 1;
  if (holoNum > 3) card.holographic = true;
  card.packId = packId;
  return card;
}
export async function selectUltimateRarityCard(cards, packId) {
  const cardIndex = Math.floor(Math.random() * cards.length);
  const card = cards[cardIndex];
  card.holographic = true;
  card.packId = packId;
  return card;
}

export async function createHolographicCardForPack(rareCards, megaRareCards) {
  let max = 198,
    min = 151;
  let rarityNum = Math.floor(Math.random() * (max - min + 1)) + min;

  if (rarityNum < 181 && rarityNum >= 151) {
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
    return newCard;
  }

  if (rarityNum < 198 && rarityNum >= 181) {
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
    return newCard;
  }
}
