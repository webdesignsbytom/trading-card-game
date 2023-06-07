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
  const [costOfStandardPack] = useState(10);
  const [purchasingCovidPack, setPurchasingCovidPack] = useState(false);
  const [purchasingElectionPack, setPurchasingElectionPack] = useState(false);
  const [purchasingBrexitPack, setPurchasingBrexitPack] = useState(false);

  const buyPacketsOfCards = (event) => {
    const { id } = event.target;
    console.log('id', id);
    let packTypeUpper = id.toUpperCase();

    let purchaseRequest = {
      packType: packTypeUpper,
      userId: user.id,
      cost: costOfStandardPack,
    };

    if (id === 'brexit') {
      setPurchasingBrexitPack(true);
    }
    if (id === 'covid') {
      setPurchasingCovidPack(true);
    }
    if (id === 'election') {
      setPurchasingElectionPack(true);
    }

    client
      .post('/packs/buy-pack-for-user', purchaseRequest)
      .then((res) => {
        console.log('res', res.data);
        setUser(res.data.data.updatedUser);
        setPurchasingElectionPack(false);
        setPurchasingBrexitPack(false);
        setPurchasingCovidPack(false);
      })

      .catch((err) => {
        setPurchasingElectionPack(false);
        setPurchasingBrexitPack(false);
        setPurchasingCovidPack(false);
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
          <section className='flex justify-between items-center px-4 mt-2 text-gray-50'>
            <div>
              <span>Money: £{user?.bank?.funds} 💷</span>
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
              <span>Gems: {user?.bank?.gems} 💎</span>
            </div>
          </section>

          {/* Shop main */}
          <div className='pt-4 grid '>
            <section className='grid bg-white main__bg justify-center items-center rounded pt-4'>
              {togglePackPurchasing ? (
                <div className=' grid'>
                  <PackSelector
                    buyPacketsOfCards={buyPacketsOfCards}
                    costOfStandardPack={costOfStandardPack}
                    purchasingCovidPack={purchasingCovidPack}
                    purchasingElectionPack={purchasingElectionPack}
                    purchasingBrexitPack={purchasingBrexitPack}
                  />
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
