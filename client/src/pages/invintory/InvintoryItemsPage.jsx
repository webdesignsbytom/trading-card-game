import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import InvintoryItemsPageMainContainer from '../../components/invintory/InvintoryItemsPageMainContainer';
import { HelmetItem } from '../../components/utils/HelmetItem';
// Constants
import { CompanyName } from '../../utils/Constants';
// Data
import {
  inventoryItemsPageAdditionalMeta,
  inventoryItemsPageStructuredData,
} from '../../utils/data/PageData';

function InvintoryItemsPage() {
  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName='Inventory Items'
        desc={`Manage your inventory items in ${CompanyName}. Keep track of your collected items and tools.`}
        keywords={`inventory, items, collection, ${CompanyName}, tools, management`}
        additionalMeta={inventoryItemsPageAdditionalMeta}
        structuredData={inventoryItemsPageStructuredData}
      />

      <div className='bg-black main__bg h-screen grid'>
        <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
          <Navbar />

          {/* Main content */}
          <InvintoryItemsPageMainContainer />
        </section>
      </div>
    </>
  );
}

export default InvintoryItemsPage;
