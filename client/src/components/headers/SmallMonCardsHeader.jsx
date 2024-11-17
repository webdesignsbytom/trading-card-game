import React from 'react';
import { Link } from 'react-router-dom';
// Constants
import { HOME_PAGE_URL, SubtitleMain } from '../../utils/Constants';

function SmallMonCardsHeader() {
  return (
    <header className='grid justify-center items-center'>
      <Link to={HOME_PAGE_URL}>
        <div className='grid bg-secondary-colour main__bg w-fit rounded-lg border-2 border-main-border border-solid py-1 px-2'>
          <p className='text-center text-3xl font-extrabold text__stroke'>
            <span className='text-blue-600 font-fantasy'>
              MON <span className='text-red-600'>CARDS</span>
            </span>
          </p>
          <p className='font-bold text-xs md:text-sm font-poppins tracking-tight text-gray-900'>
            <span>{SubtitleMain}</span>
          </p>
        </div>
      </Link>
    </header>
  );
}

export default SmallMonCardsHeader;
