import React from 'react';
// Images
import BattleBackground from '../../assets/images/backgrounds/battle_page_fantasy_attackers.png';
import LeaderboardContainer from './LeaderboardContainer';

function BattlesOverviewComponent({
  openBattleRequests,
  goToOpenBattle,
  deleteBattle,
  setStartingNewBattle,
  startingNewBattle,
}) {
  const openStartingBattleComponent = () => {
    setStartingNewBattle(!startingNewBattle);
  };

  return (
    <section className='grid lg:grid-cols-2x gap-2 py-2 px-2'>
      <section
        className={`grid ${openBattleRequests.length >= 1 && 'grid-rows-2'} rounded border-solid border-4 border-blue-700 shadow-[inset_-1px_43px_35px_48px_#00000024]`}
        style={{
          backgroundImage: `url(${BattleBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='grid items-center justify-center'>
          <button
            onClick={openStartingBattleComponent}
            className='main__bg outline outline-2 text-4xl bg-transparent-black hover:bg-red-300 shadow-[inset_-1px_18px_35px_22px_#00000024] hover:shadow-[inset_-1px_18px_35px_22px_#00000024] active:scale-95 outline-black rounded-xl px-10 py-2 text__stroke tracking-wider'
          >
            <span className='font-fantasy font-extrabold text-main-colour'>
              START <span className='text-red-600'>NEW</span> BATTLE
            </span>
          </button>
        </div>
        {openBattleRequests.length >= 1 && (
          <section className='bg-green-400 '>
            <article className=''>
              <p>Battle requests / Open battles</p>
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
                        <button
                          onClick={() => goToOpenBattle(battle)}
                          className='outline outline-2 outline-black bg-blue-500 hover:bg-bue-700 active:scale-95 p-1'
                        >
                          GOTO
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => deleteBattle(battle)}
                          className='outline outline-2 outline-black bg-blue-500 hover:bg-bue-700 active:scale-95 p-1'
                        >
                          DELETE
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </section>

      {/* Leaderboard section */}
        <LeaderboardContainer />
    </section>
  );
}

export default BattlesOverviewComponent;
