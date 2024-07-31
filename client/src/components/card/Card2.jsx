import React, { useContext, useEffect, useState } from 'react';
import EmptyCardSlot from './EmptyCardSlot';
import { ToggleContext } from '../../context/ToggleContext';
import {
  MEGARAREHOLO_CARD_RARITY,
  RAREHOLO_CARD_RARITY,
  PACK_TYPE_ALPHA,
  PACK_TYPE_BETA,
  PACK_TYPE_GAMMA,
  BACKGROUND_COLORS,
  CARD_TYPE_MONSTER,
  CARD_TYPE_POWERUP,
  CARD_TYPE_ITEM,
  PACK_TYPE_ICONS,
  EDITION_ICONS,
  ULTIMATE_CARD_RARITY,
} from '../../utils/cards/CardGameConstants';

function Card2({ cardData }) {
  const { toggleCardData } = useContext(ToggleContext);
  const [bgColour, setBgColour] = useState('bg-white');
  const [holoCard, setHoloCard] = useState(false);
  const [rareholoCard, setRareHoloCard] = useState(false);

  useEffect(() => {
    if (!cardData.holographic) {
      setBgColour(
        BACKGROUND_COLORS[cardData.backgroundColour] || BACKGROUND_COLORS.WHITE
      );
    } else if (cardData.rarity === RAREHOLO_CARD_RARITY) {
      setHoloCard(true);
      setBgColour('bg-slate-700');
    } else if (cardData.rarity === MEGARAREHOLO_CARD_RARITY) {
      setRareHoloCard(true);
      setBgColour('bg-slate-500');
    } else if (cardData.rarity === ULTIMATE_CARD_RARITY) {
      setRareHoloCard(true);
      setBgColour('bg-pink-500');
    } else {
      setBgColour('bg-white');
    }
  }, [cardData]);

  if (!cardData.id) {
    return <EmptyCardSlot />;
  }

  const renderCardDetails = () => {
    switch (cardData.cardType) {
      case CARD_TYPE_MONSTER:
        return (
          <>
            <h2 className='text-white text-sm capitalize'>
              {cardData.monsterDetail.monsterClass}
            </h2>
            <h5 className='text-xs'>
              HP:{' '}
              <span className='font-semibold'>
                {cardData.monsterDetail.health}
              </span>
            </h5>
            <h4 className='text-white text-xs leading-3 mb-1'>
              <span className='text-xs lg:text-base'>Attack:</span>{' '}
              <span className='text-ss leading-3 lg:text-xs'>
                {cardData.monsterDetail.attack}
              </span>
            </h4>
          </>
        );
      case CARD_TYPE_ITEM:
        return (
          <>
            <h2 className='text-white text-sm capitalize'>
              {cardData.itemDetail.effectType}
            </h2>
            <h5 className='text-xs'>
              Effect Value:{' '}
              <span className='font-semibold'>
                {cardData.itemDetail.effectValue}
              </span>
            </h5>
          </>
        );
      case CARD_TYPE_POWERUP:
        return (
          <>
            <h2 className='text-white text-sm capitalize'>
              {cardData.powerUpDetail.effectType}
            </h2>
            <h5 className='text-xs'>
              Effect Value:{' '}
              <span className='font-semibold'>
                {cardData.powerUpDetail.effectValue}
              </span>
            </h5>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <article
      className={`grid card__bg ${bgColour} border-[0.5rem] bg-black border-card-border border-solid rounded-lg overflow-hidden h-full w-full cursor-pointer`}
      style={{ aspectRatio: '2 / 3' }}
    >
      <div className='grid grid-rows-a1a p-[2px] h-full w-full overflow-hidden'>
        {/* Name */}
        <section className='grid h-fit'>
          <div className='truncate'>
            <h4 className='text-[1rem] font-medium'>{cardData.cardName}</h4>
          </div>
        </section>

        {/* Image and data */}
        <section className='grid grid-rows-reg gap-2 h-full bg-red-500 overflow-hidden'>
          <div className='grid h-fit'>
            <img
              src={cardData.imageUrl}
              alt={cardData.cardName}
              className='aspect-square w-fit h-fit object-contain'
            />
          </div>
          <div className='grid grid-rows-reg bg-blue-300 h-full overflow-hidden'>
            <div className='flex justify-between h-fit overflow-hidden text-sm lg:text-base'>
              <p className='text-white'>{PACK_TYPE_ICONS[cardData.packType]}</p>
              <p className='text-white'>{EDITION_ICONS[cardData.edition]}</p>
            </div>
            <div className='grid h-full bg-green-300 overflow-hidden text-sm lg:text-base'>
              {cardData.cardStats.map((stat, index) => {
                return <div key={index}>{stat.value}flex justify-between h-fit overflow-hidden text-sm lg:text-base flex justify-between h-fit overflow-hidden text-sm lg:text-base</div>;
              })}
            </div>
          </div>
        </section>

        <section className='grid h-fit bg-orange-500'>
          <div className='flex justify-between text-xss lg:text-ss'>
            <p>{cardData.serialNumber}</p>
            <p>{cardData.rarity}</p>
          </div>
        </section>
      </div>
    </article>
  );
}

export default Card2;
