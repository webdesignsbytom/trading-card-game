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
import {
  BUY_PACK_API,
  BUY_PACK_PAGE_URL,
  SHOP_PAGE_URL,
} from '../../utils/Constants';
import {
  PACK_TYPE_ALPHA,
  PACK_TYPE_BETA,
  PACK_TYPE_GAMMA,
  StandardPackCost,
} from '../../utils/cards/CardGameConstants';
// Images
import ShopKeeper from '../../assets/images/backgrounds/shop_keeper_temp.png';
import { ShopSalesItem } from '../../utils/cards/ShopItems';

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
      .post(BUY_PACK_API, purchaseRequest)
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

  const openSubMenu= (category) => {
  };

  return (
    <div className='bg-white main__bg h-screen grid overflow-hidden'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />

        <main className='grid p-4 grid-rows-reg gap-4 h-full w-full overflow-hidden'>
          {/* Shop header */}
          <ShopHeader />

          {/* Main shop */}
          <section className='grid h-full w-full overflow-hidden'>
            <div className='grid md:grid-cols-2 gap-4 h-full w-full'>
              {/* Shop items */}
              <section className='grid bg-blue-400 main__bg rounded overflow-hidden w-full h-full grid_cols_card gap-4'>
                {ShopSalesItem.map((category, index) => (
                  <article
                    key={index}
                    className='grid p-4 cursor-pointer'
                    style={{ aspectRatio: '2 / 3' }}
                    onClick={() => openSubMenu(category)}
                  >
                    <div className='grid grid-rows-rev w-full h-full'>
                      <div className='grid h-full w-full overflow-hidden'>
                        <img
                          src={category.imageUrl}
                          alt={category.category}
                          className='object-contain w-full h-full'
                        />
                      </div>
                      <div className='h-fit text-center'>
                        <h6>{category.category}</h6>
                      </div>
                    </div>
                  </article>
                ))}
              </section>

              {/* Shop owner */}
              <section
                className='grid bg-blue-500 main__bg rounded overflow-hidden w-full h-full'
                style={{
                  backgroundImage: `url(${ShopKeeper})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></section>
            </div>
          </section>

          {/* Shop main */}
          {/* <div className='pt-4 grid '>
            <section className='grid bg-blue-400 main__bg justify-center items-center rounded-xl pt-4'>
              {togglePackPurchasing && (
                <div className='grid'>
                  <PackSelector
                    buyPacketsOfCards={buyPacketsOfCards}
                    costOfStandardPack={costOfStandardPack}
                    purchasingBetaPack={purchasingBetaPack}
                    purchasingGammaPack={purchasingGammaPack}
                    purchasingAlphaPack={purchasingAlphaPack}
                  />
                </div>
              )}
            </section>
          </div> */}
        </main>
      </section>
    </div>
  );
}

export default ShopPage;
