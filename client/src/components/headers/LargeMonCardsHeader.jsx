import React from 'react';
// Constants
import { SecondaryTitle } from '../../utils/Constants';

function LargeMonCardsHeader() {
  return (
    <article className='grid rounded-lg text-center bg-secondary-colour w-fit px-6 py-2 main__bg border-4 border-main-border border-solid shadow-2xl h-fit'>
      <h1 className='text-center text-4xl lg:text-8xl font-extrabold text__stroke'>
        <span className='text-blue-600 font-fantasy font-bold'>
          MON <span className='text-red-600'>CARDS</span>
        </span>
      </h1>
      <h2 className='text-center text-xl lg:text-3xl font-bold font-poppins tracking-tight'>
        {SecondaryTitle}
      </h2>
    </article>
  );
}

export default LargeMonCardsHeader;
