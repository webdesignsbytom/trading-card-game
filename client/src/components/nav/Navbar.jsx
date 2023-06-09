import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Images
import LogoImage from '../../assets/img/cute-user.png';

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const { toggleNavbar, toggleNavigation, activeNav, setActiveNav } =
    useContext(ToggleContext);

  let navigate = useNavigate();

  const goToUnopenedPacks = () => {
    toggleNavbar();
    navigate('/packs/unopened', { replace: true });
  };

  const navigateToPage = (event) => {
    const { id } = event.target;
    console.log('ssddd', id);
    setActiveNav(id);
    toggleNavbar();
    navigate(`${id}`);
  };

  const logoutUser = (event) => {
    event.preventDefault();
    setActiveNav('/');
    toggleNavbar();
    setUser({});
    localStorage.removeItem(process.env.REACT_APP_USER_TOKEN);

    navigate('/', { replace: true });
  };

  return (
    <nav className='nav__bg h-full relative z-30 bg-red-500 lg:border-4 border-black border-b-4 border-solid grid grid-cols-a1a lg:grid-cols-none lg:grid-rows-reg'>
      <section className='grid lg:hidden items-center justify-center pl-4'>
        <Link className='no__highlights' to='/'>
          <img
            className='w-10 no__highlights h-10'
            src={LogoImage}
            alt='Logo'
          />
        </Link>
      </section>

      <section className='text-center p-2'>
        <div className='flex justify-center items-center'>
          <div className='grid bg-white main__bg py-1 px-2 lg:px-4 w-fit outline-blue-700 outline outline-4 mt-1 rounded'>
            <p className='text-center text-2xl font-extrabold text__stroke font-gasoek tracking-wide'>
              <span className='text-blue-600'>
                CON <span className='text-red-600'>CARDS</span>
              </span>
            </p>
            <p className='font-bold text-sm'>
              <span>The Torie Trading Card Game</span>
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
            <Link to='/rewards'>
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
        onClick={() => {
          toggleNavbar();
        }}
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
            <li
              className={
                activeNav === '/'
                  ? 'w-full no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
                  : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
              }
            >
              <Link className='w-full' to='/'>
                Home
              </Link>
            </li>
            <li
              className={
                activeNav === '/shop'
                  ? 'w-full no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
                  : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
              }
            >
              <Link className='w-full' to='/shop'>
                Shop
              </Link>
            </li>
            {!user.email && (
              <>
                <li
                  className={
                    activeNav === '/login'
                      ? 'w-full no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
                      : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
                  }
                >
                  <Link className='w-full' to='/Login'>
                    Login
                  </Link>
                </li>
                <li
                  className={
                    activeNav === '/sign-up'
                      ? 'w-full no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
                      : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
                  }
                >
                  <Link className='w-full' to='/sign-up'>
                    Sign Up
                  </Link>
                </li>
              </>
            )}
            {user.email && (
              <>
                <li
                  className={
                    activeNav === '/album'
                      ? 'w-full no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
                      : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
                  }
                >
                  <Link className='w-full' to='/album'>
                    Album
                  </Link>
                </li>
                <li
                  className={
                    activeNav === '/trading'
                      ? 'w-full no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
                      : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
                  }
                >
                  <Link className='w-full' to='/trading'>
                    Trade
                  </Link>
                </li>
              </>
            )}
            {(user.role === 'ADMIN' || user.role === 'DEVELOPER') && (
              <li
                className={
                  activeNav === '/admin'
                    ? 'w-full no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
                    : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
                }
              >
                <Link className='w-full' to='/admin'>
                  Admin
                </Link>
              </li>
            )}
            <li
              className={
                activeNav === '/cards'
                  ? 'w-full no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
                  : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
              }
            >
              <Link className='w-full' to='/cards'>
                Cards List
              </Link>
            </li>
            <li
              className={
                activeNav === '/battles'
                  ? 'w-full no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
                  : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
              }
            >
              <Link className='w-full' to='/battles'>
                Battles
              </Link>
            </li>
            <li
              className={
                activeNav === '/invintory'
                  ? 'w-full no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
                  : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
              }
            >
              <Link className='w-full' to='/invintory'>
                Invintory
              </Link>
            </li>
            <li
              className={
                activeNav === '/rewards'
                  ? 'w-full no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
                  : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
              }
            >
              <Link className='w-full' to='/rewards'>
                Rewards
              </Link>
            </li>
          </ul>
        </div>

        <section className='flex items-center justify-center h-fit bg-gray-600'>
          {user.email && (
            <button
              className='w-full nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
              onClick={logoutUser}
            >
              Logout
            </button>
          )}
        </section>
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
                  id='/rewards'
                  onClick={navigateToPage}
                  className='no__highlights w-full outline text-center bg-blue-600 main__bg outline-black outline-2 rounded animate-pulse mt-2 py-1'
                >
                  Daily Reward Available
                </button>
              )}
            </section>
            <ul className='text-center gridh-fit w-full text-xl'>
              <li
                className={
                  activeNav === '/'
                    ? 'w-ful no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
                    : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
                }
              >
                <button onClick={navigateToPage} id='/'>
                  Home
                </button>
              </li>
              <li
                className={
                  activeNav === '/shop'
                    ? 'w-full no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
                    : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
                }
              >
                <button onClick={navigateToPage} id='/shop'>
                  Shop
                </button>
              </li>
              {!user.email && (
                <>
                  <li
                    className={
                      activeNav === '/login'
                        ? 'w-full no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
                        : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
                    }
                  >
                    <button onClick={navigateToPage} id='/login'>
                      Login
                    </button>
                  </li>
                  <li
                    className={
                      activeNav === '/sign-up'
                        ? 'w-full no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
                        : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
                    }
                  >
                    <button onClick={navigateToPage} id='/sign-up'>
                      Sign Up
                    </button>
                  </li>
                </>
              )}
              {(user.role === 'ADMIN' || user.role === 'DEVELOPER') && (
                <li
                  className={
                    activeNav === '/admin'
                      ? 'w-full no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
                      : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
                  }
                >
                  <button onClick={navigateToPage} id='/admin'>
                    Admin
                  </button>
                </li>
              )}
              {user.email && (
                <>
                  <li
                    className={
                      activeNav === '/album'
                        ? 'w-full no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
                        : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
                    }
                  >
                    <button onClick={navigateToPage} id='/album'>
                      Album
                    </button>
                  </li>
                  <li
                    className={
                      activeNav === '/trade'
                        ? 'w-full no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
                        : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
                    }
                  >
                    <button onClick={navigateToPage} id='/trading'>
                      Trade
                    </button>
                  </li>
                </>
              )}
              <li
                className={
                  activeNav === '/cards'
                    ? 'w-full no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
                    : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
                }
              >
                <button onClick={navigateToPage} id='/cards'>
                  Cards List
                </button>
              </li>
              <li
                className={
                  activeNav === '/battles'
                    ? 'w-full no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
                    : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
                }
              >
                <button onClick={navigateToPage} id='/battles'>
                  Battles
                </button>
              </li>
              <li
                className={
                  activeNav === '/invintory'
                    ? 'w-full no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
                    : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
                }
              >
                <button onClick={navigateToPage} id='/invintory'>
                  Invintory
                </button>
              </li>
              <li
                className={
                  activeNav === '/rewards'
                    ? 'w-full no__highlights nav__bg hover:bg-green-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-green-400 text-gray-800 font-semibold'
                    : 'w-full no__highlights nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
                }
              >
                <button onClick={navigateToPage} id='/rewards'>
                  Rewards
                </button>
              </li>
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

export default Navbar;
