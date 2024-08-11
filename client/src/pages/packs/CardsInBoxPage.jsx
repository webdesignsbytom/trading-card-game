import React, { useContext, useEffect } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import OpenedBoxDisplayComponent from '../../components/packets/OpenedBoxDisplayComponent';
// Constants
import { INVENTORY_PAGE_URL } from '../../utils/Constants';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function CardsInBoxPage() {
  const { setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav(INVENTORY_PAGE_URL);
  }, []);

  return (
    <div className='grid h-screen overflow-hidden'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />

        <main className='grid bg-secondary-colour main__bg shadow-internal-main h-full w-full p-2 overflow-hidden'>
          <section className='grid h-full w-full overflow-hidden'>
            {/* Card display */}
            <OpenedBoxDisplayComponent />
          </section>
        </main>
      </section>
    </div>
  );
}

export default CardsInBoxPage;
