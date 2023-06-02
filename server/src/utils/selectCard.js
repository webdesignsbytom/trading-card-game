export async function selectCommonCard(cards) {
  console.log('Selecting common card');
  let len = cards.length;
  console.log('len: ' + len);
  const cardIndex = Math.floor(Math.random() * len);
  const card = cards[cardIndex];
  console.log('card', card);
  return card
}
export async function selectUncommonCard(cards) {
  console.log('Selecting uncommon card');
  let len = cards.length;
  console.log('len: ' + len);
  const cardIndex = Math.floor(Math.random() * len);
  const card = cards[cardIndex];
  console.log('card', card);
  return card
}
export async function selectRareCard(cards) {
  console.log('Selecting rare card');
  let len = cards.length;
  console.log('len: ' + len);
  const cardIndex = Math.floor(Math.random() * len);
  const card = cards[cardIndex];
  console.log('card', card);
  return card
}
export async function selectMegaRareCard(cards) {
  console.log('Selecting mega rare card');
  let len = cards.length;
  console.log('len: ' + len);
  const cardIndex = Math.floor(Math.random() * len);
  const card = cards[cardIndex];
  console.log('card', card);
  return card
}
export async function selectUltimateRarityCard(cards) {
  console.log('Selecting ultimate card');
  let len = cards.length;
  console.log('len: ' + len);
  const cardIndex = Math.floor(Math.random() * len);
  const card = cards[cardIndex];
  console.log('card', card);
  return card
}
