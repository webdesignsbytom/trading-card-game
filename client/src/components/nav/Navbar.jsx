import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Images
import LogoImage from '../../assets/img/cute-user.png';
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
  SecondaryTitle,
} from '../../utils/Constants';

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const { toggleNavbar, toggleNavigation, activeNav, setActiveNav } =
    useContext(ToggleContext);

  const navigate = useNavigate();

  const goToUnopenedPacks = () => {
    toggleNavbar();
    navigate(UNOPENED_PACKS_URL, { replace: true });
  };

  const navigateToPage = (event) => {
    const { id } = event.target;
    setActiveNav(id);
    toggleNavbar();
    navigate(id);
  };

  const logoutUser = (event) => {
    event.preventDefault();
    setActiveNav(HOME_PAGE_URL);
    toggleNavbar();
    setUser({});
    localStorage.removeItem(process.env.REACT_APP_USER_TOKEN);
    navigate(HOME_PAGE_URL, { replace: true });
  };

  return (
    <nav className='nav__bg h-full relative z-30 bg-red-500 lg:border-4 border-black border-b-4 border-solid grid grid-cols-a1a lg:grid-cols-none lg:grid-rows-reg'>
      <section className='grid lg:hidden items-center justify-center pl-4'>
        <Link className='no__highlights' to={HOME_PAGE_URL}>
          <img className='w-10 no__highlights h-10' src={LogoImage} alt='Logo' />
        </Link>
      </section>

      <section className='text-center p-2'>
        <div className='flex justify-center items-center'>
          <div className='grid bg-white main__bg py-1 px-2 lg:px-4 w-fit outline-blue-700 outline outline-4 mt-1 rounded'>
            <p className='text-center text-2xl font-extrabold text__stroke font-gasoek tracking-wide'>
              <span className='text-blue-600'>
                MON <span className='text-red-600'>CARDS</span>
              </span>
            </p>
            <p className='font-bold text-xs md:text-sm'>
              <span>{SecondaryTitle}</span>
            </p>
          </div>
        </div>

        <section className='text-center mt-4 hidden lg:grid gap-2'>
          {user?.packs?.length > 0 && (
            <div
              onClick={goToUnopenedPacks}
              className='outline bg-blue-500 main__bg outline-black outline-2 rounded animate-pulse'
            >
              <button className='font-semibold py-1'>
                <div>
                  <span>{user.packs.length} Unopened Packs</span>
                </div>
              </button>
            </div>
          )}
          {user?.loginRecord?.collectedReward === false && (
            <Link to={REWARDS_PAGE_URL}>
              <div className='outline bg-blue-700 main__bg outline-black outline-2 rounded animate-pulse'>
                <div className='font-semibold py-1'>
                  <span>Daily Reward Available</span>
                </div>
              </div>
            </Link>
          )}
        </section>
      </section>

      {/* Phone Nav */}
      <nav
        onClick={toggleNavbar}
        className='grid items-center justify-center lg:hidden no__highlights pr-4'
      >
        <span className='cursor-pointer text-gray-100 hover:text-hover-grey'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-10 h-10 transition no__highlights duration-200 ease-in-out select-none no__highlights focus:scale-125 active:scale-125'
            data-te-animation-init
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </span>
      </nav>

      {/* Navigation */}
      <section className='hidden lg:grid grid-rows-rev'>
        <div className='grid items-center'>
          <ul className='text-center grid bg-black h-fit w-full text-xl'>
            <NavItem to={HOME_PAGE_URL} activeNav={activeNav} text='Home' />
            <NavItem to={SHOP_PAGE_URL} activeNav={activeNav} text='Shop' />
            {!user.email && (
              <>
                <NavItem to={LOGIN_PAGE_URL} activeNav={activeNav} text='Login' />
                <NavItem to={SIGN_UP_PAGE_URL} activeNav={activeNav} text='Sign Up' />
              </>
            )}
            {user.email && (
              <>
                <NavItem to={ALBUM_PAGE_URL} activeNav={activeNav} text='Album' />
                <NavItem to={TRADING_PAGE_URL} activeNav={activeNav} text='Trade' />
              </>
            )}
            {(user.role === 'ADMIN' || user.role === 'DEVELOPER') && (
              <NavItem to={ADMIN_PAGE_URL} activeNav={activeNav} text='Admin' />
            )}
            <NavItem to={CARDS_PAGE_URL} activeNav={activeNav} text='Cards List' />
            <NavItem to={BATTLES_PAGE_URL} activeNav={activeNav} text='Battles' />
            <NavItem to={INVENTORY_PAGE_URL} activeNav={activeNav} text='Inventory' />
            <NavItem to={REWARDS_PAGE_URL} activeNav={activeNav} text='Rewards' />
          </ul>
        </div>

        {user.email && (
          <section className='flex items-center justify-center h-fit bg-gray-600'>
            <button
              className='w-full nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
              onClick={logoutUser}
            >
              Logout
            </button>
          </section>
        )}
      </section>

      {toggleNavigation && (
        <nav className='absolute lg:hidden w-full left-0 top-24 py-2 px-4'>
          <div className='bg-black nav__bg p-2 outline outline-4 outline-red-500 rounded'>
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
            </section>
            <ul className='text-center grid h-fit w-full text-xl'>
              <NavButton to={HOME_PAGE_URL} activeNav={activeNav} text='Home' onClick={navigateToPage} />
              <NavButton to={SHOP_PAGE_URL} activeNav={activeNav} text='Shop' onClick={navigateToPage} />
              {!user.email && (
                <>
                  <NavButton to={LOGIN_PAGE_URL} activeNav={activeNav} text='Login' onClick={navigateToPage} />
                  <NavButton to={SIGN_UP_PAGE_URL} activeNav={activeNav} text='Sign Up' onClick={navigateToPage} />
                </>
              )}
              {user.email && (
                <>
                  <NavButton to={ALBUM_PAGE_URL} activeNav={activeNav} text='Album' onClick={navigateToPage} />
                  <NavButton to={TRADING_PAGE_URL} activeNav={activeNav} text='Trade' onClick={navigateToPage} />
                </>
              )}
              {(user.role === 'ADMIN' || user.role === 'DEVELOPER') && (
                <NavButton to={ADMIN_PAGE_URL} activeNav={activeNav} text='Admin' onClick={navigateToPage} />
              )}
              <NavButton to={CARDS_PAGE_URL} activeNav={activeNav} text='Cards List' onClick={navigateToPage} />
              <NavButton to={BATTLES_PAGE_URL} activeNav={activeNav} text='Battles' onClick={navigateToPage} />
              <NavButton to={INVENTORY_PAGE_URL} activeNav={activeNav} text='Inventory' onClick={navigateToPage} />
              <NavButton to={REWARDS_PAGE_URL} activeNav={activeNav} text='Rewards' onClick={navigateToPage} />
              {user.email && (
                <button
                  className='w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
                  onClick={logoutUser}
                >
                  Logout
                </button>
              )}
            </ul>
          </div>
        </nav>
      )}
    </nav>
  );
}

const NavItem = ({ to, activeNav, text }) => (
  <li
    className={
      activeNav === to
        ? 'w-full no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
        : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
    }
  >
    <Link className='w-full' to={to}>
      {text}
    </Link>
  </li>
);

const NavButton = ({ to, activeNav, text, onClick }) => (
  <li
    className={
      activeNav === to
        ? 'w-full no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
        : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
    }
  >
    <button onClick={onClick} id={to}>
      {text}
    </button>
  </li>
);

export default Navbar;
