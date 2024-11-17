import React from 'react';

function BattlePageHeader() {
  return (
    <section className='grid h-fit'>
      <div className='text-center grid h-fit'>
        <h1 className='text-center text-6xl lg:text-7xl font-extrabold text__stroke font-fantasy tracking-wider'>
          <span className='text-blue-700'>BATTLE</span>{' '}
          <span className='text-red-700'>ZONE</span>
        </h1>
        <h2 className='text-white text-center font-extrabold font-poppins'>
          FIGHT AND WIN!
        </h2>
      </div>
    </section>
  );
}

export default BattlePageHeader;
