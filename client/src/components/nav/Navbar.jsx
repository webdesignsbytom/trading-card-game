import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';

function Navbar() {
  const { user } = useContext(UserContext);
  const { toggleOpenPackets } = useContext(ToggleContext)
  
  let navigate = useNavigate();

  const goToUnopenedPacks = () => {
    toggleOpenPackets();

    navigate('/invintory', { replace: true });
  }

  return (
    <nav className='bg-red-300 grid p-2'>
      <section className='text-center'>
        <p>
          <span>Con-Cards</span>
        </p>
        <p className='text-sm'>
          <span>The Torie Trading Card Game</span>
        </p>
      </section>

      <section className='text-center'>
        {user?.packs?.length > 0 && (
          <button onClick={goToUnopenedPacks}>
            <div>{user.packs.length} Unopened Pack</div>
          </button>
        )}
      </section>
      {/* Navigation */}
      <section>
        <ul className='text-center'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/shop'>Shop</Link>
          </li>
          <li>
            <Link to='/Login'>Login</Link>
          </li>
          <li>
            <Link to='/sign-up'>Sign Up</Link>
          </li>
          <li>
            <Link to='/album'>Album</Link>
          </li>
          <li>
            <Link to='/cards'>Cards List</Link>
          </li>
          <li>
            <Link to='/invintory'>Invintory</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default Navbar;
