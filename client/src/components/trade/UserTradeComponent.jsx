import React, { useContext, useState } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
import { TradingContext } from '../../context/TradingContext';
// Utils
import CardTradeSelector from '../../utils/cards/CardTradeSelector';
// Components
import Card from '../card/Card';

function UserTradeComponent({
  handleChange,
  notFoundUser,
  searchForUser,
  handleChangeCard,
  userCardToTrade,
}) {
  const { user } = useContext(UserContext);
  const { tradeTypeSelected, setTradeTypeSelected, createNewOpenTrade } = useContext(TradingContext);
  
  return (
    <section className='grid w-full h-full lg:grid-cols-3 gap-2 overflow-hidden'>
      {/* User image */}
      <section className='grid w-full h-full p-2'>
        <div className='grid w-full h-full'>
          <img
            className='rounded-xl w-full h-full object-cover shadow-xl'
            src={user?.profile?.profileimageUrl}
            alt='User profile'
          />
        </div>
      </section>

      {/* Card to trade */}
      <section className='grid grid-rows-reg overflow-hidden w-full h-full p-2'>
        <div className='grid h-fit'>
          <div className='text-center'>
            <h5>Select a card to trade</h5>
          </div>
          <div className='grid'>
            <CardTradeSelector handleChange={handleChangeCard} />
          </div>
        </div>

        <div className='grid pt-1'>
          <Card cardData={userCardToTrade} />
        </div>
      </section>

      {/* Find user */}
      <section className='grid grid-rows-reg h-full w-full overflow-hidden p-2'>
        <section className='grid h-fit'>
          <div className='text-center'>
            <h2 className='text-xl font-semibold'>Create New Trade</h2>
          </div>
        </section>

        {tradeTypeSelected === 'user' ? (
          <section className='grid h-full items-center'>
            <div className='text-center flex-wrap'>
              <p>Enter the user name of </p>
              <p className=''>who you wish to trade with</p>
            </div>
            <div className='grid items-center justify-center py-1 px-2'>
              <input
                onChange={handleChange}
                className='rounded px-1 py-1'
                type='text'
                name='searchUsername'
                id='searchUsername'
                placeholder='Search username...'
                required
              />
            </div>

            {/* Error message */}
            {notFoundUser && (
              <section className=''>
                <div className='text-center bg-white nav__bg outline outline-4 outline-black rounded p-2'>
                  <p className='text-red-600 font-semibold text-xl'>
                    User Not Found!
                  </p>
                </div>
              </section>
            )}

            <div className='grid'>
              <button
                onClick={searchForUser}
                className='border-2 border-main-border border-solid bg-main-colour hover:bg-blue-800 active:scale-95 main__bg no__highlights  py-2 px-4 my-2 rounded-xl'
                type='submit'
              >
                <span className='text-xl font-semibold'>Find User</span>
              </button>
            </div>
          </section>
        ) : tradeTypeSelected === 'open' ? (
          <section className='grid h-full items-center'>
            <div className='text-center flex-wrap px-4'>
              <p>Select a card to trade and place it on the open market to see what offers you can get.</p>
            </div>


            <div className='grid items-end h-full'>
              <button
                onClick={createNewOpenTrade}
                className='border-2 border-main-border border-solid bg-main-colour hover:bg-blue-800 active:scale-95 main__bg no__highlights  py-2 px-4 my-2 rounded-xl'
                type='submit'
              >
                <span className='text-xl font-semibold'>Create Trade</span>
              </button>
            </div>
          </section>
        ) : (
          <section className='grid items-center'>
            <div>
              <div className='grid'>
                <button
                  onClick={() => setTradeTypeSelected('open')}
                  className='border-2 border-main-border border-solid bg-main-colour hover:bg-blue-800 active:scale-95 main__bg no__highlights  py-2 px-4 my-2 rounded-xl'
                  type='submit'
                >
                  <span className='text-xl font-semibold'>
                    Create Open Trade
                  </span>
                </button>
              </div>
              <div className='grid'>
                <button
                  onClick={() => setTradeTypeSelected('user')}
                  className='border-2 border-main-border border-solid bg-nav-colour hover:bg-blue-800 active:scale-95 main__bg no__highlights py-2 px-4 my-2 rounded-xl'
                  type='submit'
                >
                  <span className='text-xl font-semibold'>Trade With User</span>
                </button>
              </div>
            </div>
          </section>
        )}
      </section>
    </section>
  );
}

export default UserTradeComponent;
