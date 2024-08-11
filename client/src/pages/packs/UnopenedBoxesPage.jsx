import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import UnopenedBoxesContainer from '../../components/packets/UnopenedBoxesContainer';

function UnopenedBoxesPage() {

  return (
    <div className='bg-black main__bg h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid bg-main-colour p-2'>
          <section className='grid h-full bg-white main__bg border-solid border-main-border border-4 rounded-xl'>
            <UnopenedBoxesContainer />
          </section>
        </main>
      </section>
    </div>
  );
}

export default UnopenedBoxesPage;
