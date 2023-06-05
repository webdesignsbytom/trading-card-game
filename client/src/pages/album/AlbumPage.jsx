import React, { useContext, useState } from 'react';
// Components
import ClosedAlbumPage from '../../components/collection/ClosedAlbumPage';
import OpenAlbumPage from '../../components/collection/OpenAlbumPage';
import CardOverview from '../../components/card/CardOverview';
import Navbar from '../../components/nav/Navbar';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';

function AlbumPage() {
  const { user } = useContext(UserContext);
  const { toggleCardData, viewCard } = useContext(ToggleContext);

  const [albumOpen, setAlbumOpen] = useState(false);

  const [usersCardCollectionArray, setUsersCardCollectionArray] = useState(
    user.cards
  );

  console.log('user', user);

  const openAlbum = () => {
    setAlbumOpen(!albumOpen);
  };

  return (
    <div className='bg-red-100 h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <section className='bg-red-600 p-4'>
          <div className='bg-blue-200 grid h-full'>
            <main className='bg-blue-400 grid'>
              {!albumOpen && !viewCard && (
                <ClosedAlbumPage openAlbum={openAlbum} />
              )}
              {albumOpen && !viewCard && (
                <OpenAlbumPage
                  usersCardCollectionArray={usersCardCollectionArray}
                />
              )}
              {viewCard && <CardOverview />}
            </main>
          </div>
        </section>
      </section>
    </div>
  );
}

export default AlbumPage;
