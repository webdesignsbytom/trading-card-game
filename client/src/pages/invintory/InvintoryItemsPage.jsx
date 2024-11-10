import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import InvintoryItemsPageMainContainer from '../../components/invintory/InvintoryItemsPageMainContainer';

function InvintoryItemsPage() {
  return (
    <div className='bg-black main__bg h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />

        {/* Main content */}
        <InvintoryItemsPageMainContainer />
      </section>
    </div>
  );
}

export default InvintoryItemsPage;
