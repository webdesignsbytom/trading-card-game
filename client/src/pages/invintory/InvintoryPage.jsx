import React, { useContext, useEffect } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import InvintoryOptions from '../../components/invintory/InvintoryOptions';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Constants
import { INVENTORY_PAGE_URL } from '../../utils/Constants';
import InvintoryHeader from '../../components/invintory/InvintoryHeader';

function InvintoryPage() {
  const { setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav(INVENTORY_PAGE_URL);
  }, []);

  return (
    <div className='h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid bg-main-colour shadow-internal-main main__bg grid-rows-reg gap-2 p-4 lg:overflow-hidden'>
          {/* Header */}
          <InvintoryHeader />

          {/* Main content */}
          <InvintoryOptions />
        </main>
      </section>
    </div>
  );
}

export default InvintoryPage;
