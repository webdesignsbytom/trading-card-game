import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import ItemComponent from '../../components/invintory/ItemComponent';

function InvintoryItemsPage() {
  return (
    <div className='bg-black main__bg h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid p-4'>
          <section className='grid grid-rows-reg h-full bg-white main__bg outline outline-4 outline-blue-700 rounded-xl'>
            <div>
              <h1>ITEMS</h1>
            </div>
            <section>
              <ItemComponent />
            </section>
          </section>
        </main>
      </section>
    </div>
  );
}

export default InvintoryItemsPage;
