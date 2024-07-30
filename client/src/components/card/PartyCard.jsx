import React, { useContext, useEffect, useState } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Constants
import {
  MEGARAREHOLO_CARD_RARITY,
  PACK_TYPE_ALPHA,
  PACK_TYPE_BETA,
  PACK_TYPE_GAMMA,
  RAREHOLO_CARD_RARITY,
} from '../../utils/cards/CardGameConstants';

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
      }
    else if (cardData.rarity === RAREHOLO_CARD_RARITY) {
      setHoloCard(true);
      setBgColour('bg-slate-700');
    } else if (cardData.rarity === MEGARAREHOLO_CARD_RARITY) {
      setRareHoloCard(true);
      setBgColour('bg-slate-700');
    }
  }, []);

  return (
    <article
      onClick={() => toggleCardData(cardData)}
      className={`grid h-full text-white overflow-hidden`}
    >
      <div
        className={`grid grid-rows-a1a rounded-lg overflow-hidden px-2 py-[1px] ${bgColour} card__bg border-8 border-card-border border-solid`}
      >
        <div className='flex justify-between items-center text-sm my-1'>
          <h2 className='text-white capitalize'>{cardData.partyCard.name}</h2>
        </div>

        <section className='grid grid-rows-2 h-full'>
          <div className='mb-1 h-full outline outline-1 outline-black bg-white'>
            <img className='h-full' src={cardData.imageUrl} alt='card' />
          </div>

          <section className='grid grid-rows-reg'>
            <div className='flex justify-between text-sm py-1 border-solid border-2 border-main-border '>
              <p className='text-white capitalize'>{cardData.cardType}</p>
              <div className='flex'>
                <p className=''>
                  {cardData.packType === PACK_TYPE_ALPHA && <span>🏝️</span>}
                  {cardData.packType === PACK_TYPE_BETA && <span>🦠</span>}
                  {cardData.packType === PACK_TYPE_GAMMA && <span>👑</span>}
                </p>
                <p className=''>
                  {cardData.edition === 'first' && <span>1️⃣</span>}
                  {cardData.edition === 'Second' && <span>2️⃣</span>}
                  {cardData.edition === 'Third' && <span>1️3️⃣</span>}
                  {cardData.edition === 'Fourth' && <span>1️4️⃣</span>}
                </p>
              </div>
            </div>

            <div className='py-1 px-[2px]'>
              <h3 className='text-white flex justify-between'>
                <span className='lg:text-base text-xs font-semibold'>
                  Power Up:
                </span>
                <span>{cardData.partyCard.powerUp}</span>
              </h3>
              <h4 className='text-white text-xs leading-3 mb-1'>
                <span className='text-xs lg:text-base'>Stat:</span>{' '}
                <span className='text-ss leading-3 lg:text-xs'>
                  Effect stat on enemy
                </span>
              </h4>
              <h5 className='text-white text-xs leading-3'>
                <span className='text-xs lg:text-base'>Effect:</span>{' '}
                <span className='text-ss leading-3 lg:text-xs'>
                  {cardData.partyCard.effect}
                </span>
              </h5>
            </div>
          </section>
        </section>
        <div className='flex justify-between text-ss'>
          <p className='text-white'>{cardData.rarity}</p>
          <p className='text-white'>#{cardData.id}</p>
        </div>
      </div>
    </article>
  );
}

export default PartyCard;
