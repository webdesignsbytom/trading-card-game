import React, { useState } from 'react';
// Api
import client from '../../api/client';
// Components
import ShopHeader from '../../components/shop/ShopHeader';
import StoreFrontContainer from '../../components/shop/StoreFrontContainer';
import PurchasingContainer from '../../components/shop/PurchasingContainer';
// Constants
import {
  BUY_BOX_API,
  BUY_PACK_API,
} from '../../utils/Constants';
import {
  shopDisplayOptions,
  StandardBoxCost,
  StandardPackCost,
} from '../../utils/cards/CardGameConstants';
// Images
import ShopKeeper from '../../assets/images/backgrounds/shop_keeper_main_with_potions.png';
// Context
import { useUser } from '../../context/UserContext';

function ShopPageMainContainer() {
  const { user, setUser } = useUser();

  const [currentDisplay, setCurrentDisplay] = useState(
    shopDisplayOptions.STOREFRONT
  );

  const [displayItems, setDisplayItems] = useState({});

  const buyPacketsOfCards = (pack) => {
    let purchaseRequest = {
      packType: pack.packType,
      userId: user.id,
      cost: StandardPackCost,
    };

    client
      .post(BUY_PACK_API, purchaseRequest)
      .then((res) => {
        setUser(res.data.updatedUser);
      })

      .catch((err) => {
        console.error('Error: Unable to buy pack', err);
      });
  };

  const buyBoxOfCards = (box) => {
    let purchaseRequest = {
      boxType: box.boxType,
      userId: user.id,
      cost: StandardBoxCost,
    };

    client
      .post(BUY_BOX_API, purchaseRequest)
      .then((res) => {
        setUser(res.data.data.updatedUser);
      })

      .catch((err) => {
        console.error('Error: Unable to buy box', err);
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
                onclickFunction={buyBoxOfCards}
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
  );
}

export default ShopPageMainContainer;
