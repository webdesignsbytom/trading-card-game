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
  DEV_PAGE_URL,
  BATTLE_REQUESTS_PAGE_URL,
} from '../../utils/Constants';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Components
import SmallMonCardsHeader from '../headers/SmallMonCardsHeader';

function LargeScreenNavbar({ logoutUser }) {
  const { user } = useContext(UserContext);
  const { toggleNavbar, activeNav } = useContext(ToggleContext);

  const navigate = useNavigate();

  const goToUnopenedPacks = () => {
    toggleNavbar();
    navigate(UNOPENED_PACKS_URL, { replace: true });
  };

  return (
    <section className='grid'>
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
                  <span>{user.packs.length} Unopened Packs</span>
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
            <NavItem to={HOME_PAGE_URL} activeNav={activeNav} text='Home' />
            <NavItem to={SHOP_PAGE_URL} activeNav={activeNav} text='Shop' />
            <NavItem to={ALBUM_PAGE_URL} activeNav={activeNav} text='Album' />
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
                  to={TRADING_PAGE_URL}
                  activeNav={activeNav}
                  text='Trade'
                />
              </>
            )}
            {(user.role === 'ADMIN' || user.role === 'DEVELOPER') && (
              <NavItem to={ADMIN_PAGE_URL} activeNav={activeNav} text='Admin' />
            )}
            {user.role === 'DEVELOPER' && (
              <NavItem
                to={DEV_PAGE_URL}
                activeNav={activeNav}
                text='Developer'
              />
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
              bottom={true}
            />
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

const NavItem = ({ to, activeNav, text, bottom }) => (
  <li
    className={
      activeNav === to
        ? `w-full no__highlights nav__bg hover:bg-selected-button active:scale-95 grid py-2 ${
            bottom ? 'border-b-2 border-t-2' : 'border-t-2'
          } border-solid border-main-border bg-selected-button text-gray-800 font-semibold`
        : `w-full no__highlights nav__bg hover:bg-selected-button active:scale-95 grid py-2 ${
            bottom ? 'border-b-2 border-t-2' : 'border-t-2'
          } border-solid border-main-border bg-main-button text-gray-800 font-semibold`
    }
  >
    <Link className='w-full' to={to}>
      {text}
    </Link>
  </li>
);

export default LargeScreenNavbar;
