import React from 'react';
// Cards
import EmptyCardSlot from './EmptyCardSlot';
import MemberCard from './MemberCard';
import PartyCard from './PartyCard';
import PolicyCard from './PolicyCard';
// Constants
import { CARD_TYPE_ALPHA, CARD_TYPE_BETA, CARD_TYPE_GAMMA } from '../../utils/cards/CardGameConstants';

function Card({ cardData }) {
  console.log('CARD DATA', cardData);
  if (!cardData.id) {
    return <EmptyCardSlot />;
  }
  if (cardData.cardType === CARD_TYPE_ALPHA) {
    return <MemberCard cardData={cardData} />;
  }
  if (cardData.cardType === CARD_TYPE_BETA) {
    return <PartyCard cardData={cardData} />;
  }
  if (cardData.cardType === CARD_TYPE_GAMMA) {
    return <PolicyCard cardData={cardData} />;
  }
}

export default Card;
