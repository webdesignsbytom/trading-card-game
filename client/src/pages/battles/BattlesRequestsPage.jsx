import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
// Api
import client from '../../api/client';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Constants
import { BATTLES_PAGE_URL } from '../../utils/Constants';
// Components
import BattlePageHeader from '../../components/battles/BattlePageHeader';

function BattlesRequestsPage() {
  const { user } = useContext(UserContext);
  const { setActiveNav } = useContext(ToggleContext);

  let navigate = useNavigate();

  useEffect(() => {
    setActiveNav(BATTLES_PAGE_URL);
  }, []);


  return (
    <div className='h-screen grid md:overflow-hidden w-full'>
      <section className='grid h-full lg:overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='bg-black main__bg p-4 grid grid-rows-reg gap-2 md:overflow-hidden'>
          {/* Header */}
          <BattlePageHeader />

          <div className='grid h-full bg-white main__bg md:overflow-hidden rounded'>
requests
          </div>
        </main>
      </section>
    </div>
  );
}

export default BattlesRequestsPage;
