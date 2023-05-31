import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function PartyCard({ cardData }) {
  const { toggleCardData } = useContext(ToggleContext);

  return (
    <section onClick={() => toggleCardData(cardData)} className='outline outline-1 grid grid-rows-a1a outline-white h-full text-white rounded-lg px-2 py-[1px] card__bg'>
      <div className='flex justify-between items-center text-sm'>
        <h2 className='text-white capitalize'>{cardData.partyCard.name}</h2>
        <h5>Health: {cardData.partyCard.health}</h5>
      </div>

      <section className='grid grid-rows-2 h-full'>
        <div className='mb-1 h-full'>
          <img className='h-full' src={cardData.partyCard.image} alt='card' />
        </div>

        <section className='grid grid-rows-reg'>
          <div className='flex justify-between text-sm outline outline-1 outline-black mt-1 px-[2px]'>
            <p className='text-white capitalize'>{cardData.cardType}</p>
            <div className='flex'>
              <p className='text-white'>
                {cardData.packType === 'BREXIT' && <span>🏝️</span>}
                {cardData.packType === 'COVID' && <span>🦠</span>}
                {cardData.packType === 'ELECTION' && <span>👑</span>}
              </p>
              <p className='text-white'>
                {cardData.edition === 'First' && <span>1️⃣</span>}
                {cardData.edition === 'Second' && <span>2️⃣</span>}
                {cardData.edition === 'Third' && <span>1️3️⃣</span>}
                {cardData.edition === 'Fourth' && <span>1️4️⃣</span>}
              </p>
            </div>
          </div>

          <div className='py-1 px-[2px]'>
            <h3 className='text-white text-sm flex justify-between'>
              <span>Attack:</span> <span>{cardData.partyCard.attack}</span>
            </h3>
            <h4 className='text-white text-xs'>
              <span className='text-sm'>Stat:</span>{' '}
              <span className='text-ss'>{cardData.partyCard.cardStat}</span>
            </h4>
          </div>
        </section>
      </section>
      {/* <p className='text-white'>{cardData.holographic}</p> */}
      <div className='flex justify-between text-ss'>
        <p className='text-white'>Rarity: {cardData.rarity} / 100</p>
        <p className='text-white'>Serial: {cardData.id}</p>
      </div>
    </section>
  );
}

export default PartyCard;
