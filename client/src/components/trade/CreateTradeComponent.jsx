import React, { useContext } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
// Components
import Card from '../card/Card';
// Data
import CardTradeSelector from '../../utils/cards/CardTradeSelector';

function CreateTradeComponent({
  handleChange,
  tradingPartner,
  selectUserForTrade,
  handleChangeCard,
  notFoundUser,
  searchForUser,
  displayCard,
}) {
  const { user } = useContext(UserContext);

  return (
    <section className='grid lg:grid-cols-2x gap-2 overflow-hidden'>
      {/* Main container */}
      <section className='bg-red-400 grid grid-rows-2 gap-2 main__bg border-4 border-main-border border-solid rounded-xl p-2 overflow-hidden'>
        {/* User container */}
        <section className='grid w-full h-full grid-cols-rev gap-2 overflow-hidden'>
          <div className='grid w-full h-full overflow-hidden'>
            <img
              className='rounded-xl w-full h-fit object-contain'
              src={user?.profile?.profileimageUrl}
              alt='User profile'
            />
          </div>

          {/* Create trade */}
          <section className='grid grid-rows-a1a h-full w-full overflow-hidden'>
            <section className='grid h-fit'>
              <div className='text-center'>
                <h2 className='text-xl font-semibold'>Create New Trade</h2>
              </div>
            </section>

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
                  className='outline outline-2 outline-black bg-blue-600 hover:bg-blue-800 active:scale-95 main__bg no__highlights  py-2 px-4 my-2 rounded-xl'
                  type='submit'
                >
                  <span className='text-xl font-semibold'>Find User</span>
                </button>
              </div>
            </section>

            <section className='grid h-fit'>
              <div className='text-center'>
                <h5>Select a card to trade</h5>
              </div>
              <div>
                <CardTradeSelector handleChange={handleChangeCard} />
              </div>
            </section>
          </section>
        </section>

        {/* select card to trade */}
        <section className='grid h-full w-full overflow-hidden bg-blue-400'>
          <div
            className={`grid ${
              displayCard.id && 'grid-cols-reg'
            } gap-4 overflow-hidden my-1 py-2`}
          >
            {/* Trading card */}
            {displayCard.id && <Card cardData={displayCard} />}
            
            <section className='grid w-full bg-yellow-400'>
              <div className='grid items-center justify-center'>
                <button className='bg-red-700 hover:bg-red-500 font-semibold active:scale-95 outline outline-2 outline-black rounded-xl p-2'>
                  TRADE
                </button>
              </div>
            </section>
          </div>
        </section>
      </section>

      <section className='bg-green-400 main__bg border-4 border-main-border border-solid rounded-xl p-2'>
        {tradingPartner?.id && (
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
        )}
      </section>
    </section>
  );
}

export default CreateTradeComponent;
