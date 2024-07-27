import React, { useContext, useEffect } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
import { CardContext } from '../../context/CardContext';
import client from '../../api/client';
import { useNavigate } from 'react-router-dom';

function ClosedAlbumPage({ openAlbum }) {
  const { user } = useContext(UserContext);
  const { userCardsArray, setUserCardsArray } = useContext(CardContext);

  console.log('userCardsArray', userCardsArray);
  let navigate = useNavigate();

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
  }, []);

  const goToDecks = () => {
    navigate('/user/decks', { replace: true });
  };

  return (
    <section className='album__cover grid grid-rows-rev'>
      <section className='grid justify-center items-center lg:px-8'>
        <article className='outline-black outline-4 outline p-4 bg-white main__bg rounded-xl'>
          <h2 className='grid text-3xl uppercase font-bold'>
            <span className='text-center text-4xl lg:text-8xl font-extrabold text__stroke__blue font-gasoek tracking-wide'>
              {user?.profile?.username}'S
            </span>
            <span className='text-center text-4xl lg:text-8xl font-extrabold text__stroke font-gasoek tracking-wide'>
              <span className='text-blue-600'>
                CON <span className='text-red-600'>CARDS</span>
              </span>
            </span>
            <span className='text-center text-4xl lg:text-8xl font-extrabold text__stroke__red font-gasoek tracking-wide'>
              <span className=''>ALBUM</span>
            </span>
          </h2>
        </article>
      </section>
      <section className='grid items-center justify-center mb-10 -mt-10'>
        <section className='grid'>
          <div>
            <button
              onClick={openAlbum}
              className='bg-blue-500 main__bg outline outline-2 text-3xl lg:text-6xl active:scale-105 hover:bg-blue-600 font-bold outline-black rounded-xl px-8 py-2'
            >
              <span>OPEN</span>
            </button>
          </div>
        </section>
      </section>
    </section>
  );
}

export default ClosedAlbumPage;
