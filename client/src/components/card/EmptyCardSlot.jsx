import React from 'react';
import MainTextLogo from '../logo/MainTextLogo';

function EmptyCardSlot() {
  console.log('EMTPY');
  return (
    <div className='outline outline-4 card__bg bg-black outline-blue-500 text-white rounded-lg p-2'>
      <article className='grid items-center justify-center h-full'>
        <MainTextLogo />
      </article>
    </div>
  );
}

export default EmptyCardSlot;
