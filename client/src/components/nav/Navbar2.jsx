import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import SmallScreenNavbar from './SmallScreenNavbar';
import LargeScreenNavbar from './LargeScreenNavbar';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Constants
import { HOME_PAGE_URL } from '../../utils/Constants';

function Navbar2() {
  const { user, setUser } = useContext(UserContext);
  const { toggleNavbar, toggleNavigation, activeNav, setActiveNav } =
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
    <nav className='grid h-full bg-nav-colour'>
      <div className='grid h-full'>
        <section className='grid lg:hidden'>
          <SmallScreenNavbar logoutUser={logoutUser} />
        </section>
        <section className='hidden lg:grid bg-pink-400'>
          <LargeScreenNavbar logoutUser={logoutUser} />
        </section>
      </div>
    </nav>
  );
}

export default Navbar2;
