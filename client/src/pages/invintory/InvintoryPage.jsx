import React from 'react';
// Analytics
import { usePageTracking } from '../../hooks/useAnalytics';
// Constants
import { CompanyName } from '../../utils/Constants';
// Components
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';
import InvintoryPageMainContainer from '../../components/invintory/InvintoryPageMainContainer';
// Data
import { inventoryPageAdditionalMeta, inventoryPageStructuredData } from '../../utils/data/PageData';

const ShopPage = React.memo(() => {
  usePageTracking(); // Tracks page views

  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName="Inventory"
        desc={`Manage your ${CompanyName} inventory. View your collected items and organize them efficiently.`}
        keywords={`inventory, item collection, asset management, ${CompanyName}`}
        additionalMeta={inventoryPageAdditionalMeta}
        structuredData={inventoryPageStructuredData}
      />

      {/* Page */}
      <div className='grid min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden font-poppins'>
        <div className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
          {/* Navigation */}
          <Navbar />

          {/* Main page content */}
          <InvintoryPageMainContainer />
        </div>
      </div>
    </>
  );
});

export default ShopPage;
