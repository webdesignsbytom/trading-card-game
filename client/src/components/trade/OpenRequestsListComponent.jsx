import React from 'react';

function OpenRequestsListComponent({ tradingPartner, selectUserForTrade }) {
  return (
    <>
      {/* LEFT */}
      <section className='bg-red-400 grid grid-rows-a1a main__bg outline outline-4 outline-black rounded-xl p-2'></section>

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
