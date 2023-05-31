import React from 'react';

function MemberCard({ cardData }) {
  return (
    <section className='outline outline-1 outline-white text-white rounded-lg px-2 py-[1px]'>
      <div className='flex justify-between items-center text-sm'>
        <h2 className='text-white capitalize '>{cardData.memberCard.name}</h2>
        <h5>Health: {cardData.memberCard.health}</h5>
      </div>
      <div>
        <img src={cardData.memberCard.image} alt='card' />
      </div>
      <h3 className='text-white'>Attack: {cardData.memberCard.attack}</h3>
      <h4 className='text-white'>Stat: {cardData.memberCard.cardStat}</h4>
      <p className='text-white'>{cardData.packType}</p>
      <p className='text-white'>{cardData.cardType}</p>
      <p className='text-white'>{cardData.holographic}</p>
      <p className='text-white'>E: {cardData.edition}</p>
      <div className='flex justify-between text-ss'>
        <p className='text-white'>Rarity: {cardData.rarity} / 100</p>
        <p className='text-white'>Serial:{cardData.id}</p>
      </div>
    </section>
  );
}

export default MemberCard;
