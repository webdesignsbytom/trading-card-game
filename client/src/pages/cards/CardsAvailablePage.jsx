import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';
import CardsPageMainContainer from '../../components/cards/CardsPageMainContainer';
// Constants
import { CompanyName } from '../../utils/Constants';
// Data
import {
  cardsAvailablePageAdditionalMeta,
  cardsAvailablePageStructuredData,
} from '../../utils/data/PageData';

function CardsAvailablePage() {
  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName='Available Cards'
        desc={`Explore the collection of available cards in ${CompanyName}. Build your deck with the best cards.`}
        keywords={`available cards, card collection, trading cards, ${CompanyName}`}
        additionalMeta={cardsAvailablePageAdditionalMeta}
        structuredData={cardsAvailablePageStructuredData}
      />

      {/* Page */}
      <div className='bg-black main__bg h-screen grid'>
        <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
          <Navbar />

          {/* Main */}
          <CardsPageMainContainer />
        </section>
      </div>
    </>
  );
}

export default CardsAvailablePage;
