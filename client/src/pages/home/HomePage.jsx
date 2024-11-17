import React from 'react';
// Analytics
import { usePageTracking } from '../../hooks/useAnalytics';
// Constants
import { CompanyName } from '../../utils/Constants';
// Components
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';
import HomePageMainContainer from '../../components/home/HomePageMainContainer';
// Data
import {
  monCardsHomePageAdditionalMeta,
  monCardsHomePageStructuredData,
} from '../../utils/data/PageData';

const HomePage = React.memo(() => {
  usePageTracking(); // Tracks page views

  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName='Home'
        desc={`Welcome to ${CompanyName}, the ultimate trading card game. Collect, battle, and explore a world of unique monsters.`}
        keywords='trading card game, MonCards, collectible cards, monster battles, strategy game'
        additionalMeta={monCardsHomePageAdditionalMeta}
        structuredData={monCardsHomePageStructuredData}
      />
      
      {/* Page */}
      <div className='grid min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden font-poppins coloured__bg'>
        <div className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg bg-cards-display bg-center lg:bg-none bg-cover'>
          {/* Navigation */}
          <Navbar />

          {/* Main page content */}
          <div className='grid h-full w-full lg:bg-cards-display lg:bg-center'>
            <HomePageMainContainer />
          </div>
        </div>
      </div>
    </>
  );
});

export default HomePage;
