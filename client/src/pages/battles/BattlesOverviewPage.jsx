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
      <section className='grid h-full lg:overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='bg-black main__bg p-4 grid grid-rows-reg overflow-hidden'>
          <section>
            <article className='text-cente'>
              <h1 className='text-center text-4xl lg:text-6xl font-extrabold text__stroke font-gasoek tracking-wide'><span className='text-blue-700'>BATTLE</span> <span className='text-red-700'>ZONE</span></h1>
              <h2 className='text-gray-50 text-center font-semibold'>FIGHT AND WIN!</h2>
            </article>
          </section>

          <div className='grid h-full bg-white main__bg mt-2 overflow-hidden p-4'>
            <section className='grid lg:grid-cols-2x'>
              <section className='grid grid-rows-2'>
                <div className='grid items-center justify-center'>
                  <button className='outline outline-2 capitalize outline-black rounded-xl p-2 bg-blue-600 text-white active:scale-95 hover:bg-blue-700'>
                    Start New Battle
                  </button>
                </div>
                <div>
                  <article className='py-2'>
                    <span>Battle requests / Open battles</span>
                  </article>
                  <div className='pr-2 outline-2 outline-black outline py-2 bg-gray-50'>
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
              <section className='grid grid-rows-reg bg-black main__bg outline outline-2 outline-red-700 rounded-lg'>
                <div className='grid items-center justify-center mt-2 mb-4'>
                  <article className='text-center mt-2 outline outline-2 outline-blue-700 bg-white main__bg rounded-lg w-fit px-2 py-1'>
                    <h3 className='text-xl uppercase font-semibold'>Leader Board</h3>
                    <h4>Top Battle Contenders!</h4>
                    <h5>Earn cards and packs in battle</h5>
                  </article>
                </div>
                <div className='grid h-full text-gray-50 px-2'>
                  <div className='grid grid-rows-10 h-full '>
                    {leaderBoard.map((user, index) => {
                      return <div key={index} className='grid grid-cols-3'>
                        <span>{user.username}</span>
                        <span>{user.wins}</span>
                        <span>{user.xp}</span>
                      </div>;
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
