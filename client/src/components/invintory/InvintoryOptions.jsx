import React from 'react';
import { useNavigate } from 'react-router-dom';
// Images
import BetaPack from '../../assets/images/packets/mon_cards_alpha_box_set_first_edition.png';
import ItemsImg from '../../assets/images/invintory/items.png';
// Constants
import {
  CARDS_IN_PACK_PAGE_URL,
  INVENTORY_ITEMS_PAGE_URL,
} from '../../utils/Constants';

function InvintoryOptions() {
  let navigate = useNavigate();

  const toggleOpenPackets = () => {
    navigate(CARDS_IN_PACK_PAGE_URL);
  };

  const toggleOpenItems = () => {
    navigate(INVENTORY_ITEMS_PAGE_URL);
  };

  const arrayOfInvintoryItems = [
    {
      name: 'cardPacks',
      title: 'Card Packs',
      function: toggleOpenPackets,
      imageUrl: BetaPack,
    },
    {
      name: 'items',
      title: 'Items',
      function: toggleOpenItems,
      imageUrl: ItemsImg,
    },
  ];

  return (
    <section className='grid bg-white main__bg rounded-lg border-solid border-main-border border-4 shadow-2xl overflow-hidden'>
      <div className='grid grid-cols-2 lg:grid-cols-4 overflow-hidden'>
        {/* Items types available */}
        {arrayOfInvintoryItems.map((item, index) => {
          return (
            <article
              key={index}
              className='grid p-4 cursor-pointer'
              style={{ aspectRatio: '2 / 3' }}
              onClick={() => item.function()}
            >
              <div className='grid grid-rows-rev w-full h-full'>
                <div className='grid h-full w-full overflow-hidden p-4'>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className='w-full h-full hover:brightness-150 duration-300'
                    style={{ aspectRatio: '2 / 3' }}
                  />
                </div>
                <div className='h-fit text-center'>
                  <h6 className='text-yellow-500 font-semibold text-lg'>
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
