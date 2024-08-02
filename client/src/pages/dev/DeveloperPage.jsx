import React, { useContext, useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Constants
import { DEV_PAGE_URL } from '../../utils/Constants';

function DeveloperPage() {
  const { setActiveNav } = useContext(ToggleContext);

  const [selectedComponent, setSelectedComponent] = useState('cards');

  useEffect(() => {
    setActiveNav(DEV_PAGE_URL);
  }, []);

  return (
    <div className='bg-black main__bg h-screen grid overflow-hidden'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid p-3 overflow-hidden'>DEVPAGE</main>
      </section>
    </div>
  );
}

export default DeveloperPage;
