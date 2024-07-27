import React, { useContext, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import { tempLeaderboardData } from '../../utils/TemporaryData';
import { useEffect } from 'react';
import client from '../../api/client';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { ToggleContext } from '../../context/ToggleContext';
import BattlesOverviewComponent from '../../components/battles/BattlesOverviewComponent';
import StartNewBattleComponent from '../../components/battles/StartNewBattleComponent';

function BattlesOverviewPage() {
  const { user } = useContext(UserContext);
  const { setActiveNav } = useContext(ToggleContext);

  const [leaderBoard, setLeaderboard] = useState(tempLeaderboardData);
  const [openBattleRequests, setOpenBattleRequests] = useState([]);
  const [startingNewBattle, setStartingNewBattle] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    setActiveNav('/battles');
  }, []);

  console.log('openBattleRequests', openBattleRequests);

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
    <div className='h-screen grid'>
      <section className='grid h-full lg:overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='bg-black main__bg p-4 grid grid-rows-reg overflow-hidden'>
          <section>
            <article className='text-cente'>
              <h1 className='text-center text-4xl lg:text-6xl font-extrabold text__stroke font-gasoek tracking-wide'>
                <span className='text-blue-700'>BATTLE</span>{' '}
                <span className='text-red-700'>ZONE</span>
              </h1>
              <h2 className='text-gray-50 text-center font-semibold'>
                FIGHT AND WIN!
              </h2>
            </article>
          </section>

          <div className='grid h-full bg-white main__bg mt-2 overflow-hidden p-4'>
            {!startingNewBattle && (
              <BattlesOverviewComponent
                openBattleRequests={openBattleRequests}
                goToOpenBattle={goToOpenBattle}
                deleteBattle={deleteBattle}
                leaderBoard={leaderBoard}
                setStartingNewBattle={setStartingNewBattle}
                startingNewBattle={startingNewBattle}
              />
            )}
            {startingNewBattle && (
              <StartNewBattleComponent
                openBattleRequests={openBattleRequests}
                goToOpenBattle={goToOpenBattle}
                deleteBattle={deleteBattle}
                leaderBoard={leaderBoard}
              />
            )}
          </div>
        </main>
      </section>
    </div>
  );
}

export default BattlesOverviewPage;
