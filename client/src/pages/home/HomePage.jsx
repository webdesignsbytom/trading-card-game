import React, { useContext } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import RegisterForm from '../../components/forms/RegisterForm';
import StartingPacks from '../../components/starterPacks/StartingPacks';
// Context
import { UserContext } from '../../context/UserContext';

function HomePage() {
  const { user } = useContext(UserContext);

  return (
    <div className='bg-blue-600 main__bg h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid'>
          <section className='grid h-full p-2'>
            {user.email && !user.collectedStartedPacks && (
              <>
                <section className='p-4 grid h-full items-center justify-center'>
                  <article className='outline outline-4 outline-black rounded bg-white w-fit p-2'>
                    <h1 className='text-center font-bold'>
                      <span className='text-blue-600'>
                        CON <span className='text-red-600'>CARDS</span>
                      </span>
                    </h1>
                    <h2>The Tory Trading Card Game</h2>
                  </article>
                </section>
                <StartingPacks />
              </>
            )}
            {user.email && user.collectedStartedPacks && (
              <section className='p-4 grid h-full items-center justify-center'>
                <article className='outline outline-4 outline-black rounded bg-white main__bg w-fit p-4'>
                  <h1 className='text-center text-6xl font-extrabold'>
                    <span className='text-blue-600'>
                      CON <span className='text-red-600'>CARDS</span>
                    </span>
                  </h1>
                  <h2 className='text-center text-xl font-semibold'>The Tory Trading Card Game</h2>
                </article>
              </section>
            )}
          </section>
        </main>
      </section>
    </div>
  );
}

export default HomePage;
