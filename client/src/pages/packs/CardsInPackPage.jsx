import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import OpenedPacketDisplayComponent from '../../components/packets/OpenedPacketDisplayComponent';
import { HelmetItem } from '../../components/utils/HelmetItem';
// Constants
import { CompanyName } from '../../utils/Constants';

function CardsInPackPage() {
  return (
    <>
      {/* Tab Data */}
      <HelmetItem PageName={'Packs'} desc={`Packs page of ${CompanyName}.`} />

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
