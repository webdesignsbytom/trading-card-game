import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Images
import LogoImage from '../../assets/img/cute-user.png';

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const { toggleOpenPackets, toggleNavbar, toggleNavigation } =
    useContext(ToggleContext);
  const [activeNav, setActiveNav] = useState('/');

  let navigate = useNavigate();

  const goToUnopenedPacks = () => {
    toggleOpenPackets();

    navigate('/invintory', { replace: true });
  };

  const logoutUser = (event) => {
    event.preventDefault();

    setUser({});
    localStorage.removeItem(process.env.REACT_APP_USER_TOKEN);

    navigate('/', { replace: true });
  };

  return (
    <nav className='nav__bg bg-red-500 border-4 border-black border-solid grid grid-cols-a1a lg:grid-cols-none lg:grid-rows-reg'>
      <section className='grid lg:hidden items-center justify-center pl-4'>
        <Link to='/'>
          <img className='w-10 h-10' src={LogoImage} alt='Logo' />
        </Link>
      </section>

      <section className='text-center p-2'>
        <div className='flex justify-center items-center'>
          <div className='grid bg-transparent-black py-1 px-4 w-fit outline-transparent-white outline outline-2 rounded'>
            <p className='text-2xl font-bold'>
              <span className='text-blue-600'>
                CON <span className='text-red-600'>CARDS</span>
              </span>
            </p>
            <p className='text-gray-50 font-semibold'>
              <span>The Torie Trading Card Game</span>
            </p>
          </div>
        </div>
        <section className='hidden my-4 lg:grid items-center justify-center'>
          <img className='w-16 h-16' src={LogoImage} alt='Logo' />
        </section>

        <section className='text-center mt-2 hidden lg:grid gap-4'>
          {user?.packs?.length > 0 && (
            <div className='outline bg-blue-500 main__bg outline-black outline-2 rounded animate-pulse'>
              <button
                className='font-semibold py-1'
                onClick={goToUnopenedPacks}
              >
                <div>
                  <span>{user.packs.length} Unopened Packs</span>
                </div>
              </button>
            </div>
          )}
          {user?.loginRecord?.collectedReward === false && (
            <div className='outline bg-blue-700 main__bg outline-black outline-2 rounded animate-pulse'>
              <Link to='/rewards'>
                <div className='font-semibold py-1'>
                  <span>Daily Reward Available</span>
                </div>
              </Link>
            </div>
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
          <ul className='text-center gridh-fit w-full text-xl'>
            <li className='w-full nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'>
              <Link className='w-full' to='/'>
                Home
              </Link>
            </li>
            <li className='w-full nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'>
              <Link className='w-full' to='/shop'>
                Shop
              </Link>
            </li>
            {!user.email && (
              <>
                <li className='w-full nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'>
                  <Link className='w-full' to='/Login'>
                    Login
                  </Link>
                </li>
                <li className='w-full nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'>
                  <Link className='w-full' to='/sign-up'>
                    Sign Up
                  </Link>
                </li>
              </>
            )}
            {user.email && (
              <li className='w-full nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'>
                <Link className='w-full' to='/album'>
                  Album
                </Link>
              </li>
            )}
            <li className='w-full nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'>
              <Link className='w-full' to='/cards'>
                Cards List
              </Link>
            </li>
            <li className='w-full nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'>
              <Link className='w-full' to='/invintory'>
                Invintory
              </Link>
            </li>
            <li className='w-full nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'>
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
        <nav className='absolute w-full left-0 top-24 py-2 px-4'>
          <div className='bg-black nav__bg p-2 outline outline-4 outline-red-500 rounded'>
            <ul className='text-center gridh-fit w-full text-xl'>
              <li className='w-full nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'>
                <Link className='w-full' to='/'>
                  Home
                </Link>
              </li>
              <li className='w-full nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'>
                <Link className='w-full' to='/shop'>
                  Shop
                </Link>
              </li>
              {!user.email && (
                <>
                  <li className='w-full nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'>
                    <Link className='w-full' to='/Login'>
                      Login
                    </Link>
                  </li>
                  <li className='w-full nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'>
                    <Link className='w-full' to='/sign-up'>
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
              {user.email && (
                <li className='w-full nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'>
                  <Link className='w-full' to='/album'>
                    Album
                  </Link>
                </li>
              )}
              <li className='w-full nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'>
                <Link className='w-full' to='/cards'>
                  Cards List
                </Link>
              </li>
              <li className='w-full nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'>
                <Link className='w-full' to='/invintory'>
                  Invintory
                </Link>
              </li>
              <li className='w-full nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'>
                <Link className='w-full' to='/rewards'>
                  Rewards
                </Link>
              </li>
              {user.email && (
                <button
                  className='w-full nav__bg hover:bg-blue-500 active:scale-95 grid py-2 outline-2 outline outline-black bg-blue-400 text-gray-800 font-semibold'
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
