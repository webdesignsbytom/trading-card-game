import React from 'react';
import Navbar from '../../components/nav/Navbar';
import OpenedPacketDisplay from '../../components/packets/OpenedPacketDisplay';

function CardsInPackPage() {
  return (
    <div className='grid h-screen overflow-hidden'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid bg-blue-700 main__bg p-2 overflow-hidden'>
          <section className='grid h-full bg-white main__bg rounded-xl outline outline-4 outine-black overflow-hidden'>
            <OpenedPacketDisplay />
          </section>
        </main>
      </section>
    </div>
  );
}

export default CardsInPackPage;
