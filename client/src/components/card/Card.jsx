import React from 'react';
import EmptyCardSlot from './EmptyCardSlot';
import MemberCard from './MemberCard';

function Card({ cardData }) {
  console.log('cardData', cardData);

  if (!cardData) {
    return (
      <EmptyCardSlot />
    );
  }
  if (cardData.cardType === 'MEMBER') {
    return (
      <MemberCard cardData={cardData} />
    );
  }
  if (cardData.cardType === 'PARTY') {
    return (
      <div className='outline outline-1 outline-red-300 text-red-300 rounded-lg p-2'>
        {cardData.cardName}
      </div>
    );
  }
  if (cardData.cardType === 'POLICY') {
    return (
      <div className='outline outline-1 outline-green-300 text-green-300 rounded-lg p-2'>
        {cardData.cardName}
      </div>
    );
  }
}

export default Card;
