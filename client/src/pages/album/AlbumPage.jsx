import React from 'react';
// Analytics
import { usePageTracking } from '../../hooks/useAnalytics';
// Constants
import { CompanyName } from '../../utils/Constants';
// Components
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';
import AlbumPageMainContainer from '../../components/album/AlbumPageMainContainer';
import { albumPageAdditionalMeta, albumPageStructuredData } from '../../utils/data/PageData';

const AlbumPage = React.memo(() => {
  usePageTracking(); // Tracks page views

  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName="Album"
        desc={`Discover and manage your card collection in the ${CompanyName} Album. Showcase your progress and favorite cards.`}
        keywords="trading card game, MonCards, card album, collectible cards, manage cards"
        additionalMeta={albumPageAdditionalMeta}
        structuredData={albumPageStructuredData}
      />
      
      {/* Page */}
      <div className='grid min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden  font-poppins'>
        <div className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg main__bg'>
          {/* Navigation */}
          <Navbar />

          {/* Main page content */}
          <AlbumPageMainContainer />
        </div>
      </div>
    </>
  );
});

export default AlbumPage;
