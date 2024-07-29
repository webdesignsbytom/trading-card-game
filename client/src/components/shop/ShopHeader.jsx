import React, { useContext } from 'react';
// Context
import { UserContext } from '../../context/UserContext';

function ShopHeader() {
  const { user } = useContext(UserContext);
  return (
    <div>
      {/* Player data */}
      {/* Monitor size */}
      <section className='hidden lg:flex justify-between items-center px-4 mt-2 '>
        <div>
          <span className='text-xl lg:text-2xl font-semibold'>
            £{user?.bank?.funds} 💷
          </span>
        </div>
        <div className='grid justify-center items-center text-center'>
          <h1 className='text-center text-2xl lg:text-4xl font-bold text__stroke font-gasoek tracking-wide'>
            <span className='text-blue-600'>
              MON <span className='text-red-600'>CARDS</span> STORE
            </span>
          </h1>
          <h2>Everything is unfairly priced!</h2>
        </div>
        <div>
          <span className='text-xl lg:text-2xl font-semibold'>
            {user?.bank?.gems} 💎
          </span>
        </div>
      </section>
      {/* PHONE SIXE */}
      <section className='grid lg:hidden justify-center items-center px-4'>
        <div className='grid justify-center items-center text-center w-full'>
          <h1 className='text-center text-3xl lg:text-4xl font-bold text__stroke font-gasoek tracking-wide'>
            <span className='text-blue-600'>
              MON <span className='text-red-600'>CARDS</span> STORE
            </span>
          </h1>
          <h2 className='font-semibold mt-1'>Everything is unfairly priced!</h2>
        </div>
        <div className='flex justify-between w-full gap-6 mt-2'>
          <div>
            <span className='text-xl lg:text-2xl font-semibold text-center grid items-center'>
              £{user?.bank?.funds} 💷
            </span>
          </div>
          <div>
            <span className='text-xl lg:text-2xl font-semibold text-center grid items-center'>
              {user?.bank?.gems} 💎
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShopHeader;
