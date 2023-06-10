import React from 'react';
import UnopenedPackets from '../../components/packets/UnopenedPackets';
import Navbar from '../../components/nav/Navbar';

function UnopenedPacketsPage() {

  return (
    <div className='bg-black main__bg h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid p-4'>
          <section className='grid h-full bg-white main__bg outline outline-4 outline-blue-700 rounded-xl'>
            <UnopenedPackets />
          </section>
        </main>
      </section>
    </div>
  );
}

export default UnopenedPacketsPage;
