import React, { useContext, useEffect, useState } from 'react';
// Components
import ClosedAlbumPage from '../../components/collection/ClosedAlbumPage';
import OpenAlbumPage from '../../components/collection/OpenAlbumPage';
import CardOverview from '../../components/card/CardOverview';
import Navbar from '../../components/nav/Navbar';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Constants
import { ALBUM_PAGE_URL } from '../../utils/Constants';

function AlbumPage() {
  const { user } = useContext(UserContext);
  const { viewCard, setActiveNav } = useContext(ToggleContext);

  const [albumOpen, setAlbumOpen] = useState(false);

  useEffect(() => {
    setActiveNav(ALBUM_PAGE_URL);
  }, []);

  const openAlbum = () => {
    setAlbumOpen(!albumOpen);
  };

  return (
    <div className='h-screen grid overflow-hidden'>
      <div className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />

        <main className='bg-white grid h-full w-full overflow-hidden main__bg'>
          <div className='grid h-full w-full overflow-hidden'>
            {/* Closed album cover */}
            {!albumOpen && !viewCard && (
              <ClosedAlbumPage openAlbum={openAlbum} />
            )}

            {/* Open album */}
            {albumOpen && !viewCard && (
              <OpenAlbumPage />
            )}

            {/* Single card */}
            {viewCard && <CardOverview />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default AlbumPage;
