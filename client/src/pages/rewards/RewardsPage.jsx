import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';
import RewardsPageMainContainer from '../../components/rewards/RewardsPageMainContainer';
// Constants
import { CompanyName } from '../../utils/Constants';
// Data
import {
  rewardsPageAdditionalMeta,
  rewardsPageStructuredData,
} from '../../utils/data/PageData';

function RewardsPage() {
  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName='Rewards'
        desc={`Explore the ${CompanyName} Rewards Program. Earn points and unlock exclusive rewards.`}
        keywords={`rewards, benefits, loyalty program, points, ${CompanyName}`}
        additionalMeta={rewardsPageAdditionalMeta}
        structuredData={rewardsPageStructuredData}
      />

      <div className='h-screen grid overflow-hidden'>
        <section className='grid bg-secondary-colour main__bg h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
          <Navbar />

          {/* main */}
          <RewardsPageMainContainer />
        </section>
      </div>
    </>
  );
}

export default RewardsPage;
