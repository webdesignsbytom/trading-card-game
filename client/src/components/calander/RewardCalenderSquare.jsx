import React, { useContext } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
import client from '../../api/client';

function RewardCalenderSquare({
  day,
  setRewardData,
  setRewardDataType,
  setRewardAvailable
}) {
  const { user, setUser } = useContext(UserContext);

  const openDailyReward = (day) => {
    let rewardData = { userId: user.id };

    client
      .patch('/users/user/rewards/collect', rewardData)
      .then((res) => {
        setRewardData(res.data.data.reward);
        setRewardDataType(res.data.data.rewardType);
        setUser(res.data.data.updatedUser);
        setRewardAvailable(true)
      })

      .catch((err) => {
        console.error('Unable to login', err);
      });
  };

  if (user?.loginRecord?.daysInARow > day.id) {
    return (
      <div className='relative w-10 h-10 lg:w-12 lg:h-12 text-white bg-red-400 main__bg outline-1 outline-black outline px-1'>
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
      <div className='relative w-10 h-10 lg:w-12 lg:h-12 text-whi2e bg-red-400 main__bg outline-1 outline-black outline px-1'>
        {day.id}

        <div
          onClick={() => openDailyReward(day)}
          className='absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        >
          <span className='animate-pulse lg:text-xl'>🎁</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className='w-10 h-10 lg:w-12 lg:h-12 lg:text-2xl bg-white outline-1 outline-black outline px-1'>
        {day.id}
      </div>
    );
  }
}

export default RewardCalenderSquare;
