import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// Constants
import {
  HOME_PAGE_URL,
  SHOP_PAGE_URL,
  LOGIN_PAGE_URL,
  SIGN_UP_PAGE_URL,
  ALBUM_PAGE_URL,
  TRADING_PAGE_URL,
  ADMIN_PAGE_URL,
  CARDS_PAGE_URL,
  BATTLES_PAGE_URL,
  INVENTORY_PAGE_URL,
  REWARDS_PAGE_URL,
  UNOPENED_PACKS_URL,
  DEV_PAGE_URL,
  BATTLE_REQUESTS_PAGE_URL,
} from '../../utils/Constants';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Images
import MainLogo from '../../assets/images/logos/mon_card_main_logo_of_creatures.png';
// Icons
import { IoMenu } from 'react-icons/io5';

function SmallScreenNavbar({ logoutUser }) {
  const { user } = useContext(UserContext);
  const { toggleNavbar, activeNav } = useContext(ToggleContext);
  const [phoneNavIsOpen, setPhoneNavIsOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  const animationInProgress = useRef(false);

  const navigate = useNavigate();

  const goToUnopenedPacks = () => {
    toggleNavbar();
    navigate(UNOPENED_PACKS_URL, { replace: true });
  };

  const navigateToPage = (event) => {
    const { id } = event.target;
    toggleNavbar();
    navigate(id);
  };

  const location = useLocation();

  useEffect(() => {
    // Reset animation class when location changes
    setAnimationClass('');
  }, [location]);

  const openPhoneNav = () => {
    if (animationInProgress.current) {
      return;
    }

    animationInProgress.current = true;

    if (phoneNavIsOpen) {
      setAnimationClass('animate_close_nav');
      setTimeout(() => {
        setPhoneNavIsOpen(false);
        animationInProgress.current = false;
      }, 1200); // Duration of the closeNav animation
    } else {
      setAnimationClass('animate_open_nav');
      setPhoneNavIsOpen(true);
      setTimeout(() => {
        animationInProgress.current = false;
      }, 1200); // Duration of the openNav animation
    }
  };

  return (
    <div className='grid py-1 relative h-full w-full'>
      <section className='grid grid-flow-col justify-between gap-4'>
        {/* Main logo */}
        <div className='grid items-center px-2'>
          <Link to={HOME_PAGE_URL}>
            <img
              src={MainLogo}
              alt='Monster cards logo'
              className='h-12 w-12 rounded'
            />
          </Link>
        </div>

        {/* Menu button */}
        <div className='grid items-center px-2'>
          <button
            onClick={openPhoneNav}
            className='text-colour1'
            aria-label='Toggle navigation menu'
          >
            <IoMenu size={50} />
          </button>
        </div>
      </section>

      {phoneNavIsOpen && (
        <div
          className={`grid ${animationClass} top-[100%] z-40 absolute h-full w-full`}
        >
          <section className='grid w-full bg-pink-800 p-2 h-full border-2 border-main-border border-solid'>
            <section className='mb-2 text-white'>
              {user?.packs?.length > 0 && (
                <div
                  onClick={goToUnopenedPacks}
                  className='no__highlights outline text-center bg-blue-500 main__bg outline-black outline-2 rounded animate-pulse'
                >
                  <button className='font-semibold py-1'>
                    <div>
                      <span>{user.packs.length} Unopened Packs</span>
                    </div>
                  </button>
                </div>
              )}
              {user?.loginRecord?.collectedReward === false && (
                <button
                  id={REWARDS_PAGE_URL}
                  onClick={navigateToPage}
                  className='no__highlights w-full outline text-center bg-blue-600 main__bg outline-black outline-2 rounded animate-pulse mt-2 py-1'
                >
                  Daily Reward Available
                </button>
              )}
              {user?.battleRequestsReceived > 0 && (
                <div className='grid'>
                  <Link to={BATTLE_REQUESTS_PAGE_URL}>
                    <div className='bg-blue-700 main__bg text-center border-2 border-solid border-main-border rounded animate-pulse'>
                      <div className='font-semibold py-1'>
                        <span>NEW BATTLE</span>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </section>

            <ul className='text-center grid h-fit bg-black w-full text-xl font-fantasy border-2 border-solid border-main-border overflow-hidden rounded-lg'>
              <NavButton
                to={HOME_PAGE_URL}
                activeNav={activeNav}
                text='Home'
                onClick={navigateToPage}
                top={true}
              />
              <NavButton
                to={SHOP_PAGE_URL}
                activeNav={activeNav}
                text='Shop'
                onClick={navigateToPage}
              />
              <NavButton
                to={ALBUM_PAGE_URL}
                activeNav={activeNav}
                text='Album'
                onClick={navigateToPage}
              />
              {!user.email && (
                <>
                  <NavButton
                    to={LOGIN_PAGE_URL}
                    activeNav={activeNav}
                    text='Login'
                    onClick={navigateToPage}
                  />
                  <NavButton
                    to={SIGN_UP_PAGE_URL}
                    activeNav={activeNav}
                    text='Sign Up'
                    onClick={navigateToPage}
                  />
                </>
              )}
              {user.email && (
                <>
                  <NavButton
                    to={TRADING_PAGE_URL}
                    activeNav={activeNav}
                    text='Trade'
                    onClick={navigateToPage}
                  />
                </>
              )}
              {(user.role === 'ADMIN' || user.role === 'DEVELOPER') && (
                <NavButton
                  to={ADMIN_PAGE_URL}
                  activeNav={activeNav}
                  text='Admin'
                  onClick={navigateToPage}
                />
              )}
              {user.role === 'DEVELOPER' && (
                <NavButton
                  to={DEV_PAGE_URL}
                  activeNav={activeNav}
                  text='Developer'
                  onClick={navigateToPage}
                />
              )}
              <NavButton
                to={CARDS_PAGE_URL}
                activeNav={activeNav}
                text='Cards List'
                onClick={navigateToPage}
              />
              <NavButton
                to={BATTLES_PAGE_URL}
                activeNav={activeNav}
                text='Battles'
                onClick={navigateToPage}
              />
              <NavButton
                to={INVENTORY_PAGE_URL}
                activeNav={activeNav}
                text='Inventory'
                onClick={navigateToPage}
              />
              <NavButton
                to={REWARDS_PAGE_URL}
                activeNav={activeNav}
                text='Rewards'
                onClick={navigateToPage}
              />

              {user.email && (
                <section className='flex items-center justify-center h-fit bg-black'>
                  <button
                    className='w-full no__highlights nav__bg hover:bg-selected-button active:scale-95 grid py-2 bg-main-button text-gray-800 font-semibold border-t-2 border-solid border-main-border'
                    onClick={logoutUser}
                  >
                    Logout
                  </button>
                </section>
              )}
            </ul>
          </section>
        </div>
      )}
    </div>
  );
}

const NavButton = ({ to, activeNav, text, onClick, top }) => (
  <li
    className={
      activeNav === to
        ? `w-full no__highlights nav__bg hover:bg-selected-button active:scale-95 grid py-2 ${
            !top && 'border-t-2'
          } border-solid border-main-border bg-selected-button text-gray-800 font-semibold`
        : `w-full no__highlights nav__bg hover:bg-selected-button active:scale-95 grid py-2 ${
            !top && 'border-t-2'
          } border-solid border-main-border bg-main-button text-gray-800 font-semibold`
    }
  >
    <button onClick={onClick} id={to}>
      {text}
    </button>
  </li>
);

export default SmallScreenNavbar;
