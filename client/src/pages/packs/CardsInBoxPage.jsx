import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import OpenedBoxDisplayComponent from '../../components/packets/OpenedBoxDisplayComponent';
// Constants
import { CompanyName } from '../../utils/Constants';
import { HelmetItem } from '../../components/utils/HelmetItem';
// Data
import {
  cardsInBoxPageAdditionalMeta,
  cardsInBoxPageStructuredData,
} from '../../utils/data/PageData';

function CardsInBoxPage() {
  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName='Opened Pack'
        desc={`Explore the contents of your recently opened pack in ${CompanyName}. Discover new cards for your collection.`}
        keywords={`opened pack, card packs, ${CompanyName}, card collection`}
        additionalMeta={cardsInBoxPageAdditionalMeta}
        structuredData={cardsInBoxPageStructuredData}
      />

      <div className='grid h-screen overflow-hidden'>
        <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
          <Navbar />

          <main className='grid bg-secondary-colour main__bg shadow-internal-main h-full w-full p-2 overflow-hidden'>
            <section className='grid h-full w-full overflow-hidden'>
              {/* Card display */}
              <OpenedBoxDisplayComponent />
            </section>
          </main>
        </section>
      </div>
    </>
  );
}

export default CardsInBoxPage;
