import React from 'react';
import { Link } from 'react-router-dom';
// Components
import StartingPacks from '../../components/starterPacks/StartingPacks';
import LargeMonCardsHeader from '../../components/headers/LargeMonCardsHeader';
// Constants
import { SIGN_UP_PAGE_URL } from '../../utils/Constants';
// Context
import { useUser } from '../../context/UserContext';

function HomePageMainContainer() {
  const { user } = useUser();

  return (
    <main className='grid border-solid border-main-border border-b-2 border-l-2 border-r-2 lg:border-l-0 lg:border-t-2 shadow-[inset_-1px_43px_35px_48px_#00000024]'>
      {/* Main content */}
      <section className='grid h-full items-center p-2'>
        <div className='grid lg:mb-4'>
          {/* Main general display */}
          {user.email && user.collectedStartedPacks && (
            <section className='p-4 grid h-full items-center justify-center'>
              <LargeMonCardsHeader />
            </section>
          )}
          {/* Collect starter packs */}
          {user.email && !user.collectedStartedPacks && (
            <>
              <section className='p-4 grid h-full items-center justify-center'>
                <LargeMonCardsHeader />
              </section>
              <StartingPacks />
            </>
          )}
          {/* No User - Sign up */}
          {!user.email && (
            <section className='p-4 grid grid-rows-rev gap-8 h-fit my-auto items-center justify-center'>
              <LargeMonCardsHeader />
              <section className='h-fit'>
                <div className='grid justify-center py-4'>
                  <Link
                    to={SIGN_UP_PAGE_URL}
                    className='styled-button px-4 py-2 text-2xl active:scale-90'
                  >
                    <span className='font-fantasy font-extrabold'>
                      SIGN <span className=''>UP</span> NOW
                    </span>
                  </Link>
                </div>
              </section>
            </section>
          )}
        </div>
      </section>
    </main>
  );
}

export default HomePageMainContainer;
