import React from 'react';
// Constants
import { SecondaryTitle } from '../../utils/Constants';

function LargeMonCardsHeader() {
  return (
    <article className='outline outline-8 outline-black rounded text-center bg-secondary-colour w-fit p-4 main__bg'>
      <h1 className='text-center text-4xl lg:text-8xl font-extrabold text__stroke font-gasoek tracking-wide'>
        <span className='text-blue-600'>
          MON <span className='text-red-600'>CARDS</span>
        </span>
      </h1>
      <h2 className='text-center text-xl lg:text-3xl mt-2 font-bold '>
        {SecondaryTitle}
      </h2>
    </article>
  );
}

export default LargeMonCardsHeader;
