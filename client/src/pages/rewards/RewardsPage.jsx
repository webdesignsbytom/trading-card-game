import React, { useContext, useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Components
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
import { calendarDataArray } from '../../utils/rewards/CalenderData';
import RewardCollectedModal from '../../components/rewards/RewardCollectedModal';

function RewardsPage() {
  const { user } = useContext(UserContext);
  const { setActiveNav } = useContext(ToggleContext);
  const [rewardData, setRewardData] = useState({});
  const [rewardDataType, setRewardDataType] = useState('card');
  const [rewardAvailable, setRewardAvailable] = useState(false);

  useEffect(() => {
    setActiveNav(REWARDS_PAGE_URL);
  }, []);

  const closeCollectReward = () => {
    setRewardAvailable(false);
  };

  return (
    <div className='h-screen grid overflow-hidden'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='bg-white relative main__bg p-4 grid grid-rows-reg overflow-hidden'>
          <section className='grid grid-rows-reg'>
            <article className='text-center text__stroke'>
              <h1 className='text-center text-2xl lg:text-7xl font-extrabold text-blue-600 font-fantasy tracking-wide'>
                DAILY <span className='text-red-600'>REWARDS</span>
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
              {calendarDataArray.map((day, index) => {
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
            <RewardCollectedModal closeCollectReward={closeCollectReward} cardData={rewardData} rewardDataType={rewardDataType} />
          )}
        </main>
      </section>
    </div>
  );
}

export default RewardsPage;
