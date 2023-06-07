import React from 'react';
// Api
import client from '../../utils/client';
// Context

function TradeListItem({ trade }) {
  const deleteTrade = (trade) => {
    client
      .delete(`/trade/delete-trade/${trade.id}`)
      .then((res) => {
        console.log(res.data.data.deletedTrade);
      })
      .catch((err) => {
        console.error('Unable to delete trade', err);
      });
  };

  const openTrade = (trade) => {}

  return (
    <li className='grid grid-flow-col h-full p-1'>
      <section className='grid grid-flow-col gap-2 items-center justify-center'>
        <div>{trade.recieverUsername}</div>
        <div className='grid items-center justify-center text-2xl'>
          <span>↔</span>
        </div>
        <div>{trade.creatorCardName}</div>
        <div>{trade.recieverCardName}</div>
      </section>
      <section className='w-fit grid gap-1 px-2 grid-flow-col'>
        <div>
          <button onClick={openTrade} className='py-1 px-2 outline outline-1 outline-black bg-blue-600 rounded-xl hover:bg-blue-800 active:scale-95'>
            GoTo
          </button>
        </div>
        <div>
          <button
            onClick={() => deleteTrade(trade)}
            className='py-1 px-2 outline outline-1 outline-black bg-red-600 rounded-xl hover:bg-red-800 active:scale-95'
          >
            Delete
          </button>
        </div>
      </section>
    </li>
  );
}

export default TradeListItem;
