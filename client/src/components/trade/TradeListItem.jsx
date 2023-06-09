import React, { useContext } from 'react';
// Api
import client from '../../utils/client';
import { useNavigate } from 'react-router-dom';
// Context
import { TradingContext } from '../../context/TradingContext';

function TradeListItem({ trade }) {
  const { openTradeItem, closeTradeItem, tradeItemOpen } =
    useContext(TradingContext);

  console.log('ppppppp', trade);

  const deleteTrade = (trade) => {
    client
      .delete(`/trade/delete-trade/${trade.id}`)
      .then((res) => {
        console.log('Deleted', res.data.data.deletedTrade);
      })
      .catch((err) => {
        console.error('Unable to delete trade', err);
      });
  };

  return (
    <tr className='w-full'>
      <td className='w-44'>{trade.recieverUsername}</td>
      <td className='w-44'>{trade.creatorCardName}</td>
      <td className='px-4'>
        <span>↔</span>
      </td>
      <td className='w-44'>{trade.recieverCardName}</td>
      <td className=''>
        <button
          onClick={() => openTradeItem(trade)}
          className='text-sm px-2 outline outline-1 outline-black bg-blue-600 rounded-xl hover:bg-blue-800 active:scale-95'
        >
          GoTo
        </button>
      </td>
      <td className=''>
        <button
          onClick={() => deleteTrade(trade)}
          className='text-sm px-2 outline outline-1 outline-black bg-red-600 rounded-xl hover:bg-red-800 active:scale-95'
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TradeListItem;
