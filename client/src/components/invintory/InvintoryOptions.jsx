import React from 'react';
import { useNavigate } from 'react-router-dom';
// Images
import BetaPack from '../../assets/images/packets/mon_cards_alpha_box_set_first_edition.png';
import ItemsImg from '../../assets/images/invintory/items.png';
// Constants
import { CARDS_IN_PACK_PAGE_URL, INVENTORY_ITEMS_PAGE_URL } from '../../utils/Constants';

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
      image: BetaPack,
    },
    {
      name: 'items',
      title: 'Items',
      function: toggleOpenItems,
      image: ItemsImg,
    },
  ];

  return (
    <section className='grid bg-white main__bg rounded-lg outline outline-2 outline-black shadow-2xl'>
      <div className='grid grid-cols-2 lg:grid-cols-4 mt-4'>
        {arrayOfInvintoryItems.map((item, index) => {
          return (
            <article key={index} className='p-4 text-center h-fit grid justify-center'>
              <span className='text-3xl mb-2 font-semibold'>{item.title}</span>
              <div className='cursor-pointer mt-4' onClick={item.function}>
                <img src={item.image} alt={item.title} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default InvintoryOptions;
