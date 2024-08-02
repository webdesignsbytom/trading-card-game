import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import BattlesOverviewComponent from '../../components/battles/BattlesOverviewComponent';
import StartNewBattleComponent from '../../components/battles/StartNewBattleComponent';
// Api
import client from '../../api/client';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Constants
import { BATTLES_PAGE_URL } from '../../utils/Constants';
import BattlePageHeader from '../../components/battles/BattlePageHeader';

function BattlesMainPage() {
  const { user } = useContext(UserContext);
  const { setActiveNav } = useContext(ToggleContext);

  const [openBattleRequests, setOpenBattleRequests] = useState([]);
  const [startingNewBattle, setStartingNewBattle] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    setActiveNav(BATTLES_PAGE_URL);
  }, []);


  useEffect(() => {
    client
      .get(`/battles/battle/user-battles/${user.id}`)
      .then((res) => {
        setOpenBattleRequests(res.data.data.battles);
      })
      .catch((err) => {
        console.error('Unable to retrieve all battles for user', err);
      });
  }, []);

  const goToOpenBattle = (battle) => {
    navigate('/battle/open-battle', { state: battle });
  };

  const deleteBattle = (battle) => {
    client
      .delete(`/battles/delete-battle-by-id/${battle.id}`)
      .then((res) => {
        console.log('Deleted battle', res.data.data.deletedBattle);
      })
      .catch((err) => {
        console.error('Unable to delete battle', err);
      });
  };

  return (
    <div className='h-screen grid md:overflow-hidden w-full'>
      <section className='grid h-full lg:overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='bg-black main__bg p-4 grid grid-rows-reg gap-2 md:overflow-hidden'>
          {/* Header */}
          <BattlePageHeader />

          <div className='grid h-full bg-white main__bg md:overflow-hidden rounded'>
            {!startingNewBattle && (
              <BattlesOverviewComponent
                openBattleRequests={openBattleRequests}
                goToOpenBattle={goToOpenBattle}
                deleteBattle={deleteBattle}
                setStartingNewBattle={setStartingNewBattle}
                startingNewBattle={startingNewBattle}
              />
            )}
            {startingNewBattle && (
              <StartNewBattleComponent
                openBattleRequests={openBattleRequests}
                goToOpenBattle={goToOpenBattle}
                deleteBattle={deleteBattle}
              />
            )}
          </div>
        </main>
      </section>
    </div>
  );
}

export default BattlesMainPage;
