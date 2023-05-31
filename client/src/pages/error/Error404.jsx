import React from 'react';
// Images
import TreeBG from '../../assets/img/404cat.png';

function Error404() {
  return (
    <div className='h-screen overflow-hidden grid grid-rows-reg bg-gray-50 dark:bg-black dark:text-gray-100'>
      <div className='font-poppins'>
        <main className='relative h-full w-full'>
          <section className='grid absolute w-full text-center h-full items-center justify-center z-10'>
            <section className='grid gap-2'>
              <article className='outline outline-2 font-semibold outline-black -mt-10 p-2 rounded'>
                <h1 className='text-4xl'>
                  ERROR <span className='text-red-500'>404</span>
                </h1>
                <h2 className='text-4xl'>PAGE NOT FOUND</h2>
              </article>
              <article className='outline outline-2 font-semibold outline-black rounded'>
                <h3>But you found a friend 💖</h3>
              </article>
            </section>
          </section>
          <section className='flex lg:justify-end lg:mr-20'>
            <img src={TreeBG} alt='lost cat' />
          </section>
        </main>
      </div>
    </div>
  );
}

export default Error404;
