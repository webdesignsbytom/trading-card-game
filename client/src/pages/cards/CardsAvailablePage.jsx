import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';
import CardsPageMainContainer from '../../components/cards/CardsPageMainContainer';
// Constants
import { CompanyName } from '../../utils/Constants';

function CardsAvailablePage() {
  return (
    <>
      {/* Tab Data */}
      <HelmetItem PageName={'Cards'} desc={`Cards page of ${CompanyName}.`} />

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
