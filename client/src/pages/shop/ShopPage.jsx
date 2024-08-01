import React, { useContext, useEffect, useState } from 'react';
// Api
import client from '../../api/client';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Navbar from '../../components/nav/Navbar';
import ShopHeader from '../../components/shop/ShopHeader';
import StoreFrontContainer from '../../components/shop/StoreFrontContainer';
// Constants
import { BUY_PACK_API, SHOP_PAGE_URL } from '../../utils/Constants';
import {
  PACK_TYPE_ALPHA,
  PACK_TYPE_BETA,
  PACK_TYPE_GAMMA,
  shopDisplayOptions,
  StandardPackCost,
} from '../../utils/cards/CardGameConstants';
// Images
import ShopKeeper from '../../assets/images/backgrounds/shop_keeper_main_with_potions.png';
import PurchasingContainer from '../../components/shop/PurchasingContainer';

function ShopPage() {
  const { user, setUser } = useContext(UserContext);
  const { setActiveNav } = useContext(ToggleContext);

  const [currentDisplay, setCurrentDisplay] = useState(
    shopDisplayOptions.STOREFRONT
  );

  const [displayItems, setDisplayItems] = useState({});

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
      cost: StandardPackCost,
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

  const openSubMenu = (category) => {
    console.log('category', category);
    if (category.category === 'Foil Packs') {
      setCurrentDisplay(shopDisplayOptions.FOILPACK);
    } else if (category.category === 'Boxes') {
      setCurrentDisplay(shopDisplayOptions.BOXSETS);
    }

    setDisplayItems(category.items);
  };

  const goBack = () => {
    setCurrentDisplay(shopDisplayOptions.STOREFRONT);
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
              <section className='grid bg-blue-400 main__bg rounded overflow-hidden w-full h-full'>
                {/* Store front */}
                {currentDisplay === shopDisplayOptions.STOREFRONT && (
                  <StoreFrontContainer openSubMenu={openSubMenu} />
                )}

                {/* But single packs */}
                {currentDisplay === shopDisplayOptions.FOILPACK && (
                  <PurchasingContainer
                    displayItems={displayItems}
                    onclickFunction={buyPacketsOfCards}
                    goBack={goBack}
                  />
                )}
                {/* Buy boxes */}
                {currentDisplay === shopDisplayOptions.BOXSETS && (
                  <PurchasingContainer
                    displayItems={displayItems}
                    onclickFunction={buyPacketsOfCards}
                    goBack={goBack}
                  />
                )}
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
