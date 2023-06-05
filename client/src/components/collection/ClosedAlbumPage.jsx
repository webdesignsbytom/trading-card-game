import React, { useContext } from 'react';
// Context
import { UserContext } from '../../context/UserContext';

function ClosedAlbumPage({ openAlbum }) {
  
  const { user } = useContext(UserContext)

  return (
    <section className='bg-green-400 grid grid-rows-2'>
      <section className='grid justify-center items-center'>
        <article>
          <h4 className='text-3xl uppercase font-bold'>{user?.profile?.username}'S COLLECTION</h4>
        </article>
      </section>
      <section className='grid items-center justify-center'>
        <button
          onClick={openAlbum}
          className='bg-blue-500 main__bg outline outline-2 outline-black rounded-xl px-4 py-2'
        >
          OPEN
        </button>
      </section>
    </section>
  );
}

export default ClosedAlbumPage;
