import React, { useState } from 'react';
// Images
import CovidPack from '../../assets/img/packets/pack1.png';
import BrexitPack from '../../assets/img/packets/pack2.png';
import ElectionPack from '../../assets/img/packets/pack4.png';
import LoadingSpinner from '../utils/LoadingSpinner';

function PackSelector({
  buyPacketsOfCards,
  costOfStandardPack,
  purchasingCovidPack,
  purchasingElectionPack,
  purchasingBrexitPack,
}) {
  return (
    <section className='grid grid-cols-3 gap-2 px-2'>
      <article className='grid items-center justify-center'>
        <div>
          <img src={BrexitPack} alt='Brexit pack' />
        </div>
        <div className='grid items-center justify-center my-4'>
          <button
            id='brexit'
            onClick={buyPacketsOfCards}
            className='rounded bg-red-600 hover:bg-red-500 active:scale-95 text-white font-semibold main__bg outline outline-2 outline-black p-2'
          >
            {purchasingBrexitPack ? (
              <div className='grid w-full justify-center items-center text-white text-3xl text-center'>
                <span>LOADING...</span>
                <LoadingSpinner width={'w-8'} height={'w-8'} />
              </div>
            ) : (
              <span>Buy Brexit Packs</span>
            )}
          </button>
        </div>
        <div className='text-center'>
          <span className='text-xl'>Price: £{costOfStandardPack}</span>
        </div>
      </article>

      <article className='grid items-center justify-center'>
        <div>
          <img src={CovidPack} alt='Covid pack' />
        </div>
        <div className='grid items-center justify-center my-4'>
          <button
            id='covid'
            onClick={buyPacketsOfCards}
            className='rounded bg-red-600 hover:bg-red-500 active:scale-95 text-white font-semibold main__bg outline outline-2 outline-black p-2'
          >
            {purchasingCovidPack ? (
              <div className='grid w-full justify-center items-center text-white text-3xl text-center'>
                <span>LOADING...</span>
                <LoadingSpinner width={'w-8'} height={'w-8'} />
              </div>
            ) : (
              <span>Buy Covid Packs</span>
            )}
          </button>
        </div>
        <div className='text-center'>
          <span className='text-xl'>Price: £{costOfStandardPack}</span>
        </div>
      </article>

      <article className='grid items-center justify-center'>
        <div className='grid items-center justify-center'>
          <img src={ElectionPack} alt='Election pack' />
        </div>
        <div className='grid items-center justify-center my-4'>
          <button
            id='election'
            onClick={buyPacketsOfCards}
            className='rounded bg-red-600 hover:bg-red-500 active:scale-95 text-white font-semibold main__bg outline outline-2 outline-black p-2'
          >
            {purchasingElectionPack ? (
              <div className='grid w-full justify-center items-center text-white text-3xl text-center'>
                <span>LOADING...</span>
                <LoadingSpinner width={'w-8'} height={'w-8'} />
              </div>
            ) : (
              <span>Buy Election Packs</span>
            )}
          </button>
        </div>
        <div className='text-center'>
          <span className='text-xl'>Price: £{costOfStandardPack}</span>
        </div>
      </article>
    </section>
  );
}

export default PackSelector;
