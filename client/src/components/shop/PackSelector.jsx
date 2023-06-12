import React, { useState } from 'react';
// Images
import CovidPack from '../../assets/img/packets/pack1.png';
import BrexitPack from '../../assets/img/packets/pack2.png';
import ElectionPack from '../../assets/img/packets/pack3.png';
import LoadingSpinner from '../utils/LoadingSpinner';

function PackSelector({
  buyPacketsOfCards,
  costOfStandardPack,
  purchasingCovidPack,
  purchasingElectionPack,
  purchasingBrexitPack,
}) {
  return (
    <section className='grid grid-cols-3 gap-2 lg:gap-6 px-2'>
      <article className='grid items-center justify-center'>
        <div>
          <img src={BrexitPack} alt='Brexit pack' />
        </div>
        <div className='grid items-center justify-center my-4'>
          <button
            id='brexit'
            onClick={() => buyPacketsOfCards('BREXIT')}
            className='rounded bg-red-700 hover:bg-red-500 active:scale-95 text-white font-semibold main__bg my-2 outline outline-2 outline-black p-2'
          >
            {purchasingBrexitPack ? (
              <div className='grid w-full justify-center items-center text-white text-3xl text-center'>
                <LoadingSpinner width={'w-6'} height={'h-6'} />
              </div>
            ) : (
              <div className='grid'>
                <span className='text-xl px-2'>Buy Brexit Packs</span>
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

      <article className='grid items-center justify-center'>
        <div>
          <img src={CovidPack} alt='Covid pack' />
        </div>
        <div className='grid items-center justify-center my-4'>
          <button
            id='covid'
            onClick={() => buyPacketsOfCards('COVID')}
            className='rounded bg-red-700 hover:bg-red-500 active:scale-95 text-white font-semibold main__bg my-2 outline outline-2 outline-black p-2'
          >
            {purchasingCovidPack ? (
              <div className='grid w-full justify-center items-center text-white text-3xl text-center'>
                <LoadingSpinner width={'w-6'} height={'h-6'} />
              </div>
            ) : (
              <div className='grid'>
                <span className='text-xl px-2'>Buy Covid Packs</span>
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

      <article className='grid items-center justify-center'>
        <div className='grid items-center justify-center'>
          <img src={ElectionPack} alt='Election pack' />
        </div>
        <div className='grid items-center justify-center my-4'>
          <button
            id='election'
            onClick={() => buyPacketsOfCards('ELECTION')}
            className='rounded bg-red-700 hover:bg-red-500 active:scale-95 text-white font-semibold main__bg my-2 outline outline-2 outline-black p-2'
          >
            {purchasingElectionPack ? (
              <div className='grid w-full justify-center items-center text-white text-3xl text-center'>
                <LoadingSpinner width={'w-6'} height={'h-6'} />
              </div>
            ) : (
              <div className='grid'>
                <span className='text-xl px-2'>Buy Election Packs</span>
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
    </section>
  );
}

export default PackSelector;
