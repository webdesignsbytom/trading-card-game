import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import StartingPacks from '../../components/starterPacks/StartingPacks';
import LargeMonCardsHeader from '../../components/headers/LargeMonCardsHeader';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Constants
import { HOME_PAGE_URL, SIGN_UP_PAGE_URL } from '../../utils/Constants';

function HomePage() {
  const { user } = useContext(UserContext);
  const { setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav(HOME_PAGE_URL);
  }, []);

  return (
    <div className='bg-main-colour main__bg h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid'>
          <section className='grid h-full p-2'>
            {user.email && !user.collectedStartedPacks && (
              <>
                <section className='p-4 grid h-full items-center justify-center'>
                  <LargeMonCardsHeader />
                </section>
                <StartingPacks />
              </>
            )}
            {user.email && user.collectedStartedPacks && (
              <section className='p-4 grid h-full items-center justify-center'>
                <LargeMonCardsHeader />
              </section>
            )}
            {!user.email && (
              <section className='p-4 grid grid-rows-rev gap-5 h-fit my-auto items-center justify-center'>
                <LargeMonCardsHeader />
                <section className='h-fit'>
                  <div className='grid justify-center py-4'>
                    <div>
                      <p>
                        Sign up now and get the starter pack collection free.
                      </p>
                    </div>
                    <Link
                      to={SIGN_UP_PAGE_URL}
                      className='outline outline-2 bg-secondary-colour font-bold active:scale-95 hover:brightness-90 outline-black main__bg py-2 px-4 my-2 rounded-xl text-center'
                    >
                      SIGN UP NOW
                    </Link>
                  </div>
                </section>
              </section>
            )}
          </section>
        </main>
      </section>
    </div>
  );
}

export default HomePage;
