import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// Context
import { UserContext } from '../../context/UserContext';
// Images
import AlbumCoverOne from '../../assets/images/backgrounds/mon_cards_album_cover_cards_and_monsters_one.png';
// Components
import FantasyButton from '../utils/FantasyButton';
// Constants
import { REGISTER_API } from '../../utils/Constants';

function ClosedAlbumPage({ openAlbum }) {
  const { user } = useContext(UserContext);

  let navigate = useNavigate();

  const goToSignUp = () => {
    navigate(REGISTER_API, { replace: true });
  };

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
          {user?.id ? (
            <FantasyButton onClick={openAlbum} xl={true}>
              OPEN
            </FantasyButton>
          ) : (
            <FantasyButton onClick={goToSignUp} xl={true}>
              SIGN <span className='text-red-600'>UP</span>
            </FantasyButton>
          )}
        </section>
      </section>
    </div>
  );
}

export default ClosedAlbumPage;
