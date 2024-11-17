import React from 'react';
// Components
import UnopenedPacketsContainer from '../../components/packets/UnopenedPacketsContainer';
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';
// Constants
import { CompanyName } from '../../utils/Constants';
// Data
import {
  unopenedPacketsPageAdditionalMeta,
  unopenedPacketsPageStructuredData,
} from '../../utils/data/PageData';

function UnopenedPacketsPage() {
  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName='Unopened Packets'
        desc={`Manage your unopened packets in ${CompanyName}. Discover exciting new cards in each pack.`}
        keywords={`unopened packets, card packets, ${CompanyName}, trading cards`}
        additionalMeta={unopenedPacketsPageAdditionalMeta}
        structuredData={unopenedPacketsPageStructuredData}
      />

      {/* Page */}
      <div className='bg-black main__bg h-screen grid'>
        <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
          <Navbar />
          <main className='grid bg-main-colour p-2'>
            <section className='grid h-full bg-white main__bg border-solid border-main-border border-4 rounded-xl'>
              <UnopenedPacketsContainer />
            </section>
          </main>
        </section>
      </div>
    </>
  );
}

export default UnopenedPacketsPage;
