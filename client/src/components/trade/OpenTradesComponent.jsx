import React, { useContext, useEffect, useState } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
import { TradingContext } from '../../context/TradingContext';
// Components
import Card from '../card/Card';
// Api
import client from '../../api/client';
import { GET_ALL_OPEN_TRADE_API } from '../../utils/Constants';
import CardTradeSelector from '../../utils/cards/CardTradeSelector';
import OfferingTradeComponent from './OfferingTradeComponent';

function OpenTradesComponent() {
  const { user } = useContext(UserContext);
  const { selectedTradeItem, createTradeResponseOffer } =
    useContext(TradingContext);

  const [allOpenTrades, setAllOpenTrades] = useState([]);
  const [tradeComponentOpen, setTradeComponentOpen] = useState(true);

  useEffect(() => {
    client
      .get(GET_ALL_OPEN_TRADE_API)
      .then((res) => {
        setAllOpenTrades(res.data.data.trades);
      })
      .catch((err) => {
        console.error('Unable to get all open trades', err);
      });
  }, []);

  return (
    <section
      className={`grid bg-main-colour main__bg border-4 border-main-border border-solid rounded-xl overflow-hidden p-2`}
    >
      <div className='grid grid-rows-reg gap-2'>
        <section>open trades</section>
        <section className='grid h-full overflow-y-auto'>
          <div className='grid gap-[1px] h-fit'>
            {allOpenTrades?.map((tradeItem, index) => {
              return (
                <article
                  key={index}
                  className='bg-white border-2 py-[1px] grid grid-flow-col justify-between border-main-border border-solid rounded h-fit px-1 text-sm'
                >
                  <div className='grid items-center'>
                    Card name: {tradeItem.cardName}
                  </div>
                  <div className='grid items-center'>
                    From: {tradeItem.creatorUsername}
                  </div>

                  <section>
                    <button
                      onClick={createTradeResponseOffer}
                      className='bg-green-500 px-2 py-0.5 rounded active:scale-95 hover:brightness-105'
                    >
                      Make Offer
                    </button>
                  </section>
                </article>
              );
            })}
          </div>

          {tradeComponentOpen && (
            <OfferingTradeComponent />
          )}
        </section>
      </div>
    </section>
  );
}

export default OpenTradesComponent;
