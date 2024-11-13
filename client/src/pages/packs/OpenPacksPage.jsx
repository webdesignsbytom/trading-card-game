import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';
// Context
import { useUser } from '../../context/UserContext';
// Constants
import { CompanyName } from '../../utils/Constants';

function OpenPacksPage() {
  const { user } = useUser();

  return (
    <>
      {/* Tab Data */}
      <HelmetItem PageName={'Packs'} desc={`Packs page of ${CompanyName}.`} />

      {/* Page */}
      <div className='h-screen bg-red-100 grid'>
        <section className='bg-blue-500 grid h-full overflow-hidden grid-cols-reg'>
          <Navbar />
          <main className='grid items-center justify-center'>
            <h2>Unopened: {user.unopenedPacks.length}</h2>
            <Link to='/shop'>Buy New Packs</Link>
          </main>
        </section>
      </div>
    </>
  );
}

export default OpenPacksPage;
