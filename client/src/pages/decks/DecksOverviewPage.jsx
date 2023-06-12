import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import DeckCoverComponent from '../../components/deck/DeckCoverComponent';

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

            {/* cards */}
            <section className='grid items-center'>
              <div className='grid px-4'>
                <section className='grid lg:grid-cols-5 w-full gap-4 text-center'>
                  <section>
                    <div>
                      <DeckCoverComponent />
                      <div className='mt-4 text-xl font-semibold'>
                        <span>Deck 1</span>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div>
                      <DeckCoverComponent />
                      <div className='mt-4 text-xl font-semibold'>
                        <span>Deck 2</span>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div>
                      <DeckCoverComponent />
                      <div className='mt-4 text-xl font-semibold'>
                        <span>Deck 3</span>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div>
                      <DeckCoverComponent />
                      <div className='mt-4 text-xl font-semibold'>
                        <span>Deck 4</span>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div>
                      <DeckCoverComponent />
                      <div className='mt-4 text-xl font-semibold'>
                        <span>Deck 5</span>
                      </div>
                    </div>
                  </section>
                </section>
              </div>
            </section>
          </div>
        </main>
      </section>
    </div>
  );
}

export default DecksOverviewPage;
