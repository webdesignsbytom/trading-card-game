import React from 'react';
// Constants
import { SecondaryTitle } from '../../utils/Constants';

function SmallMonCardsHeader() {
  return (
    <header className='grid justify-center items-center'>
      <div className='grid bg-secondary-colour main__bg w-fit rounded-lg border-2 border-main-border border-solid py-1 px-2'>
        <p className='text-center text-3xl font-extrabold text__stroke'>
          <span className='text-blue-600 font-fantasy'>
            MON <span className='text-red-600'>CARDS</span>
          </span>
        </p>
        <p className='font-bold text-xs md:text-sm font-poppins tracking-tight'>
          <span>{SecondaryTitle}</span>
        </p>
      </div>
    </header>
  );
}

export default SmallMonCardsHeader;
