import React from 'react';

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
        <button onClick={goBack} className='main__bg text-4xl hover:bg-red-300 shadow-[inset_-1px_18px_35px_22px_#00000024] hover:shadow-[inset_-1px_18px_35px_22px_#00000024] active:scale-95 rounded-xl text__stroke px-4 border-2 border-main-border border-solid'>
          <span className='text-blue-600 font-fantasy'>
            GO <span className='text-red-600'>BACK</span>
          </span>
        </button>
      </section>
    </section>
  );
}

export default PurchasingContainer;
