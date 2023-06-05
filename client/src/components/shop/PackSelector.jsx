import React from 'react';
// Images
import CovidPack from '../../assets/img/packets/pack1.png';
import BrexitPack from '../../assets/img/packets/pack2.png';
import ElectionPack from '../../assets/img/packets/pack3.png';

function PackSelector({ buyPacketsOfCards }) {
  return (
    <section className='grid grid-cols-3 gap-2'>
      <article className='grid items-center justify-center'>
        <div>
          <img src={BrexitPack} alt='Brexit pack' />
        </div>
        <div className='grid items-center justify-center my-4'>
          <button
            id='brexit'
            onClick={buyPacketsOfCards}
            className='rounded bg-red-600 main__bg outline outline-2 outline-black p-4'
          >
            Buy Brexit Packs
          </button>
        </div>
        <div className='text-center'>
          <span className='text-xl'>Price: £10</span>
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
            className='rounded bg-red-600 main__bg outline outline-2 outline-black p-4'
          >
            Buy Covid Packs
          </button>
        </div>
        <div className='text-center'>
          <span className='text-xl'>Price: £10</span>
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
            className='rounded bg-red-600 main__bg outline outline-2 outline-black p-4'
          >
            Buy Election Packs
          </button>
        </div>
        <div className='text-center'>
          <span className='text-xl'>Price: £10</span>
        </div>
      </article>
    </section>
  );
}

export default PackSelector;
