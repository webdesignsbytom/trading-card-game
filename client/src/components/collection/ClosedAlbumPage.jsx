import React from 'react';
// Context
import { useUser } from '../../context/UserContext';
// Images
import AlbumCoverOne from '../../assets/images/backgrounds/mon_cards_album_cover_cards_and_monsters_one.png';
// Components
// Constants
import { SIGN_UP_PAGE_URL } from '../../utils/Constants';
// Hooks
import useNavigateToPage from '../../hooks/useNavigateToPage';
import FantasyButton from '../utils/FantasyButton';

function ClosedAlbumPage({ handleOpenAlbum }) {
  const { user } = useUser();

  const navigateToPage = useNavigateToPage();

  const navigateToSignUp = () => {
    navigateToPage(SIGN_UP_PAGE_URL);
  };

  return (
    <div className='grid h-full w-full overflow-hidden rounded p-4'>
      <section
        className={`grid relative styled-border !border-4 rounded-lg overflow-hidden`}
        style={{
          backgroundImage: `url(${AlbumCoverOne})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <section className='absolute bottom-8 left-1/2 transform -translate-x-1/2 '>
          {user?.id ? (
            <FantasyButton
              text='Open Album'
              onClick={handleOpenAlbum}
              type='default'
              ariaLabel='Default Action'
            />
          ) : (
            <FantasyButton
              text='Sign Up Now'
              onClick={navigateToSignUp}
              type='default'
              ariaLabel='Default Action'
            />
          )}
        </section>
      </section>
    </div>
  );
}

export default ClosedAlbumPage;
