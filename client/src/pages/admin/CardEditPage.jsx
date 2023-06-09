import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';

function CardEditPage() {
  return (
    <div className='bg-black main__bg h-screen grid overflow-hidden'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid p-3 overflow-hidden'>
          <div className='outline outline-red-700 outline-4 rounded-xl p-2 h-full grid grid-rows-reg bg-white main__bg overflow-hidden'>
            <section className='grid grid-cols-reg h-fit'>
              <div className='grid justify-start p-2 items-center text-left'>
                <h2 className='text-2xl font-semibold'>Card Edit</h2>
              </div>

              <div className='grid justify-end grid-flow-col gap-4 items-center'>
                <div>
                  <button className='outline outline-2 outline-black bg-blue-500 hover:bg-blue-700 active:scale-95 p-2 text-white rounded-xl'>
                    USERS
                  </button>
                </div>
                <div>
                  <button className='outline outline-2 outline-black bg-blue-500 hover:bg-blue-700 active:scale-95 p-2 text-white rounded-xl'>
                    CARDS
                  </button>
                </div>
                <div>
                  <button className='outline outline-2 outline-black bg-blue-500 hover:bg-blue-700 active:scale-95 p-2 text-white rounded-xl'>
                    Event
                  </button>
                </div>
              </div>
            </section>

            {/* EDITING */}
            <section>EDIT THis</section>
          </div>
        </main>
      </section>
    </div>
  );
}

export default CardEditPage;
