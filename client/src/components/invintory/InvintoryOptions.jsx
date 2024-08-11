import React from 'react';
import { useNavigate } from 'react-router-dom';
// Images
import AlphaPack from '../../assets/images/packets/mon_cards_alpha_pack_first_edition.png';
import BetaBox from '../../assets/images/packets/mon_cards_alpha_box_set_first_edition.png';
import ItemsImg from '../../assets/images/invintory/items.png';
// Constants
import {
  INVENTORY_ITEMS_PAGE_URL,
  UNOPENED_BOXS_URL,
  UNOPENED_PACKS_URL,
} from '../../utils/Constants';

function InvintoryOptions() {
  let navigate = useNavigate();

  const toggleOpenPackets = () => {
    navigate(UNOPENED_PACKS_URL);
  };

  const toggleOpenItems = () => {
    navigate(INVENTORY_ITEMS_PAGE_URL);
  };

  const toggleOpenBoxes = () => {
    navigate(UNOPENED_BOXS_URL);
  };

  const arrayOfInvintoryItems = [
    {
      name: 'cardPacks',
      title: 'Card Packs',
      function: toggleOpenPackets,
      imageUrl: AlphaPack,
    },
    {
      name: 'cardBoxes',
      title: 'Card Boxes',
      function: toggleOpenBoxes,
      imageUrl: BetaBox,
    },
    {
      name: 'items',
      title: 'Items',
      function: toggleOpenItems,
      imageUrl: ItemsImg,
    },
  ];

  return (
    <section className='grid bg-red-500 shadow-internal-main main__bg rounded-lg border-solid border-main-border border-4 overflow-hidden'>
      <div className='grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 h-full w-full gap-2 overflow-hidden'>
        {/* Items types available */}
        {arrayOfInvintoryItems.map((item, index) => {
          return (
            <article
              key={index}
              className='grid p-4 cursor-pointer overflow-hidden w-full h-fit lg:h-full'
              style={{ aspectRatio: '2 / 3' }}
              onClick={() => item.function()}
            >
              <div className='grid grid-rows-[1fr_40px] w-full h-full overflow-hidden'>
                <div className='grid h-full w-fit mx-auto items-center justify-center overflow-hidden'>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className='hover:brightness-150 duration-300 lg:w-1/2 mx-auto'
                  />
                </div>
                <div className='h-fit text-center'>
                  <h6 className='text-alt-text font-bold text-xl'>
                    {item.title}
                  </h6>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default InvintoryOptions;
