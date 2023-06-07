import React, { useContext } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
import TradeListItem from './TradeListItem';

function OpenRequestsListComponent({ tradingPartner, selectUserForTrade }) {
  const { user } = useContext(UserContext);

  return (
    <>
      {/* LEFT */}
      <section className='bg-red-400 grid grid-rows-a1a main__bg outline outline-4 outline-black rounded-xl p-2'>
        <div className='p-4 grid grid-rows-reg'>
          <div>
            <h2 className='text-3xl font-semibold'>OPEN TRADES</h2>
          </div>
          <section className='grid h-full overflow-hidden overflow-y-scroll'>
            <ul className='mt-2'>
              {user?.createdTrades?.map((trade, index) => {
                return <TradeListItem trade={trade} key={index} />;
              })}
              {user?.recievedTrades?.map((trade, index) => {
                return <TradeListItem trade={trade} key={index} />;
              })}
            </ul>
          </section>
        </div>
      </section>

      {/* RIGHT */}
      <section className='bg-red-400 main__bg outline outline-4 outline-black rounded-xl p-2'>
        {tradingPartner?.id && (
          <section>
            <div>
              <img
                className='rounded-xl object-cover'
                src={tradingPartner.profileImage}
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
        )}
      </section>
    </>
  );
}

export default OpenRequestsListComponent;
