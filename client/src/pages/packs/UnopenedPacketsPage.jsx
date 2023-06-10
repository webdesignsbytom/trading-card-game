import React from 'react';
import UnopenedPackets from '../../components/packets/UnopenedPackets';
import Navbar from '../../components/nav/Navbar';

function UnopenedPacketsPage() {
  return (
    <div className='bg-black main__bg h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid p-2 grid-rows-reg'>
          <section className='grid h-full'>
            <UnopenedPackets />
          </section>
        </main>
      </section>
    </div>
  );
}

export default UnopenedPacketsPage;
