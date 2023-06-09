import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';

function OpenPacksPage() {
  const { user } = useContext(UserContext);
  const { setActiveNav } = useContext(ToggleContext)

  useEffect(() => {
    setActiveNav('/open-packs')
  }, [])

  return (
    <div className='h-screen bg-red-100 grid'>
      <section className='bg-blue-500 grid h-full overflow-hidden grid-cols-reg'>
        <Navbar />
        <main className='grid items-center justify-center'>
          <h2>Unopened: {user.unopenedPacks.length}</h2>
          <Link to='/shop'>Buy New Packs</Link>
        </main>
      </section>
    </div>
  );
}

export default OpenPacksPage;
