import React, { useState } from 'react';
import ClosedAlbumPage from '../../components/collection/ClosedAlbumPage';
import OpenAlbumPage from '../../components/collection/OpenAlbumPage';

function CollectionPage() {
  const [albumOpen, setAlbumOpen] = useState(false);
  const [usersCardCollectionArray, setUsersCardCollectionArray] = useState([]);

  const openAlbum = () => {
    setAlbumOpen(!albumOpen);
  };

  return (
    <div className='bg-red-200 h-screen'>
      <section className='bg-blue-500 grid h-full overflow-hidden grid-cols-c8'>
        <section className='bg-red-300'>nav</section>
        <section className='bg-red-600 p-4'>
          <div className='bg-blue-200 grid h-full'>
            <main className='bg-blue-400 grid'>
              {!albumOpen ? (
                <ClosedAlbumPage openAlbum={openAlbum} />
              ) : (
                <OpenAlbumPage usersCardCollectionArray={usersCardCollectionArray} />
              )}
            </main>
          </div>
        </section>
      </section>
    </div>
  );
}

export default CollectionPage;
