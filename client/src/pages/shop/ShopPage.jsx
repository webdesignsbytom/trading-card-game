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
    userId: '83ec7407-5ad3-4c56-8c62-0b3fb03c7f22',
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
        console.log('res', res.data.data.packs);
        setUser({
          ...user,
          unopenedPacks: [...user.unopenedPacks, ...res.data.data.packs],
        });
      })

      .catch((err) => {
        console.error('Unable to login', err);
      });
  };

  const openPackPurchasing = () => {
    setTogglePackPurchasing(!togglePackPurchasing)
  };

  return (
    <div className='h-screen bg-red-100 grid'>
      <section className='bg-blue-500 grid h-full overflow-hidden grid-cols-reg'>
        <Navbar />
        <main className='grid bg-red-400 p-4 grid-rows-reg'>
          {/* Player data */}
          <section className='flex justify-between'>
            <div>
              <span>Money: £1000</span>
            </div>
            <div>
              <span>Unopened: {user.unopenedPacks.length}</span>
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
