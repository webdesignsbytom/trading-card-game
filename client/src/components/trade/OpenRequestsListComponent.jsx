import React, { useContext, useEffect, useState } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
import TradeListItem from './TradeListItem';
import client from '../../utils/client';

function OpenRequestsListComponent() {
  const { user } = useContext(UserContext);
  const [userOpenTradesArray, setUserOpenTradesArray] = useState([]);

  useEffect(() => {
    if (user.id) {
      client
        .get(`/trade/user-trades/${user.id}`)
        .then((res) => {
          setUserOpenTradesArray(res.data.data.trades);
        })
        .catch((err) => {
          console.error('Unable to retrieve user trades', err);
        });
    }
  }, []);

  return (
    <section className={`grid grid-cols-1 grid-rows-1 px-2 lg:px-4 mb-4`}>
      {/* LEFT */}
      <section className='bg-red-400 w-full grid main__bg outline outline-4 outline-black rounded-xl p-2'>
        <div className='p-1 lg:p-4 grid h-full grid-rows-reg'>
          <section className='grid grid-flow-col justify-between mb-2'>
            <div className='grid items-center justify-start'>
              <h2 className='text-xl lg:text-3xl font-semibold'>OPEN TRADES</h2>
            </div>
            <div className='grid items-center cursor-pointer justify-center bg-blue-500 hover:bg-blue-800  rounded outline outline-2 outline-black w-8 h-8'>
              <span className='text-2xl'>↩</span>
            </div>
          </section>

          <section className='grid h-full overflow-hidden overflow-y-scroll bg-gray-50'>
            <table className='border-2 border-solid border-black grid grid-rows-reg'>
              <thead className='bg-slate-400 h-fit border-b-2 border-solid border-black'>
                <tr className='w-full text-xs lg:text-base'>
                  <th className='border-r-2 px-1 border-solid border-black'>
                    Username
                  </th>
                  <th className='border-r-2 px-1 border-solid border-black'>
                    Your Offer
                  </th>
                  <th className='border-r-2 px-4 border-solid border-black'>
                    ↔
                  </th>
                  <th className='border-r-2 px-1 border-solid border-black'>
                    Their Offer
                  </th>
                  <th className='w-fit border-r-2 px-1 border-solid border-black'>
                    Go To Trade
                  </th>
                  <th className='w-fit'>Delete Trade</th>
                </tr>
              </thead>
              <tbody>
                {userOpenTradesArray?.map((trade, index) => {
                  return <TradeListItem trade={trade} key={index} />;
                })}
              </tbody>
            </table>
          </section>
        </div>
      </section>
    </section>
  );
}

export default OpenRequestsListComponent;
