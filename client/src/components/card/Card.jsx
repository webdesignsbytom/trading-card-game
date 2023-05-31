import React from 'react';
// Cards
import EmptyCardSlot from './EmptyCardSlot';
import MemberCard from './MemberCard';
import PartyCard from './PartyCard';
import PolicyCard from './PolicyCard';

function Card({ cardData }) {
  console.log('cardData', cardData);

  if (!cardData) {
    return <EmptyCardSlot />;
  }
  if (cardData.cardType === 'member') {
    return <MemberCard cardData={cardData} />;
  }
  if (cardData.cardType === 'party') {
    return <PartyCard cardData={cardData} />;
  }
  if (cardData.cardType === 'policy') {
    return <PolicyCard cardData={cardData} />;
  }
}

export default Card;
