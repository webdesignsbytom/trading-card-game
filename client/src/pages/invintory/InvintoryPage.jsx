import React, { useContext, useEffect } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import InvintoryOptions from '../../components/invintory/InvintoryOptions';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function InvintoryPage() {
  const { setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/invintory');
  }, []);

  return (
    <div className='h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid bg-blue-700 main__bg p-4 grid-rows-reg'>
          <article className='mt-2'>
            <div className='bg-red-500 nav__bg outline outline-4 outline-black rounded p-2'>
              <h1 className='text-3xl font-bold text-center '>Invintory</h1>
            </div>
          </article>

          <InvintoryOptions />
        </main>
      </section>
    </div>
  );
}

export default InvintoryPage;
