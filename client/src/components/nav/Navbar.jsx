import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import SmallScreenNavbar from './SmallScreenNavbar';
import LargeScreenNavbar from './LargeScreenNavbar';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Constants
import { HOME_PAGE_URL } from '../../utils/Constants';

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const { toggleNavbar, setActiveNav } =
    useContext(ToggleContext);

  const navigate = useNavigate();

  const logoutUser = (event) => {
    event.preventDefault();
    setActiveNav(HOME_PAGE_URL);
    toggleNavbar();
    setUser({});
    localStorage.removeItem(process.env.REACT_APP_USER_TOKEN);
    navigate(HOME_PAGE_URL, { replace: true });
  };

  return (
    <nav className='grid h-full w-full font-poppins'>
      <div className='grid h-full nav__bg bg-nav-colour'>
        <section className='relative grid lg:hidden shadow-[inset_-1px_18px_35px_22px_#00000024] border-2 border-main-border border-solid'>
          <SmallScreenNavbar logoutUser={logoutUser} />
        </section>
        <section className='hidden lg:grid shadow-[inset_-1px_43px_35px_48px_#00000024] border-2 border-main-border border-solid'>
          <LargeScreenNavbar logoutUser={logoutUser} />
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
