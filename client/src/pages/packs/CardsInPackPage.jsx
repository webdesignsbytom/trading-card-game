import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import OpenedPacketDisplayComponent from '../../components/packets/OpenedPacketDisplayComponent';
import { HelmetItem } from '../../components/utils/HelmetItem';
// Constants
import { CompanyName } from '../../utils/Constants';
// Data
import { cardsInPackPageAdditionalMeta, cardsInPackPageStructuredData } from '../../utils/data/PageData';

function CardsInPackPage() {
  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName="Opened Pack"
        desc={`View the contents of your recently opened packet from ${CompanyName}. Discover new cards for your collection.`}
        keywords={`opened packet, card packs, trading cards, ${CompanyName}, collection`}
        additionalMeta={cardsInPackPageAdditionalMeta}
        structuredData={cardsInPackPageStructuredData}
      />

      {/* Page */}
      <div className='grid h-screen overflow-hidden'>
        <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
          <Navbar />

          <main className='grid bg-secondary-colour main__bg shadow-internal-main h-full w-full p-2 overflow-hidden'>
            <section className='grid h-full w-full overflow-hidden'>
              {/* Card display */}
              <OpenedPacketDisplayComponent />
            </section>
          </main>
        </section>
      </div>
    </>
  );
}

export default CardsInPackPage;
