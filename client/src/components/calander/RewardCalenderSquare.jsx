import React, { useContext } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
// Api
import client from '../../api/client';
// Constants
import { COLLECT_REWARD_API } from '../../utils/Constants';

function RewardCalendarSquare({ day, setRewardData, setRewardAvailable }) {
  const { user } = useContext(UserContext);

  const openDailyReward = (day) => {
    const daysInARow = user.loginRecord.daysInARow;

    client
      .patch(`${COLLECT_REWARD_API}/${user.id}`, { daysInARow })
      .then((res) => {
        setRewardData(res.data.data.reward[1]);
        setRewardAvailable(true);
      })
      .catch((err) => {
        console.error('Unable to collect reward', err);
      });
  };

  if (user?.loginRecord?.daysInARow > day.id) {
    return (
      <div className='relative w-10 h-10 lg:w-12 lg:h-12 text-white bg-red-400 main__bg border-solid border-main-border border-2 px-1'>
        {day.id}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-2xl'>
          ✔️
        </div>
      </div>
    );
  }

  if (
    user?.loginRecord?.collectedReward === false &&
    user?.loginRecord.daysInARow === day.id
  ) {
    return (
      <div className='relative w-10 h-10 lg:w-12 lg:h-12 text-white bg-red-400 main__bg border-solid border-main-border border-2 px-1'>
        {day.id}
        <div
          onClick={() => openDailyReward(day)}
          className='absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        >
          <span className='animate-pulse lg:text-xl'>🎁</span>
        </div>
      </div>
    );
  }

  return (
    <div className='w-10 h-10 lg:w-12 lg:h-12 lg:text-2xl bg-white border-solid border-main-border border-2 px-1'>
      {day.id}
    </div>
  );
}

export default RewardCalendarSquare;
