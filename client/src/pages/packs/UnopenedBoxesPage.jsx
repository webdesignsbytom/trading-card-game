import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import UnopenedBoxesContainer from '../../components/packets/UnopenedBoxesContainer';
import { HelmetItem } from '../../components/utils/HelmetItem';
// Constants
import { CompanyName } from '../../utils/Constants';
// Data
import { unopenedBoxesPageAdditionalMeta, unopenedBoxesPageStructuredData } from '../../utils/data/PageData';

function UnopenedBoxesPage() {
  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName="Unopened Boxes"
        desc={`Manage your unopened boxes in ${CompanyName}. Discover new card packs and expand your collection.`}
        keywords={`unopened boxes, card packs, ${CompanyName}, trading cards`}
        additionalMeta={unopenedBoxesPageAdditionalMeta}
        structuredData={unopenedBoxesPageStructuredData}
      />

      <div className='bg-black main__bg h-screen grid'>
        <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
          <Navbar />
          <main className='grid bg-main-colour p-2'>
            <section className='grid h-full bg-white main__bg border-solid border-main-border border-4 rounded-xl'>
              <UnopenedBoxesContainer />
            </section>
          </main>
        </section>
      </div>
    </>
  );
}

export default UnopenedBoxesPage;
