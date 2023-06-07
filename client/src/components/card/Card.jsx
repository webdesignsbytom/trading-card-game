import React from 'react';
// Cards
import EmptyCardSlot from './EmptyCardSlot';
import MemberCard from './MemberCard';
import PartyCard from './PartyCard';
import PolicyCard from './PolicyCard';

function Card({ cardData }) {
  console.log('cardData', cardData);

  if (!cardData.id) {
    return <EmptyCardSlot />;
  }
  if (cardData.cardType === 'MEMBER') {
    return <MemberCard cardData={cardData} />;
  }
  if (cardData.cardType === 'PARTY') {
    return <PartyCard cardData={cardData} />;
  }
  if (cardData.cardType === 'POLICY') {
    return <PolicyCard cardData={cardData} />;
  }
}

export default Card;
