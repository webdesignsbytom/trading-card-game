import React, { useContext } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
import CardTradeSelector from '../../utils/cards/CardTradeSelector';

function UserTradeComponent({ handleChange, notFoundUser, searchForUser, handleChangeCard }) {
  const { user } = useContext(UserContext);
  return (
    <section className='grid w-full h-full lg:grid-cols-3 gap-2 overflow-hidden bg-yellow-500'>
      {/* User image */}
      <section className='bg-green-300 grid w-full h-full p-2'>
        <div className='grid w-full h-full'>
          <img
            className='rounded-xl w-full h-full object-cover shadow-xl'
            src={user?.profile?.profileimageUrl}
            alt='User profile'
          />
        </div>
      </section>

      {/* Card to trade */}
      <section className='bg-green-300 grid overflow-hidden w-full h-full p-2'>
        <div className='grid h-fit'>
          <div className='text-center'>
            <h5>Select a card to trade</h5>
          </div>
          <div>
            <CardTradeSelector handleChange={handleChangeCard} />
          </div>
        </div>
      </section>

      {/* Find user */}
      <section className='grid grid-rows-a1a h-full w-full overflow-hidden bg-green-300'>
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
      </section>
    </section>
  );
}

export default UserTradeComponent;
