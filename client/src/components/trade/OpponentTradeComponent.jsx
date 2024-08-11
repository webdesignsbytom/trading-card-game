import React from 'react';
// Components
import Card from '../card/Card';

function OpponentTradeComponent({ displayCard }) {
  return (
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
  );
}

export default OpponentTradeComponent;
