import React from 'react';

function RewardCalenderSquare({ day }) {
  if (day.collected === true) {
    return (
      <div className='relative w-10 h-10 text-white bg-red-400 main__bg outline-1 outline-black outline px-1'>
        {day.id}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>✔️</div>
      </div>
    );
  }
  return (
    <div className='w-10 h-10 bg-white outline-1 outline-black outline px-1'>
      {day.id}
    </div>
  );
}

export default RewardCalenderSquare;
