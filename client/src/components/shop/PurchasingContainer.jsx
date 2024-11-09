import React from 'react';
import FantasyButton from '../utils/FantasyButton';

function PurchasingContainer({ displayItems, onclickFunction, goBack }) {
  return (
    <section className='grid relative overflow-hidden h-full w-full p-2'>
      <div className='grid grid-cols-3 no__highlights'>
        {displayItems.map((item, index) => {
          return (
            <article
              key={index}
              onClick={() => onclickFunction(item)}
              className='grid cursor-pointer h-fit'
            >
              <div className='grid p-4'>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className='hover:brightness-150 duration-300'
                  style={{ aspectRatio: '2 / 3' }}
                />
              </div>
              <div className='grid h-fit py-2'>
                <div className='text-center'>
                  <h4 className='text-yellow-500 font-semibold text-lg'>
                    {item.title}
                  </h4>
                </div>
                <div className='text-center'>
                  <h4 className='text-yellow-500 font-fantasy tracking-wider font-semibold text-lg'>
                    £{item.price}
                  </h4>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Back button */}
      <section className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
        <FantasyButton
          text='Go Back'
          onClick={goBack}
          type='default'
          ariaLabel='Go back button'
        />
      </section>
    </section>
  );
}

export default PurchasingContainer;
