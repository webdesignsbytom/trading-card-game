import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';

function DecksOverviewPage() {
  return (
    <div className='bg-black main__bg h-screen grid overflow-hidden'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid p-3 overflow-hidden'>
          <div className='outline outline-red-700 outline-4 rounded-xl p-2 h-full grid grid-rows-reg bg-white main__bg overflow-hidden'>
            <section className='grid grid-cols-reg h-fit'>
              <div className='grid justify-start p-2 items-center text-left'>
                <h2 className='text-2xl font-semibold'>DECKS</h2>
                <h3>You can save up to 5 decks of cards</h3>
              </div>
            </section>
          </div>
        </main>
      </section>
    </div>
  );
}

export default DecksOverviewPage;
