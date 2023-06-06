import React, { useContext } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { UserContext } from '../../context/UserContext';
import { calenderDataArray } from '../../utils/CalenderData';
import RewardCalenderSquare from '../../components/calander/RewardCalenderSquare';

function RewardsPage() {
  const { user } = useContext(UserContext);
  
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

          <section className='grid justify-center items-center bg-blue-300'>
            <div className='grid grid-cols-7'>{calenderDataArray.map((day, index) => {
              return (
                <RewardCalenderSquare key={index} day={day} />
              )
            })}</div>
          </section>
        </main>
      </section>
    </div>
  );
}

export default RewardsPage;
