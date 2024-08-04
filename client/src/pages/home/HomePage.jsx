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
// Images
import GeneralImage from '../../assets/images/brand/brand_mon_cards_design_card_alt.png';

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

        <main className='grid border-solid bg-cards-display bg-center border-main-border border-b-2 border-l-2 border-r-2 lg:border-l-0 lg:border-t-2 shadow-[inset_-1px_43px_35px_48px_#00000024]'>
          <section className='grid h-full items-center p-2'>
            <div className='grid lg:mb-4'>
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
                <section className='p-4 grid grid-rows-rev gap-8 h-fit my-auto items-center justify-center'>
                  <LargeMonCardsHeader />
                  <section className='h-fit'>
                    <div className='grid justify-center py-4'>
                      <Link
                        to={SIGN_UP_PAGE_URL}
                        className='main__bg outline outline-2 text-3xl lg:text-5xl bg-transparent-black hover:bg-red-300 shadow-[inset_-1px_18px_35px_22px_#00000024] hover:shadow-[inset_-1px_18px_35px_22px_#00000024] active:scale-95 outline-black rounded-xl px-10 py-2 text__stroke'
                      >
                        <span className='font-fantasy font-extrabold text-main-colour'>SIGN <span className='text-red-600'>UP</span> NOW</span>
                      </Link>
                    </div>
                  </section>
                </section>
              )}
            </div>
          </section>
        </main>
      </section>
    </div>
  );
}

export default HomePage;
