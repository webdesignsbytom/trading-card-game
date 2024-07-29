import React, { useContext, useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Card from '../../components/card/Card';
import RewardCalenderSquare from '../../components/calander/RewardCalenderSquare';
// Constants
import {
  FiveDayLoginReward,
  OneDayLoginReward,
  TenDayLoginReward,
  ThirtyDayLoginReward,
  TwentyDayLoginReward,
} from '../../utils/cards/CardGameConstants';
import { REWARDS_PAGE_URL } from '../../utils/Constants';
// Data
import { calenderDataArray } from '../../utils/CalenderData';

function RewardsPage() {
  const { user } = useContext(UserContext);
  const { setActiveNav } = useContext(ToggleContext);
  const [rewardData, setRewardData] = useState({});
  const [rewardDataType, setRewardDataType] = useState('');
  const [rewardAvailable, setRewardAvailable] = useState(false);
  console.log('rewardDataType', rewardDataType);
  console.log('rewardData', rewardData);

  useEffect(() => {
    setActiveNav(REWARDS_PAGE_URL);
  }, []);

  const collectReward = () => {
    setRewardAvailable(false);
  };

  return (
    <div className='h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='bg-white relative main__bg p-4 grid grid-rows-reg overflow-hidden'>
          <section className='grid grid-rows-reg'>
            <article className='text-center'>
              <h1 className='text-center text-2xl lg:text-6xl font-extrabold text__stroke font-gasoek tracking-wide'>
                <span className='text-blue-600'>REWARDS</span>
              </h1>
              <h2 className='text-xl mt-2 font-semibold'>
                Login daily to collect fantastic rewards!
              </h2>
            </article>

            <div className='mt-10'>
              <article className='grid justify-center text-xl font-semibold text-center gap-4'>
                <span>Daily Reward: {OneDayLoginReward}</span>
                <span>5x Days : {FiveDayLoginReward}</span>
                <span>10x Days: {TenDayLoginReward}</span>
                <span>20x Days: {TwentyDayLoginReward}</span>
                <span>30x Days: {ThirtyDayLoginReward}</span>
              </article>
            </div>
          </section>

          <section className='grid justify-center items-center overflow-hidden'>
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
            <section className='absolute grid overflow-hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4'>
              <div className='grid bg-red-600 main__bg outline outline-4 outline-black rounded-xl overflow-hidden'>
                <div className='grid'>
                  <div className='text-center'>
                    <h2 className='text-xl font-semibold my-2'>REWARD</h2>
                  </div>
                  <div className='grid w-full mx-auto items-center justify-center p-2'>
                    <div className='grid items-center justify-center mx-auto w-1/2'>
                      {rewardDataType === 'card' && (
                        <Card cardData={rewardData} />
                      )}
                    </div>
                  </div>
                  <div className='grid text-center items-center justify-center capitalize'>
                    <p className='flex text-center'>
                      <span>Reward:</span>
                      <span className='capitalize'>{rewardDataType}</span>
                      <span>{rewardDataType.cardName}</span>
                    </p>
                  </div>
                </div>

                <div className='grid items-center justify-center mb-2'>
                  <button
                    className='outline outline-2 my-2 outline-black rounded p-2 bg-blue-700 hover:bg-blue-500 active:scale-95 main__bg text-white font-semibold text-xl'
                    onClick={collectReward}
                    aria-label='Close reward modal'
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </section>
          )}
        </main>
      </section>
    </div>
  );
}

export default RewardsPage;
