import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';

function CardsAvailablePage() {
  return (
    <div className='bg-red-100 h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <section className='bg-red-600 p-4'></section>
      </section>
    </div>
  );
}

export default CardsAvailablePage;
