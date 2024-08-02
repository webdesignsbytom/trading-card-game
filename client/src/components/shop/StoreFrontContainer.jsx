import React from 'react';
// Data
import { ShopSalesItem } from '../../utils/cards/ShopItems';

function StoreFrontContainer({ openSubMenu }) {
  return (
    <section className='grid grid-cols-2 md:grid_cols_card gap-4'>
      {ShopSalesItem.map((category, index) => (
        <article
          key={index}
          className='grid p-4 cursor-pointer'
          style={{ aspectRatio: '2 / 3' }}
          onClick={() => openSubMenu(category)}
        >
          <div className='grid grid-rows-rev w-full h-full'>
            <div className='grid h-full w-full overflow-hidden p-4'>
              <img
                src={category.imageUrl}
                alt={category.category}
                className='w-full h-full hover:brightness-150 duration-300'
                style={{ aspectRatio: '2 / 3' }}
              />
            </div>
            <div className='h-fit text-center'>
              <h6 className='text-yellow-500 font-semibold text-lg'>
                {category.category}
              </h6>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default StoreFrontContainer;
