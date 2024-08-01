import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Api
import client from '../../api/client';
// Context
import { UserContext } from '../../context/UserContext';
import { CardContext } from '../../context/CardContext';
// Images
import AlbumCoverOne from '../../assets/images/backgrounds/mon_cards_album_cover_cards_and_monsters_one.png';

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

  return (
    <div className='grid h-full w-full overflow-hidden rounded p-6 lg:p-12'>
      <section
        className={`grid relative bg-white border-solid border-main-border border-8 rounded-lg overflow-hidden`}
        style={{
          backgroundImage: `url(${AlbumCoverOne})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <section className='absolute bottom-8 left-1/2 transform -translate-x-1/2 '>
          <button
            onClick={openAlbum}
            className='main__bg outline outline-2 text-3xl lg:text-7xl hover:bg-red-300 shadow-[inset_-1px_18px_35px_22px_#00000024] hover:shadow-[inset_-1px_18px_35px_22px_#00000024] active:scale-95 outline-black rounded-xl px-10 py-2 text__stroke'
          >
            <span className='font-fantasy font-extrabold text-main-colour'>
              OPEN
            </span>
          </button>
        </section>
      </section>
    </div>
  );
}

export default ClosedAlbumPage;
