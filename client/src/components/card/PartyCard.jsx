import React, { useContext, useEffect, useState } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function PartyCard({ cardData }) {
  const { toggleCardData } = useContext(ToggleContext);
  const [bgColour, setBgColour] = useState('bg-white');
  const [holoCard, setHoloCard] = useState(false);
  const [rareholoCard, setRareHoloCard] = useState(false);

  useEffect(() => {
    if (!cardData.holographic)
    switch (cardData.backgroundColour) {
      case 'BLACK':
        return setBgColour('bg-black');
      case 'RED':
        return setBgColour('bg-red-400');
      case 'PURPLE':
        return setBgColour('bg-purple-400');
      case 'BLUE':
        return setBgColour('bg-blue-400');
      case 'YELLOW':
        return setBgColour('bg-yellow-400');
      case 'GREEN':
        return setBgColour('bg-green-400');
      default:
        return setBgColour('bg-white');
    } else if (cardData.rarity === 'RAREHOLO') {
      setHoloCard(true)
      setBgColour("bg-slate-700")
    } else if (cardData.rarity === 'MEGARAREHOLO') {
      setRareHoloCard(true)
      setBgColour("bg-slate-700")
    }

  }, []);
  
  return (
    <section
      onClick={() => toggleCardData(cardData)}
      className={`outline outline-4 grid grid-rows-a1a outline-red-800 h-full text-white rounded px-2 py-[1px] ${bgColour} card__bg`}
    >
      <div className='flex justify-between items-center text-sm my-1'>
        <h2 className='text-white capitalize'>{cardData.partyCard.name}</h2>
      </div>
      

      <section className='grid grid-rows-2 h-full'>
        <div className='mb-1 h-full outline outline-1 outline-black bg-white'>
          <img className='h-full' src={cardData.imageUrl} alt='card' />
        </div>

        <section className='grid grid-rows-reg'>
          <div className='flex justify-between text-sm outline outline-1 outline-black py-1 mt-1 px-[2px]'>
            <p className='text-white capitalize'>{cardData.cardType}</p>
            <div className='flex'>
              <p className='text-white'>
                {cardData.packType === 'BREXIT' && <span>🏝️</span>}
                {cardData.packType === 'COVID' && <span>🦠</span>}
                {cardData.packType === 'ELECTION' && <span>👑</span>}
              </p>
              <p className='text-white'>
                {cardData.edition === 'first' && <span>1️⃣</span>}
                {cardData.edition === 'Second' && <span>2️⃣</span>}
                {cardData.edition === 'Third' && <span>1️3️⃣</span>}
                {cardData.edition === 'Fourth' && <span>1️4️⃣</span>}
              </p>
            </div>
          </div>

          <div className='py-1 px-[2px]'>
            <h3 className='text-white flex justify-between'>
              <span className='lg:text-base text-xs font-semibold'>Power Up:</span><span>{cardData.partyCard.powerUp}</span>
            </h3>
            <h4 className='text-white text-xs leading-3 mb-1'>
              <span className='text-xs lg:text-base'>Stat:</span>{' '}
              <span className='text-ss leading-3 lg:text-xs'>{cardData.partyCard.cardStat}</span>
            </h4>
            <h5 className='text-white text-xs leading-3'>
              <span className='text-xs lg:text-base'>Effect:</span>{' '}
              <span className='text-ss leading-3 lg:text-xs'>{cardData.partyCard.effect}</span>
            </h5>
          </div>
        </section>
      </section>
      <div className='flex justify-between text-ss'>
        <p className='text-white'>{cardData.rarity}</p>
        <p className='text-white'>#{cardData.id}</p>
      </div>
    </section>
  );
}

export default PartyCard;
