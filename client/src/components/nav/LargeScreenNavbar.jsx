import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
import { useUser } from '../../context/UserContext';
// Components
import SmallMonCardsHeader from '../headers/SmallMonCardsHeader';
// Hooks
import useNavigateToPage from '../../hooks/useNavigateToPage';

function LargeScreenNavbar({ logoutUser }) {
  const { user } = useUser();
  const navigateToPage = useNavigateToPage();

  const goToUnopenedPacks = () => {
    navigateToPage(UNOPENED_PACKS_URL);
  };

  // Define links array
  const navLinks = [
    { url: HOME_PAGE_URL, title: 'Home' },
    { url: SHOP_PAGE_URL, title: 'Shop' },
    { url: ALBUM_PAGE_URL, title: 'Album' },
    ...(!user.email
      ? [
          { url: LOGIN_PAGE_URL, title: 'Login' },
          { url: SIGN_UP_PAGE_URL, title: 'Sign Up' },
        ]
      : [{ url: TRADING_PAGE_URL, title: 'Trade' }]),
    ...(user.role === 'ADMIN' || user.role === 'DEVELOPER'
      ? [{ url: ADMIN_PAGE_URL, title: 'Admin' }]
      : []),
    ...(user.role === 'DEVELOPER'
      ? [{ url: DEV_PAGE_URL, title: 'Developer' }]
      : []),
    { url: CARDS_PAGE_URL, title: 'Cards List' },
    { url: BATTLES_PAGE_URL, title: 'Battles' },
    { url: INVENTORY_PAGE_URL, title: 'Inventory' },
    { url: REWARDS_PAGE_URL, title: 'Rewards', bottom: true },
  ];

  return (
    <section className='grid main__bg'>
      {/* Header and updates */}
      <section className='grid px-2'>
        <SmallMonCardsHeader />

        {/* User conditional buttons */}
        <section className='grid gap-1 h-fit'>
          {user?.packs?.length > 0 && (
            <div className='grid'>
              <button
                onClick={goToUnopenedPacks}
                className='bg-blue-500 main__bg h-fit border-2 border-solid border-main-border rounded animate-pulse'
              >
                <div className='font-semibold py-1'>
                  <span>{user?.packs.length} Unopened Packs</span>
                </div>
              </button>
            </div>
          )}

          {user?.loginRecord?.collectedReward === false && (
            <div className='grid'>
              <Link to={REWARDS_PAGE_URL}>
                <div className='bg-blue-700 main__bg text-center border-2 border-solid border-main-border rounded animate-pulse'>
                  <div className='font-semibold py-1'>
                    <span>Daily Reward Available</span>
                  </div>
                </div>
              </Link>
            </div>
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
      </section>

      <section className='grid grid-rows-rev h-full'>
        <section className='grid'>
          <ul className='text-center grid bg-black h-fit w-full text-xl'>
            {navLinks.map(({ url, title, bottom }) => (
              <NavItem key={url} url={url} title={title} bottom={bottom} />
            ))}
          </ul>
        </section>

        {user.email && (
          <section className='flex items-center justify-center h-fit bg-black'>
            <button
              className='w-full nav__bg hover:bg-selected-button active:scale-95 grid py-2 border-t-2  border-solid border-main-border bg-main-button text-gray-800 font-semibold'
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

const NavItem = ({ url, title, bottom }) => {
  return (
    <li
      className={`w-full no__highlights grid ${
        bottom ? 'border-b-2 border-t-2' : 'border-t-2'
      } border-solid border-main-border font-semibold`}
    >
      <NavLink
        to={url}
        aria-label={`${title} page navigation tab`}
        className={({ isActive }) =>
          `text-xl md:text-lg font-poppins py-2 active:scale-95 nav__bg ${
            isActive
              ? 'bg-selected-button text-gray-800'
              : 'bg-main-button text-gray-800'
          }`
        }
        aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default LargeScreenNavbar;
