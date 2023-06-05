import React from 'react';

function PackSelector({ buyPacketsOfCards }) {
  return (
    <section className='grid grid-cols-3 gap-2'>
      <div>
        <button
          id='brexit'
          onClick={buyPacketsOfCards}
          className='rounded bg-red-600 main__bg outline outline-2 outline-black p-4'
        >
          Buy Brexit Packs
        </button>
        <div className='text-center'>
          <span className='text-xl'>Price: £10</span>
        </div>
      </div>
      <div>
        <button
          id='covid'
          onClick={buyPacketsOfCards}
          className='rounded bg-red-600 main__bg outline outline-2 outline-black p-4'
        >
          Buy Covid Packs
        </button>
        <div className='text-center'>
          <span className='text-xl'>Price: £10</span>
        </div>
      </div>
      <div>
        <button
          id='election'
          onClick={buyPacketsOfCards}
          className='rounded bg-red-600 main__bg outline outline-2 outline-black p-4'
        >
          Buy Election Packs
        </button>
        <div className='text-center'>
          <span className='text-xl'>Price: £10</span>
        </div>
      </div>
    </section>
  );
}

export default PackSelector;
