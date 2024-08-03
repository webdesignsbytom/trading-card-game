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
import PurchasingContainer from '../../components/shop/PurchasingContainer';
// Constants
import { BUY_PACK_API, SHOP_PAGE_URL } from '../../utils/Constants';
import {
  shopDisplayOptions,
  StandardPackCost,
} from '../../utils/cards/CardGameConstants';
// Images
import ShopKeeper from '../../assets/images/backgrounds/shop_keeper_main_with_potions.png';

function ShopPage() {
  const { user, setUser } = useContext(UserContext);
  const { setActiveNav } = useContext(ToggleContext);

  const [currentDisplay, setCurrentDisplay] = useState(
    shopDisplayOptions.STOREFRONT
  );

  const [displayItems, setDisplayItems] = useState({});

  useEffect(() => {
    setActiveNav(SHOP_PAGE_URL);
  }, []);

  const buyPacketsOfCards = (pack) => {

    console.log('pack.packtype', pack);
    
    let purchaseRequest = {
      packType: pack.packType,
      userId: user.id,
      cost: StandardPackCost,
    };

    client
      .post(BUY_PACK_API, purchaseRequest)
      .then((res) => {
        setUser(res.data.data.updatedUser);
      })

      .catch((err) => {
        console.error('Unable to buy packs', err);
      });
  };

  const openSubMenu = (category) => {
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
              <section className='grid bg-blue-400 main__bg rounded overflow-hidden w-full h-full border-4 border-solid border-main-border'>
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
                className='grid rounded overflow-hidden w-full h-full'
                style={{
                  backgroundImage: `url(${ShopKeeper})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              ></section>
            </div>
          </section>
        </main>
      </section>
    </div>
  );
}

export default ShopPage;
