import React, { useContext } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
import { TradingContext } from '../../context/TradingContext';
// Components
import Card from '../card/Card';

function OpenTradeComponent() {
  const { user } = useContext(UserContext);
  const { selectedTradeItem } = useContext(TradingContext);


  return (
    <section className={`grid grid-cols-2x gap-4 grid-rows-1 px-4 mb-4`}>
      <section className='bg-red-400 grid grid-rows-a1a main__bg outline outline-4 outline-black rounded-xl p-2'>
        {/* imageUrl and search */}
        <div className='grid grid-cols-aa'>
          <div className='top-4 left-4 w-1/2'>
            <img
              className='rounded-xl object-cover'
              src={user?.profile?.profileimageUrl}
              alt='User profile'
            />
          </div>

          <section className='grid items-center justify-center gap-4 w-full'>
            <div className='grid h-fit'>
              <div className='text-center flex-wrap'>
                <p>Trade </p>
                <p className='-mt-2'></p>
              </div>
            </div>
          </section>
        </div>

        {/* select card to trade */}
        <section className='grid'>
          <div className='grid gap-2 mt-4 mb-2'>
            <section className='bg-white main__bg py-1 px-2 h-fit rounded w-fit'>
              <div>
                <h5>Card you offer</h5>
              </div>
            </section>
            <section className='grid w-min h-fit px-2'>
              {/* <Card cardData={displayCard} /> */}
            </section>
          </div>
        </section>
      </section>

      <section className='bg-red-400 main__bg outline outline-4 outline-black rounded-xl p-2'>
        {/* {tradingPartner?.id && (
        <section>
          <div>
            <img
              className='rounded-xl object-cover'
              src={tradingPartner.profileimageUrl}
              alt='Trade partner profile'
            />
          </div>
          <div className='text-center'>
            <h4 className='text-xl font-semibold'>
              {tradingPartner?.username}
            </h4>
          </div>
          <div className='grid items-center justify-center p-1'>
            <button
              onClick={selectUserForTrade}
              className='outline outline-2 outline-black bg-blue-600 main__bg py-2 px-4 my-2 rounded-xl'
              type='submit'
            >
              <span className='text-xl font-semibold'>Select User</span>
            </button>
          </div>
        </section>
      )} */}
      </section>
    </section>
  );
}

export default OpenTradeComponent;
