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
// Icons
import { IoMenu } from "react-icons/io5";

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
    <nav className='nav__bg h-full relative z-30 bg-nav-colour lg:border-4 border-main-border border-b-4 border-solid grid grid-flow-col  justify-between lg:grid-rows-reg'>

      {/* Phone Nav */}
      <nav
        onClick={toggleNavbar}
        className='grid lg:hidden no__highlights'
      >
        <button className='text-white'>
          <IoMenu size={50} />
        </button>
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
