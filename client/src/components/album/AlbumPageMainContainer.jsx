import React, { useContext, useState } from 'react';
// Context
import { useUser } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Components
import ClosedAlbumPage from '../../components/collection/ClosedAlbumPage';
import OpenAlbumPage from '../../components/collection/OpenAlbumPage';

function AlbumPageMainContainer() {
  const { user } = useUser();
  const { viewCard } = useContext(ToggleContext);

  const [albumOpen, setAlbumOpen] = useState(false);

  const handleOpenAlbum = () => {
    setAlbumOpen(!albumOpen);
  };

  return (
    <main className='grid h-full w-full overflow-hidden'>
      {/* Closed album cover */}
      {!albumOpen && !viewCard && (
        <ClosedAlbumPage handleOpenAlbum={handleOpenAlbum} />
      )}

      {/* Open album */}
      {albumOpen && !viewCard && <OpenAlbumPage />}
    </main>
  );
}

export default AlbumPageMainContainer;
