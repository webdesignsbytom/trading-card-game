import React from 'react';
// Images
import BetaPack from '../../assets/img/packets/pack1.png';
import AlphaPack from '../../assets/img/packets/pack2.png';
import GammaPack from '../../assets/img/packets/pack3.png';
import LoadingSpinner from '../utils/LoadingSpinner';
// Constants
import {
  PACK_TYPE_ALPHA,
  PACK_TYPE_BETA,
  PACK_TYPE_GAMMA,
  PackTypeAlpha,
  PackTypeBeta,
  PackTypeGamma,
} from '../../utils/cards/CardGameConstants';

const PACK_OPTIONS = [
  {
    id: PACK_TYPE_ALPHA,
    imgSrc: AlphaPack,
    alt: `${PackTypeAlpha} Packs`,
    isPurchasing: 'purchasingAlphaPack',
    displayName: `${PackTypeAlpha} Packs`,
  },
  {
    id: PACK_TYPE_BETA,
    imgSrc: BetaPack,
    alt: `${PackTypeBeta} Packs`,
    isPurchasing: 'purchasingBetaPack',
    displayName: `${PackTypeBeta} Packs`,
  },
  {
    id: PACK_TYPE_GAMMA,
    imgSrc: GammaPack,
    alt: `${PackTypeGamma} Packs`,
    isPurchasing: 'purchasingGammaPack',
    displayName: `${PackTypeGamma} Packs`,
  },
];

function PackSelector({
  buyPacketsOfCards,
  costOfStandardPack,
  purchasingBetaPack,
  purchasingGammaPack,
  purchasingAlphaPack,
}) {
  return (
    <section className='grid grid-cols-3 gap-2 lg:gap-6 px-2'>
      {PACK_OPTIONS.map(({ id, imgSrc, alt, isPurchasing, displayName }) => (
        <article key={id} className='grid items-center justify-center'>
          <div>
            <img src={imgSrc} alt={alt} />
          </div>
          <div className='grid items-center justify-center my-4'>
            <button
              id={id}
              onClick={() => buyPacketsOfCards(id)}
              className='rounded bg-red-700 hover:bg-red-500 active:scale-95 text-white font-semibold main__bg my-2 outline outline-2 outline-black p-2'
            >
              {eval(isPurchasing) ? (
                <div className='grid w-full justify-center items-center text-white text-3xl text-center'>
                  <LoadingSpinner width={'w-6'} height={'h-6'} />
                </div>
              ) : (
                <div className='grid'>
                  <span className='text-xl px-2'>Buy {displayName}</span>
                </div>
              )}
            </button>
          </div>
          <div className='text-center'>
            <span className='text-xl text-gray-50 font-semibold'>
              Price: £{costOfStandardPack}
            </span>
          </div>
        </article>
      ))}
    </section>
  );
}

export default PackSelector;
