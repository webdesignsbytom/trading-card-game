import React, { useEffect, useState } from 'react';
import EmptyCardSlot from './EmptyCardSlot';
import {
  MEGARAREHOLO_CARD_RARITY,
  RAREHOLO_CARD_RARITY,
  BACKGROUND_COLORS,
  CARD_TYPE_MONSTER,
  CARD_TYPE_POWERUP,
  CARD_TYPE_ITEM,
  PACK_TYPE_ICONS,
  EDITION_ICONS,
  ULTIMATE_CARD_RARITY,
} from '../../utils/cards/CardGameConstants';
import { useNavigate } from 'react-router-dom';
import { CARD_PAGE_URL } from '../../utils/Constants';

function Card2({ cardData }) {
  const [bgColour, setBgColour] = useState('bg-white');
  const [holoCard, setHoloCard] = useState(false);
  const [rareholoCard, setRareHoloCard] = useState(false);

  const navigate = useNavigate();

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

  const openCardPage = (cardData) => {
    navigate(`${CARD_PAGE_URL}/${cardData.cardName}`, { state: cardData });
  };

  return (
    <article
      className={`grid card__bg ${bgColour} border-[0.5rem] bg-black border-card-border border-solid rounded-lg overflow-hidden h-fit w-full cursor-pointer`}
      style={{ aspectRatio: '2 / 3' }}
      onClick={() => openCardPage(cardData)}
    >
      <div className='grid grid-rows-a1a p-[0.5px] h-full w-full overflow-hidden'>
        {/* Name */}
        <section className='grid h-fit'>
          <div className='truncate'>
            <h4 className='text-[1rem] font-medium'>{cardData.cardName}</h4>
          </div>
        </section>

        {/* Image and data */}
        <section className='grid grid-rows-[1.2fr_1fr] h-full overflow-hidden px-0.5'>
          <div
            className='grid h-full w-full overflow-hidden bg-green-200 border-black border-solid border-2'
            style={{
              backgroundImage: `url(${cardData.imageUrl})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <section className='grid grid-rows-reg h-full w-full overflow-hidden'>
            <div className='flex justify-between h-fit overflow-hidden text-sm lg:text-base px-1 pb-1'>
              <p className='text-white'>{PACK_TYPE_ICONS[cardData.packType]}</p>
              <p className='text-white'>{EDITION_ICONS[cardData.edition]}</p>
            </div>
            <div className='grid w-full h-full overflow-hidden text-sm lg:text-sm font-medium py-[1px]'>
              <div className='grid h-fit gap-2'>
                {cardData.cardStats.map((stat, index) => {
                  return (
                    <div
                      key={index}
                      className='grid grid-flow-col justify-between'
                    >
                      <div>{stat.statName}</div>
                      <div>{stat.value}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </section>

        <section className='grid h-fit px-1'>
          <div className='flex justify-between font-medium text-[0.6rem]'>
            <p>{cardData.serialNumber}</p>
            <p>{cardData.rarity}</p>
          </div>
        </section>
      </div>
    </article>
  );
}

export default Card2;
