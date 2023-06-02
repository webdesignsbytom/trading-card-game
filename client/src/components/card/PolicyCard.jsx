import React, { useContext, useEffect, useState } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function PolicyCard({ cardData }) {
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
    className={`outline outline-1 grid grid-rows-a1a outline-white h-full text-white rounded px-2 py-[1px] ${bgColour} card__bg`}

    >
      <div className='flex justify-between items-center text-sm'>
        <h2 className='text-white capitalize '>{cardData.policyCard.name}</h2>
        <h5>Health: {cardData.policyCard.health}</h5>
      </div>

      <section className='grid grid-rows-2 h-full'>
        <div className='mb-1 h-full'>
          <img className='h-full' src={cardData.image} alt='card' />
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
              <span>Attack:</span> <span>{cardData.policyCard.effect}</span>
            </h3>
            <h4 className='text-white text-xs'>
              <span className='text-sm'>Stat:</span>{' '}
              <span className='text-ss'>{cardData.policyCard.cardStat}</span>
            </h4>
          </div>
        </section>
      </section>
      {/* <p className='text-white'>{cardData.holographic}</p> */}
      <div className='flex justify-between text-ss'>
        <p className='text-white'>{cardData.rarity}</p>
        <p className='text-white'>{cardData.id}</p>
      </div>
    </section>
  );
}

export default PolicyCard;
