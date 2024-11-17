import React from 'react';
// Analytics
import { usePageTracking } from '../../hooks/useAnalytics';
// Constants
import { CompanyName } from '../../utils/Constants';
// Components
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';
import ShopPageMainContainer from '../../components/shop/ShopPageMainContainer';
// Data
import { shopPageAdditionalMeta, shopPageStructuredData } from '../../utils/data/PageData';

const ShopPage = React.memo(() => {
  usePageTracking(); // Tracks page views

  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName="Shop"
        desc={`Discover and purchase cards, accessories, and more in the ${CompanyName} online shop.`}
        keywords="shop, cards, MonCards, gaming accessories, buy cards"
        additionalMeta={shopPageAdditionalMeta}
        structuredData={shopPageStructuredData}
      />
      {/* Page */}
      <div className='grid min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden font-poppins'>
        <div className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg bg-white main__bg'>
          {/* Navigation */}
          <Navbar />

          {/* Main page content */}
          <div className='grid h-full w-full'>
            <ShopPageMainContainer />
          </div>
        </div>
      </div>
    </>
  );
});

export default ShopPage;
