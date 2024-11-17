import React from 'react';
// Components
import SmallScreenNavbar from './SmallScreenNavbar';
import LargeScreenNavbar from './LargeScreenNavbar';
// Context
import { useUser } from '../../context/UserContext';
// Constants
import { HOME_PAGE_URL } from '../../utils/Constants';
// Hooks
import useNavigateToPage from '../../hooks/useNavigateToPage';

function Navbar() {
  const { setUser } = useUser();

  const navigateToPage = useNavigateToPage();

  const handleLogout = (event) => {
    event.preventDefault();
    setUser({});
    localStorage.removeItem(process.env.REACT_APP_USER_TOKEN);
    navigateToPage(HOME_PAGE_URL, { replace: true });
  };

  return (
    <nav className='grid h-full w-full font-poppins'>
      <div className='grid h-full'>
        <section className='relative grid lg:hidden styled-border mx-1 mt-1'>
          <SmallScreenNavbar logoutUser={handleLogout} />
        </section>
        
        <section className='hidden lg:grid shadow-[inset_-1px_43px_35px_48px_#00000024] styled-border !rounded-none'>
          <LargeScreenNavbar logoutUser={handleLogout} />
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
