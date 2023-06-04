import React, { useContext } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { UserContext } from '../../context/UserContext';
import RegisterForm from '../../components/forms/RegisterForm';
import StartingPacks from '../../components/starterPacks/StartingPacks';

function HomePage() {
  const { user } = useContext(UserContext);

  return (
    <div className='bg-red-100 h-screen grid'>
      <section className='bg-blue-500 grid h-full overflow-hidden grid-cols-reg'>
        <Navbar />
        <main className='grid grid-rows-reg'>
          <section className='p-4 flex items-center justify-center'>
            <article className='outline outline-4 outline-black rounded bg-white w-fit p-2'>
              <h1 className='text-center'>
                <span className='text-blue-600'>
                  CON <span className='text-red-600'>CARDS</span>
                </span>
              </h1>
              <h2>The Tory Trading Card Game</h2>
            </article>
          </section>
          <section className='grid h-full p-2'>
            {!user.email && <RegisterForm />}
            {user.email && !user.collectedStartedPacks && <StartingPacks />}
          </section>
        </main>
      </section>
    </div>
  );
}

export default HomePage;
