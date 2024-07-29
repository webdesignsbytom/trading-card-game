import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// API
import client from '../../api/client';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Navbar from '../../components/nav/Navbar';
import PackSelector from '../../components/shop/PackSelector';
import ShopHeader from '../../components/shop/ShopHeader';
// Constants
import { BUY_PACK_PAGE_URL, SHOP_PAGE_URL } from '../../utils/Constants';
import {
  PACK_TYPE_ALPHA,
  PACK_TYPE_BETA,
  PACK_TYPE_GAMMA,
  StandardPackCost,
} from '../../utils/cards/CardGameConstants';

function ShopPage() {
  const { user, setUser } = useContext(UserContext);
  const { setActiveNav } = useContext(ToggleContext);
  const [togglePackPurchasing, setTogglePackPurchasing] = useState(false);
  const [costOfStandardPack] = useState(StandardPackCost);
  const [purchasingBetaPack, setPurchasingBetaPack] = useState(false);
  const [purchasingGammaPack, setPurchasingGammaPack] = useState(false);
  const [purchasingAlphaPack, setPurchasingAlphaPack] = useState(false);

  useEffect(() => {
    setActiveNav(SHOP_PAGE_URL);
  }, []);

  const buyPacketsOfCards = (name) => {
    console.log('buyPacketsOfCards: id tt', name);

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
            <section className='grid bg-blue-400 main__bg justify-center items-center rounded-xl pt-4'>
              {togglePackPurchasing ? (
                <div className='grid'>
                  <PackSelector
                    buyPacketsOfCards={buyPacketsOfCards}
                    costOfStandardPack={costOfStandardPack}
                    purchasingBetaPack={purchasingBetaPack}
                    purchasingGammaPack={purchasingGammaPack}
                    purchasingAlphaPack={purchasingAlphaPack}
                  />
                </div>
              ) : (
                <div>
                  <Link to={BUY_PACK_PAGE_URL}>
                    <button
                      onClick={openPackPurchasing}
                      className='bg-red-700 hover:bg-red-500 main__bg text-xl uppercase font-semibold text-gray-50 hover:text-white active:scale-95 rounded outline outline-2 outline-black p-4 shadow-2xl'
                      aria-label='But pack of cards button'
                    >
                      Buy Packs
                    </button>
                  </Link>
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
