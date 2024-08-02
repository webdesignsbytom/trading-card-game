import React, { useState } from 'react';
// Data
import { tempLeaderboardData } from '../../utils/user/TemporaryData';

function LeaderboardContainer() {
  const [leaderBoard, setLeaderboard] = useState(tempLeaderboardData);

  return (
    <section className='grid grid-rows-reg bg-black main__bg border-4 border-white border-solid rounded-lg shadow-[inset_-1px_43px_35px_48px_#00000024]'>
      {/* Header */}
      <div className='grid items-center justify-center mt-2 mb-4'>
        <article className='text-center mt-2 border-solid border-4 border-blue-700 bg-secondary-colour main__bg rounded-lg w-fit px-4 py-1'>
          <h3 className='text-3xl uppercase font-semibold font-fantasy py-1'>
            Leader Board
          </h3>
          <div className='font-medium'>
            <h4>Top Battle Contenders!</h4>
            <h5>Earn cards and packs in battle</h5>
          </div>
        </article>
      </div>

      {/* Users in leaderboard */}
      <div className='grid h-full px-2 pt-4'>
        <div className='grid h-fit gap-2'>
          {leaderBoard.map((user, index) => {
            return (
              <article
                key={index}
                className='grid grid-cols-3 text-gray-50 text-center w-full h-fit border-2 border-white border-solid'
              >
                <div>
                  <p className='capitalize'>
                    <span>{user.username}</span>
                  </p>
                </div>
                <div>
                  <p>
                    <span>{user.wins}</span>
                  </p>
                </div>
                <div>
                  <p>
                    <span>{user.xp}</span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LeaderboardContainer;
