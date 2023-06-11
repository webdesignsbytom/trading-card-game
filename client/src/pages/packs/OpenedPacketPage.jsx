import React, { useContext, useEffect } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Navbar from '../../components/nav/Navbar';

function OpenedPacketPage() {
  const { returnedOpenPack, setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/invintory');
  }, []);

  return (
    <div className='h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='bg-black main__bg p-4 grid grid-rows-reg overflow-hidden'>
          OpenedPacketPage
        </main>
      </section>
    </div>
  );
}

export default OpenedPacketPage;
