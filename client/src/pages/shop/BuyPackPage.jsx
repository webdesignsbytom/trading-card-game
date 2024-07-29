import React, { useContext, useEffect, useState } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Api
import client from '../../api/client';
// Components
import Navbar from '../../components/nav/Navbar';
import PackSelector from '../../components/shop/PackSelector';
// Constants
import { SHOP_PAGE_URL } from '../../utils/Constants';
import { PACK_TYPE_ALPHA, PACK_TYPE_BETA, PACK_TYPE_GAMMA } from '../../utils/cards/CardGameConstants';
import ShopHeader from '../../components/shop/ShopHeader';

function BuyPackPage() {
  const { user, setUser } = useContext(UserContext);
  const { setActiveNav } = useContext(ToggleContext);
  const [togglePackPurchasing, setTogglePackPurchasing] = useState(false);
  const [costOfStandardPack] = useState(10);
  const [purchasingBetaPack, setPurchasingBetaPack] = useState(false);
  const [purchasingGammaPack, setPurchasingGammaPack] = useState(false);
  const [purchasingAlphaPack, setPurchasingAlphaPack] = useState(false);

  useEffect(() => {
    setActiveNav(SHOP_PAGE_URL);
  }, []);

  const buyPacketsOfCards = (name) => {
    console.log('id tt', name);

    let purchaseRequest = {
      packType: name,
      userId: user.id,
      cost: costOfStandardPack,
    };

    if (name === PACK_TYPE_ALPHA) {
      setPurchasingAlphaPack(true);
    }
    if (name === PACK_TYPE_BETA) {
      setPurchasingBetaPack(true);
    }
    if (name === PACK_TYPE_GAMMA) {
      setPurchasingGammaPack(true);
    }

    client
      .post('/packs/buy-pack-for-user', purchaseRequest)
      .then((res) => {
        console.log('res', res.data);
        setUser(res.data.data.updatedUser);
        setPurchasingGammaPack(false);
        setPurchasingAlphaPack(false);
        setPurchasingBetaPack(false);
      })

      .catch((err) => {
        setPurchasingGammaPack(false);
        setPurchasingAlphaPack(false);
        setPurchasingBetaPack(false);
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
          <ShopHeader />

          {/* Shop main */}
          <div className='pt-4 grid '>
            <section className='grid grid-rows-rev bg-black main__bg justify-center items-center rounded-xl pt-4'>
              <div className='grid'>
                <PackSelector
                  buyPacketsOfCards={buyPacketsOfCards}
                  costOfStandardPack={costOfStandardPack}
                  purchasingBetaPack={purchasingBetaPack}
                  purchasingGammaPack={purchasingGammaPack}
                  purchasingAlphaPack={purchasingAlphaPack}
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
