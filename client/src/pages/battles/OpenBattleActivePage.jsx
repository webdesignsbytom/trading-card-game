import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import BattlesLoadingComponent from '../../components/battles/BattlesLoadingComponent';
import BattleFightComponent from '../../components/battles/BattleFightComponent';
import { HelmetItem } from '../../components/utils/HelmetItem';
// Constants
import { CompanyName } from '../../utils/Constants';
// Data
import { openBattlePageAdditionalMeta, openBattlePageStructuredData } from '../../utils/data/PageData';

function OpenBattleActivePage() {
  const [loadingBattleData, setLoadingBattleData] = useState(false);

  const location = useLocation();
  const battleData = location.state;

  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName="Active Battle"
        desc={`Engage in an ongoing battle within ${CompanyName}. Experience real-time gameplay and strategic combat.`}
        keywords={`active battle, live gameplay, ${CompanyName}, strategy`}
        additionalMeta={openBattlePageAdditionalMeta}
        structuredData={openBattlePageStructuredData}
      />

      {/* Page */}
      <div className='h-screen grid'>
        <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
          <Navbar />
          <main className='bg-black main__bg p-4 grid overflow-hidden h-full'>
            {loadingBattleData && <BattlesLoadingComponent />}
            {!loadingBattleData && <BattleFightComponent />}
          </main>
        </section>
      </div>
    </>
  );
}

export default OpenBattleActivePage;
