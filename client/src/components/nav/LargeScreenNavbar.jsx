import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
import SmallMonCardsHeader from '../headers/SmallMonCardsHeader';

function LargeScreenNavbar({ logoutUser }) {
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
  
  return (
    <section className='grid bg-orange-400'>
      {/* Header and updates */}
      <section className='bg-red-700'>
        <SmallMonCardsHeader />

       {/* Buttons */}
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

      <section className='grid bg-green-700'>
        <div className='grid items-center'>
          <ul className='text-center grid bg-black h-fit w-full text-xl'>
            <NavItem to={HOME_PAGE_URL} activeNav={activeNav} text='Home' />
            <NavItem to={SHOP_PAGE_URL} activeNav={activeNav} text='Shop' />
            {!user.email && (
              <>
                <NavItem
                  to={LOGIN_PAGE_URL}
                  activeNav={activeNav}
                  text='Login'
                />
                <NavItem
                  to={SIGN_UP_PAGE_URL}
                  activeNav={activeNav}
                  text='Sign Up'
                />
              </>
            )}
            {user.email && (
              <>
                <NavItem
                  to={ALBUM_PAGE_URL}
                  activeNav={activeNav}
                  text='Album'
                />
                <NavItem
                  to={TRADING_PAGE_URL}
                  activeNav={activeNav}
                  text='Trade'
                />
              </>
            )}
            {(user.role === 'ADMIN' || user.role === 'DEVELOPER') && (
              <NavItem to={ADMIN_PAGE_URL} activeNav={activeNav} text='Admin' />
            )}
            <NavItem
              to={CARDS_PAGE_URL}
              activeNav={activeNav}
              text='Cards List'
            />
            <NavItem
              to={BATTLES_PAGE_URL}
              activeNav={activeNav}
              text='Battles'
            />
            <NavItem
              to={INVENTORY_PAGE_URL}
              activeNav={activeNav}
              text='Inventory'
            />
            <NavItem
              to={REWARDS_PAGE_URL}
              activeNav={activeNav}
              text='Rewards'
            />
          </ul>
        </div>

        {!user.email && (
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
    </section>
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

export default LargeScreenNavbar;
