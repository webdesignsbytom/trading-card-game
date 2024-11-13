import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import BattlesOverviewComponent from '../../components/battles/BattlesOverviewComponent';
import { HelmetItem } from '../../components/utils/HelmetItem';
import StartNewBattleComponent from '../../components/battles/StartNewBattleComponent';
import BattlePageHeader from '../../components/battles/BattlePageHeader';
// Api
import client from '../../api/client';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Constants
import { BATTLES_PAGE_URL, CompanyName } from '../../utils/Constants';
import { useUser } from '../../context/UserContext';

function BattlesMainPage() {
  const { user } = useUser()
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
        setOpenBattleRequests(res.data.battles);
      })
      .catch((err) => {
        console.error('Unable to retrieve all battles for user', err);
      });
  }, []);

  const goToOpenBattle = (battle) => {
    navigate('/battle/open-battle', { state: battle });
  };

  const deleteBattleHandler = (battle) => {
    client
      .delete(`/battles/delete-battle-by-id/${battle.id}`)
      .then((res) => {
        console.log('Deleted battle', res.data.deletedBattle);
      })
      .catch((err) => {
        console.error('Unable to delete battle', err);
      });
  };

  return (
    <>
      {/* Tab Data */}
      <HelmetItem PageName={'Battle'} desc={`Battle page of ${CompanyName}.`} />

      <div className='h-screen grid md:overflow-hidden w-full'>
        <section className='grid h-full lg:overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
          <Navbar />
          <main className='bg-black main__bg p-4 grid grid-rows-reg gap-2 md:overflow-hidden'>
            {/* Header */}
            <BattlePageHeader />

            <div className='grid h-full bg-white main__bg md:overflow-hidden rounded'>
              <BattlesOverviewComponent
                openBattleRequests={openBattleRequests}
                goToOpenBattle={goToOpenBattle}
                deleteBattleHandler={deleteBattleHandler}
                setStartingNewBattle={setStartingNewBattle}
                startingNewBattle={startingNewBattle}
              />
            </div>
          </main>
        </section>
      </div>
    </>
  );
}

export default BattlesMainPage;
