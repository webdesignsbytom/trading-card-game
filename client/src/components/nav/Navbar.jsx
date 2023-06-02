import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
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

      {/* Navigation */}
      <section>
        <ul className='text-center'>
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
