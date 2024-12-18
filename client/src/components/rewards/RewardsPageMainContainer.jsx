import React, { useState } from 'react';
// Components
import RewardCollectedModal from './RewardCollectedModal';
import RewardCalenderSquare from '../calander/RewardCalenderSquare';
// Constants
import {
  FiveDayLoginReward,
  OneDayLoginReward,
  TenDayLoginReward,
  ThirtyDayLoginReward,
  TwentyDayLoginReward,
} from '../../utils/cards/CardGameConstants';
// Data
import { calendarDataArray } from '../../utils/rewards/CalenderData';

function RewardsPageMainContainer() {
  const [rewardData, setRewardData] = useState({});
  const [rewardDataType, setRewardDataType] = useState('card');
  const [rewardAvailable, setRewardAvailable] = useState(false);

  const closeCollectReward = () => {
    setRewardAvailable(false);
  };

  return (
    <main className='grid bg-white main__bg overflow-hidden'>
      <div className='grid bg-cards-display bg-center bg-cover h-full p-4 overflow-hidden'>
        <div className='grid items-center h-full'>
          {/* Header */}
          <article className='grid bg-transparent-white w-fit mx-auto grid-rows-reg p-4 rounded-lg'>
            <section className='text-center text__stroke'>
              <h1 className='text-center text-2xl lg:text-7xl font-extrabold text-blue-600 font-fantasy tracking-wide'>
                DAILY <span className='text-red-600'>REWARDS</span>
              </h1>
              <h2 className='text-xl mt-2 font-semibold'>
                Login daily to collect fantastic rewards!
              </h2>
            </section>

            <section className='grid justify-center text-xl font-semibold text-center gap-2'>
              <span>Daily Reward: {OneDayLoginReward}</span>
              <span>5x Days : {FiveDayLoginReward}</span>
              <span>10x Days: {TenDayLoginReward}</span>
              <span>20x Days: {TwentyDayLoginReward}</span>
              <span>30x Days: {ThirtyDayLoginReward}</span>
            </section>
          </article>

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
            <RewardCollectedModal
              closeCollectReward={closeCollectReward}
              cardData={rewardData}
              rewardDataType={rewardDataType}
            />
          )}
        </div>
      </div>
    </main>
  );
}

export default RewardsPageMainContainer;
