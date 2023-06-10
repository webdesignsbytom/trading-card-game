import React, { useContext, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import { tempLeaderboardData } from '../../utils/TemporaryData';
import { useEffect } from 'react';
import client from '../../utils/client';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { ToggleContext } from '../../context/ToggleContext';

function BattlesOverviewPage() {
  const { user } = useContext(UserContext);
  const { setActiveNav } = useContext(ToggleContext)

  const [leaderBoard, setLeaderboard] = useState(tempLeaderboardData);
  const [openBattleRequests, setOpenBattleRequests] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    setActiveNav('/battles')
  }, [])

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

  }

  const deleteBattle = (battle) => {
    client
    .delete(`/battles/delete-battle-by-id/${battle.id}`)
    .then((res) => {
      console.log('Deleted battle', res.data.data.deletedBattle);
    })
    .catch((err) => {
      console.error('Unable to delete battle', err);
    });
  }

  return (
    <div className='h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='bg-black main__bg p-4 grid grid-rows-reg overflow-hidden'>
          <section>
            <article className='text-center text-white'>
              <h1 className='text-6xl font-bold '>BATTLES</h1>
              <h2>FIGHT AND WIN</h2>
            </article>
          </section>

          <div className='grid h-full bg-green-400 mt-2 overflow-hidden p-4'>
            <section className='grid grid-cols-2x'>
              <section className='grid grid-rows-2'>
                <div>
                  <button className='outline outline-2 outline-black rounded-xl p-2 bg-blue-600 text-white active:scale-95 hover:bg-blue-700'>
                    Start Fight
                  </button>
                </div>
                <div>
                  <article className='py-2'>
                    <span>Fight requests</span>
                  </article>
                  <div className='pr-2'>
                    {openBattleRequests?.map((battle, index) => {
                      return (
                        <div
                          key={index}
                          className='grid bg-yellow-400 grid-cols-rev items-center px-2 w-full py-1 border-b-2 border-black border-solid'
                        >
                          <div className='grid grid-flow-col items-center'>
                            <span>{battle.playerOneUserName}</span>
                            <span className='px-1'>V</span>
                            <span>{battle.playerTwoUserName}</span>
                          </div>
                          <div className='grid grid-cols-2 w-fit justify-end'>
                            <div>
                              <button onClick={() => goToOpenBattle(battle)} className='outline outline-2 outline-black bg-blue-500 hover:bg-bue-700 active:scale-95 p-1'>
                                GOTO
                              </button>
                            </div>
                            <div>
                              <button onClick={() => deleteBattle(battle)} className='outline outline-2 outline-black bg-blue-500 hover:bg-bue-700 active:scale-95 p-1'>
                                DELETE
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
              <section className='grid grid-rows-reg bg-blue-300 outline outline-4 outline-black rouned'>
                <div className='grid items-center justify-center mt-2 mb-4'>
                  <article className='text-center mt-2 outline outline-4 outline-black rouned w-fit px-2 py-1'>
                    <h3>Leader Board</h3>
                    <h4>Top Battle Contenders</h4>
                    <h5>Earn cards and packs in battle</h5>
                  </article>
                </div>
                <div className='grid h-full bg-red-400'>
                  <div className='grid grid-rows-10 h-full '>
                    {leaderBoard.map((user, index) => {
                      return <div key={index}>{user.username}</div>;
                    })}
                  </div>
                </div>
              </section>
            </section>
          </div>
        </main>
      </section>
    </div>
  );
}

export default BattlesOverviewPage;
