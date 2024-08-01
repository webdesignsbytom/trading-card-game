import React from 'react';
// Data
import { ShopSalesItem } from '../../utils/cards/ShopItems';

function StoreFrontContainer({ openSubMenu }) {
  return (
    <section className='grid grid_cols_card gap-4'>
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
  );
}

export default StoreFrontContainer;
