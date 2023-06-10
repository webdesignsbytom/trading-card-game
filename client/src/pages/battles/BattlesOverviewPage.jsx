import React, { useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import { tempLeaderboardData } from '../../utils/TemporaryData';

function BattlesOverviewPage() {
  const [leaderBoard, setLeaderboard] = useState(tempLeaderboardData);

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
              <div>
                <div>
                  <button className='outline outline-2 outline-black rounded-xl p-2 bg-blue-600 text-white active:scale-95 hover:bg-blue-700'>
                    Start Fight
                  </button>
                </div>
                <div>Fight requests</div>
              </div>
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
                            return (
                                <div key={index}>{user.username}</div>
                            )
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
