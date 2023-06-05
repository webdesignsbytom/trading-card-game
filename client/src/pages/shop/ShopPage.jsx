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
    numPacks: 2,
    userId: 'd31932ab-9f32-4461-9cfa-66cbdb02986e',
    packType: 'BREXIT',
  });

  const buyPacketsOfCards = (event) => {
    const { id } = event.target;
    console.log('id', id);

    console.log('Buy Single Pack');

    client
      .post('/con-cards/buyPacketsOfCards', purchaseRequest, false)
      .then((res) => {
        console.log('res', res.data);
      })

      .catch((err) => {
        console.error('Unable to login', err);
      });
  };

  const openPackPurchasing = () => {
    setTogglePackPurchasing(!togglePackPurchasing);
  };

  return (
    <div className='bg-red-100 h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid bg-red-400 p-4 grid-rows-reg'>
          {/* Player data */}
          <section className='flex justify-between'>
            <div>
              <span>Money: £1000</span>
            </div>
            <div>
              <span>Unopened: {user?.unopenedPacks?.length}</span>
            </div>
          </section>

          {/* Shop main */}
          <section className='grid bg-green-200 justify-center items-center'>
            {togglePackPurchasing ? (
              <div>
                <PackSelector buyPacketsOfCards={buyPacketsOfCards} />
              </div>
            ) : (
              <div>
                <button
                  onClick={openPackPurchasing}
                  className='rounded outline outline-2 outline-black p-4'
                >
                  Buy Packs
                </button>
              </div>
            )}
          </section>
        </main>
      </section>
    </div>
  );
}

export default ShopPage;
