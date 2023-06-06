import React, { useContext } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
import client from '../../utils/client';

function RewardCalenderSquare({ day }) {
  const { user, setUser } = useContext(UserContext);

  const openDailyReward = (day) => {
    console.log('openDailyReward');
    let rewardData = { userId: user.id };

    client
      .patch('/user/rewards/collect', rewardData, true)
      .then((res) => {
    //     console.log('res', res.data);
    //     console.log('res.data.data.token', res.data.data.token);
    //     localStorage.setItem(
    //       process.env.REACT_APP_USER_TOKEN,
    //       res.data.data.token
    //     );
    //     setUser(res.data.data.updatedUser);
      })

      .catch((err) => {
        console.error('Unable to login', err);
      });
  }

  if (user?.loginRecord?.daysInARow >= day.id) {
    return (
      <div className='relative w-10 h-10 text-white bg-red-400 main__bg outline-1 outline-black outline px-1'>
        {day.id}
        {user?.loginRecord?.collectedReward === false &&
        user?.loginRecord.daysInARow === day.id ? (
          <div onClick={() => openDailyReward(day)} className='absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
           <span className='animate-pulse'>🎁</span>
          </div>
        ) : (
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            ✔️
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className='w-10 h-10 bg-white outline-1 outline-black outline px-1'>
        {day.id}
      </div>
    );
  }
}

export default RewardCalenderSquare;
