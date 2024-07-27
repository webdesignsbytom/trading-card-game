import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
import client from '../../api/client';
import Navbar from '../../components/nav/Navbar';
import PackSelector from '../../components/shop/PackSelector';

function BuyPackPage() {
  const { user, setUser } = useContext(UserContext);
  const { setActiveNav } = useContext(ToggleContext);
  const [togglePackPurchasing, setTogglePackPurchasing] = useState(false);
  const [costOfStandardPack] = useState(10);
  const [purchasingCovidPack, setPurchasingCovidPack] = useState(false);
  const [purchasingElectionPack, setPurchasingElectionPack] = useState(false);
  const [purchasingBrexitPack, setPurchasingBrexitPack] = useState(false);

  useEffect(() => {
    setActiveNav('/shop');
  }, []);

  const buyPacketsOfCards = (name) => {
    console.log('id tt', name);

    let purchaseRequest = {
      packType: name,
      userId: user.id,
      cost: costOfStandardPack,
    };

    if (name === 'BREXIT') {
      setPurchasingBrexitPack(true);
    }
    if (name === 'COVID') {
      setPurchasingCovidPack(true);
    }
    if (name === 'ELECTION') {
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
    <div className='bg-white main__bg h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid p-2 grid-rows-reg'>
          {/* Player data */}
          {/* Monitor size */}
          <section className='hidden lg:flex justify-between items-center px-4 mt-2 '>
            <div>
              <span className='text-xl lg:text-2xl font-semibold'>
                £{user?.bank?.funds} 💷
              </span>
            </div>
            <div className='grid justify-center items-center text-center'>
              <h1 className='text-center text-2xl lg:text-4xl font-bold text__stroke font-gasoek tracking-wide'>
                <span className='text-blue-600'>
                  CON <span className='text-red-600'>CARDS</span> STORE
                </span>
              </h1>
              <h2>Everything is unfairly priced!</h2>
            </div>
            <div>
              <span className='text-xl lg:text-2xl font-semibold'>
                {user?.bank?.gems} 💎
              </span>
            </div>
          </section>
          {/* PHONE SIXE */}
          <section className='grid lg:hidden justify-center items-center px-4'>
            <div className='grid justify-center items-center text-center w-full'>
              <h1 className='text-center text-3xl lg:text-4xl font-bold text__stroke font-gasoek tracking-wide'>
                <span className='text-blue-600'>
                  CON <span className='text-red-600'>CARDS</span> STORE
                </span>
              </h1>
              <h2 className='font-semibold mt-1'>
                Everything is unfairly priced!
              </h2>
            </div>
            <div className='flex justify-between w-full gap-6 mt-2'>
              <div>
                <span className='text-xl lg:text-2xl font-semibold text-center grid items-center'>
                  £{user?.bank?.funds} 💷
                </span>
              </div>
              <div>
                <span className='text-xl lg:text-2xl font-semibold text-center grid items-center'>
                  {user?.bank?.gems} 💎
                </span>
              </div>
            </div>
          </section>

          {/* Shop main */}
          <div className='pt-4 grid '>
            <section className='grid grid-rows-rev bg-black main__bg justify-center items-center rounded-xl pt-4'>
              <div className='grid'>
                <PackSelector
                  buyPacketsOfCards={buyPacketsOfCards}
                  costOfStandardPack={costOfStandardPack}
                  purchasingCovidPack={purchasingCovidPack}
                  purchasingElectionPack={purchasingElectionPack}
                  purchasingBrexitPack={purchasingBrexitPack}
                />
              </div>

              <div className='mb-20 text-center'>
                <p className='text-xl text-gray-50'>
                  All packs come with 12 cards and one guaranteed holographic
                  card
                </p>
              </div>
            </section>
          </div>
        </main>
      </section>
    </div>
  );
}

export default BuyPackPage;
