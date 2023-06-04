import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { UserContext } from '../../context/UserContext';

function OpenPacksPage() {
  const { user } = useContext(UserContext);

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
