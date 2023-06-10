import React, { useContext, useEffect } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
import { CardContext } from '../../context/CardContext';
import client from '../../utils/client';

function ClosedAlbumPage({ openAlbum }) {
  const { user } = useContext(UserContext)
  const { userCardsArray, setUserCardsArray } = useContext(CardContext)

  console.log('userCardsArray', userCardsArray);

  useEffect(() => {
    console.log('LOADING');
    client
    .get(`/users/user/userId/${user.id}/all-cards`)
    .then((res) => {
      console.log('res', res.data);
      setUserCardsArray(res.data.data.cards);
    })
    .catch((err) => {
      console.error('Unable to get user cards', err);
    });
  }, [])

  return (
    <section className='bg-green-800 main__bg grid grid-rows-2'>
      <section className='grid justify-center items-center'>
        <article className='outline-black outline-4 outline p-4 bg-white main__bg'>
          <h4 className='text-3xl uppercase font-bold'>{user?.profile?.username}'S COLLECTION</h4>
        </article>
      </section>
      <section className='grid items-center justify-center'>
        <button
          onClick={openAlbum}
          className='bg-blue-500 main__bg outline outline-2 text-3xl active:scale-105 hover:bg-blue-600 font-bold outline-black rounded-xl px-4 py-2'
        >
          OPEN
        </button>
      </section>
    </section>
  );
}

export default ClosedAlbumPage;
