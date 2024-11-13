import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';
// Constants
import { CompanyName } from '../../utils/Constants';
// Data
import RewardsPageMainContainer from '../../components/rewards/RewardsPageMainContainer';

function RewardsPage() {
  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName={'Rewards'}
        desc={`Rewards page of ${CompanyName}.`}
      />

      <div className='h-screen grid overflow-hidden'>
        <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
          <Navbar />

          {/* main */}
          <RewardsPageMainContainer />
        </section>
      </div>
    </>
  );
}

export default RewardsPage;
