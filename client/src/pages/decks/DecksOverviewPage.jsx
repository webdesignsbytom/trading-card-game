import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import DeckCoverComponent from '../../components/deck/DeckCoverComponent';
import { HelmetItem } from '../../components/utils/HelmetItem';
// Constants
import { CompanyName } from '../../utils/Constants';
// Data
import { decksPageAdditionalMeta, decksPageStructuredData } from '../../utils/data/PageData';

function DecksOverviewPage() {
  const decks = Array.from({ length: 5 }, (_, i) => `Deck ${i + 1}`);

  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName="Decks"
        desc={`Manage your custom decks in ${CompanyName}. Save up to 5 decks of cards to enhance your gameplay.`}
        keywords={`decks, card game, deck management, ${CompanyName}, save decks`}
        additionalMeta={decksPageAdditionalMeta}
        structuredData={decksPageStructuredData}
      />

      {/* Page */}
      <div className='bg-black main__bg h-screen grid overflow-hidden'>
        <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
          <Navbar />

          <main className='grid p-3 overflow-hidden'>
            <div className='outline outline-red-700 outline-4 rounded-xl p-2 h-full grid grid-rows-reg bg-white main__bg overflow-hidden'>
              <header className='grid p-2 text-left'>
                <h2 className='text-2xl font-semibold'>DECKS</h2>
                <h3>You can save up to 5 decks of cards</h3>
              </header>

              <section className='grid px-4'>
                <div className='grid lg:grid-cols-5 gap-4 text-center'>
                  {decks.map((deck, index) => (
                    <div key={index}>
                      <DeckCoverComponent />
                      <div className='mt-4 text-xl font-semibold'>{deck}</div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </main>
        </section>
      </div>
    </>
  );
}

export default DecksOverviewPage;
