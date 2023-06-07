import React from 'react';

function MainTextLogo() {
  console.log('logo back');
  return (
    <div className='grid bg-transparent-black py-1 px-4 w-fit justify-center items-center outline-transparent-white outline outline-2 rounded'>
      <p className='text-lg flex font-bold text-center'>
        <span className='text-blue-600 flex'>
          CON <span className='text-red-600'>CARDS</span>
        </span>
      </p>
      <p className='text-gray-50 text-ss font-semibold text-center'>
        <span>The Torie Trading Card Game</span>
      </p>
    </div>
  );
}

export default MainTextLogo;
