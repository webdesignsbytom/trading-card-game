import React from 'react';
// Constants
import { SecondaryTitle } from '../../utils/Constants';

function EmptyCardSlot() {
  return (
    <div className='outline outline-4 card__bg bg-black outline-blue-500 text-white rounded-lg p-2'>
      <article className='grid items-center justify-center h-full'>
        <div className='grid bg-transparent-black py-1 px-4 w-fit justify-center items-center outline-transparent-white outline outline-2 rounded'>
          <p className='text-lg flex font-bold text-center'>
            <span className='text-blue-600 flex'>
              MON <span className='text-red-600'>CARDS</span>
            </span>
          </p>
          <p className='text-gray-50 text-ss font-semibold text-center'>
            <span>{SecondaryTitle}</span>
          </p>
        </div>
      </article>
    </div>
  );
}

export default EmptyCardSlot;
