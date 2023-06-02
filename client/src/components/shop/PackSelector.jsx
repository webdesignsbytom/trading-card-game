import React from 'react';

function PackSelector({ buyPacketsOfCards }) {
  return (
    <section className='grid grid-cols-3'>
      <div>
        <button
          id='brexit'
          onClick={buyPacketsOfCards}
          className='rounded outline outline-2 outline-black p-4'
        >
          Buy Brexit Packs
        </button>
      </div>
      <div>
        <button
          id='covid'
          onClick={buyPacketsOfCards}
          className='rounded outline outline-2 outline-black p-4'
        >
          Buy Covid Packs
        </button>
      </div>
      <div>
        <button
          id='election'
          onClick={buyPacketsOfCards}
          className='rounded outline outline-2 outline-black p-4'
        >
          Buy Election Packs
        </button>
      </div>
    </section>
  );
}

export default PackSelector;
