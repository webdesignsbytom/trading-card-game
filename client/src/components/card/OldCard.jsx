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
} from '../../utils/cards/CardGameConstants';

function OldCard({ cardData }) {
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
    <section
      onClick={() => toggleCardData(cardData)}
      className={`${holoCard} ${rareholoCard} cursor-pointer outline outline-4 grid grid-rows-a1a outline-blue-800 h-full text-white rounded px-2 py-[1px] ${bgColour} card__bg`}
    >
      <div className='flex justify-between items-center text-sm my-1'>
        <h2 className='text-white text-sm capitalize'>{cardData.cardName}</h2>
      </div>

      <section className='grid grid-rows-2 h-full'>
        <div className='mb-1 h-full outline outline-1 outline-black bg-white'>
          <img className='h-full' src={cardData.imageUrl} alt='card' />
        </div>

        <section className='grid grid-rows-reg'>
          <div className='flex justify-between text-sm outline outline-1 outline-black py-1 mt-1 px-[2px]'>
            <p className='text-white capitalize'>{cardData.cardType}</p>
            <div className='flex'>
              <p className='text-white'>{PACK_TYPE_ICONS[cardData.packType]}</p>
              <p className='text-white'>{EDITION_ICONS[cardData.edition]}</p>
            </div>
          </div>

          <div className='py-1 px-[2px]'>{renderCardDetails()}</div>
        </section>
      </section>
      <div className='flex justify-between text-ss'>
        <p className='text-white'>{cardData.rarity}</p>
        <p className='text-white'>{cardData.serialNumber}</p>
      </div>
    </section>
  );
}

export default OldCard;
