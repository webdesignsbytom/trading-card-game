import React from 'react';
// Components
import ItemComponent from './ItemComponent';

function InvintoryItemsPageMainContainer() {
  return (
    <main role='main' className='grid p-4'>
      <section className='grid grid-rows-reg h-full bg-white main__bg outline outline-4 outline-blue-700 rounded-xl'>
        <div>
          <h1>ITEMS</h1>
        </div>
        <section>
          <ItemComponent />
        </section>
      </section>
    </main>
  );
}

export default InvintoryItemsPageMainContainer;
