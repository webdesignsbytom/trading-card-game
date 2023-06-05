import React, { useContext, useEffect, useState } from 'react';
// API
import client from '../../utils/client';
// Context
import { UserContext } from '../../context/UserContext';
import Navbar from '../../components/nav/Navbar';
import PackSelector from '../../components/shop/PackSelector';

function ShopPage() {
  const { user, setUser } = useContext(UserContext);

  const [togglePackPurchasing, setTogglePackPurchasing] = useState(false);
  const [purchaseRequest, setPurchaseRequest] = useState({
    numPacks: 1,
    userId: user.id,
    packType: 'BREXIT',
  });

  const buyPacketsOfCards = (event) => {
    const { id } = event.target;
    console.log('id', id);

    console.log('Buy Single Pack');

    client
      .post('/packs/create-packs-for-user', purchaseRequest, false)
      .then((res) => {
        console.log('res', res.data);
      })

      .catch((err) => {
        console.error('Unable to buy packs', err);
      });
  };

  const openPackPurchasing = () => {
    setTogglePackPurchasing(!togglePackPurchasing);
  };

  return (
    <div className='bg-black main__bg h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid p-2 grid-rows-reg'>
          {/* Player data */}
          <section className='flex justify-between items-center px-4 text-gray-50'>
            <div>
              <span>Money: £1000 💷</span>
            </div>
            <div className='grid justify-center items-center text-center'>
              <h1 className='text-center text-2xl font-bold'>
                <span className='text-blue-600'>
                  CON <span className='text-red-600'>CARDS</span> STORE
                </span>
              </h1>
              <h2>Everything is unfairly priced!</h2>
            </div>
            <div>
              <span>Gems: 5 💎</span>
            </div>
          </section>

          {/* Shop main */}
          <div className='pt-4 grid '>
            <section className='grid bg-white main__bg justify-center items-center rounded pt-4'>
              {togglePackPurchasing ? (
                <div className=' grid'>
                  <PackSelector buyPacketsOfCards={buyPacketsOfCards} />
                </div>
              ) : (
                <div>
                  <button
                    onClick={openPackPurchasing}
                    className='bg-red-700 main__bg text-xl font-semibold text-white rounded outline outline-2 outline-black p-4'
                  >
                    Buy Packs
                  </button>
                </div>
              )}
            </section>
          </div>
        </main>
      </section>
    </div>
  );
}

export default ShopPage;
