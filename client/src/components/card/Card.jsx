import React from 'react';
// Cards
import EmptyCardSlot from './EmptyCardSlot';
import MemberCard from './MemberCard';
import PartyCard from './PartyCard';
import PolicyCard from './PolicyCard';

function Card({ cardData }) {
  if (!cardData.id) {
    return <EmptyCardSlot />;
  }
  if (cardData.cardType === 'MEMBER') {
    if (cardData.rarity === 'ULTIMATE') {
      return (
        <div className='card'>
          <div className='cardFront'>
            <MemberCard cardData={cardData} />
            <div className='cardShinePlusAfterElement'></div>
            <div className='cardFrontSecond'></div>
          </div>
        </div>
      );
    } else {
      return <MemberCard cardData={cardData} />;
    }
  }
  if (cardData.cardType === 'PARTY') {
    if (cardData.rarity === 'ULTIMATE') {
      return (
        <div className='card'>
          <div className='cardFront'>
            <PartyCard cardData={cardData} />
            <div className='cardShinePlusAfterElement'></div>
            <div className='cardFrontSecond'></div>
          </div>
        </div>
      );
    } else {
      return <PartyCard cardData={cardData} />;
    }
  }
  if (cardData.cardType === 'POLICY') {
    if (cardData.rarity === 'ULTIMATE') {
      return (
        <div className='card grid'>
          <div className='cardFront'>
            <PolicyCard cardData={cardData} />
            <div className='cardShinePlusAfterElement'></div>
            <div className='cardFrontSecond'></div>
          </div>
        </div>
      );
    } else {
      return <PolicyCard cardData={cardData} />;
    }
  }
}

export default Card;
