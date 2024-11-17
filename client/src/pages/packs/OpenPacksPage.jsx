import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';
// Context
import { useUser } from '../../context/UserContext';
// Constants
import { CompanyName } from '../../utils/Constants';
// Data
import { openPacksPageAdditionalMeta, openPacksPageStructuredData } from '../../utils/data/PageData';

function OpenPacksPage() {
  const { user } = useUser();

  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName="Unopened Packs"
        desc={`Manage your unopened packs in ${CompanyName}. Expand your collection with new card packs.`}
        keywords={`unopened packs, card packs, ${CompanyName}, buy card packs`}
        additionalMeta={openPacksPageAdditionalMeta}
        structuredData={openPacksPageStructuredData}
      />

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
