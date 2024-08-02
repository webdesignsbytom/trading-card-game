import React, { useContext } from 'react';
// Context
import { UserContext } from '../../context/UserContext';

function ShopHeader() {
  const { user } = useContext(UserContext);
  return (
    <section className='grid sm:grid-cols-[0.5fr_1fr_0.5fr] sm:justify-between'>
      {/* Monitor size */}
      {/* Money */}
      <section className='hidden sm:grid h-full pl-4'>
        <div className='grid items-center'>
          <span className='text-xl lg:text-2xl font-semibold'>
            £{user?.bank?.funds} 💷
          </span>
        </div>
      </section>

      {/* Titles */}
      <section className='grid justify-center items-center text-center'>
        <h1 className='text-center text-2xl lg:text-5xl font-bold text__stroke font-fantasy tracking-wider'>
          <span className='text-blue-600'>
            MON <span className='text-red-600'>CARDS</span> STORE
          </span>
        </h1>
        <h2 className='text-lg font-medium font-poppins'>
          Everything is unfairly priced!
        </h2>
      </section>

      {/* Gems */}
      <section className='grid grid-cols-2 justify-between sm:grid-cols-1 h-full sm:pr-4 w-full'>
        <div className='grid sm:hidden sm:items-center'>
          <span className='text-xl lg:text-2xl font-semibold'>
            £{user?.bank?.funds} 💷
          </span>
        </div>
        <div className='grid sm:items-center justify-end'>
          <span className='text-xl lg:text-2xl font-semibold'>
            {user?.bank?.gems} 💎
          </span>
        </div>
      </section>
    </section>
  );
}

export default ShopHeader;
