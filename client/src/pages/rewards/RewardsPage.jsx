import React, { useContext, useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { UserContext } from '../../context/UserContext';
import { calenderDataArray } from '../../utils/CalenderData';
// Components
import Card from '../../components/card/Card';
import RewardCalenderSquare from '../../components/calander/RewardCalenderSquare';
import { ToggleContext } from '../../context/ToggleContext';

function RewardsPage() {
  const { user } = useContext(UserContext);
  const { setActiveNav } = useContext(ToggleContext)
  const [rewardData, setRewardData] = useState({});
  const [rewardDataType, setRewardDataType] = useState('');
  const [rewardAvailable, setRewardAvailable] = useState(false);
  console.log('rewardDataType', rewardDataType);
  console.log('rewardData', rewardData);

  useEffect(() => {
    setActiveNav('/rewards')
  }, [])
  
  const collectReward = () => {
    setRewardAvailable(false);
  };

  return (
    <div className='h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='bg-white main__bg p-4 grid grid-rows-reg'>
          <section>
            <article className='text-center'>
              <h1 className='text-6xl font-bold'>REWARDS</h1>
              <h2>Login daily to collect fantastic rewards!</h2>
            </article>
          </section>

          <section className='grid justify-center items-center'>
            <div className='grid grid-cols-7'>
              {calenderDataArray.map((day, index) => {
                return (
                  <RewardCalenderSquare
                    setRewardData={setRewardData}
                    setRewardDataType={setRewardDataType}
                    setRewardAvailable={setRewardAvailable}
                    key={index}
                    day={day}
                  />
                );
              })}
            </div>
          </section>

          {/* Reward modal */}
          {rewardAvailable && (
            <section className='grid bg-transparent h-full justify-center items-center w-full absolute'>
              <div className='grid bg-red-600 main__bg outline outline-4 outline-black py-4 px-2'>
                <h4>REWARD</h4>
                <div className='h-24'>
                  {rewardDataType === 'card' && <Card cardData={rewardData} />}
                </div>
                <div className='text-center capitalize'>
                  <p>{rewardDataType}</p>
                </div>
              </div>

              <div>
                <button
                  className='outline outline-2 my-2 outline-black rounded p-2 bg-red-600 main__bg text-white font-semibold text-xl'
                  onClick={collectReward}
                >
                  CLOSE
                </button>
              </div>
            </section>
          )}
        </main>
      </section>
    </div>
  );
}

export default RewardsPage;
