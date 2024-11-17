import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import BattlesOverviewComponent from '../../components/battles/BattlesOverviewComponent';
import StartNewBattleComponent from '../../components/battles/StartNewBattleComponent';
import { HelmetItem } from '../../components/utils/HelmetItem';
import BattlePageHeader from '../../components/battles/BattlePageHeader';
// Context
import { useUser } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Constants
import { BATTLES_PAGE_URL, CompanyName } from '../../utils/Constants';
// Data
import {
  battleFindOpponentPageAdditionalMeta,
  battleFindOpponentPageStructuredData,
} from '../../utils/data/PageData';

function BattleFindOpponentPage() {
  const { user } = useUser();
  const { setActiveNav } = useContext(ToggleContext);

  const [openBattleRequests, setOpenBattleRequests] = useState([]);
  const [startingNewBattle, setStartingNewBattle] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    setActiveNav(BATTLES_PAGE_URL);
  }, []);

  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName='Find Opponent'
        desc={`Find and challenge opponents for exciting battles in ${CompanyName}.`}
        keywords={`battle matchmaking, find opponents, multiplayer, ${CompanyName}`}
        additionalMeta={battleFindOpponentPageAdditionalMeta}
        structuredData={battleFindOpponentPageStructuredData}
      />

      {/* Page */}
      <div className='h-screen grid md:overflow-hidden w-full'>
        <section className='grid h-full bg-black main__bg lg:overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
          <Navbar />

          {/* Main */}
          <main className='bg-black main__bg p-4 grid grid-rows-reg gap-2 md:overflow-hidden'>
            {/* Header */}
            <BattlePageHeader />

            <StartNewBattleComponent openBattleRequests={openBattleRequests} />
          </main>
        </section>
      </div>
    </>
  );
}

export default BattleFindOpponentPage;
