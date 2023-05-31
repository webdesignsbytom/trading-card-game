import React from 'react';

function ClosedAlbumPage({ openAlbum }) {
  return (
    <div>
      <button
        onClick={openAlbum}
        className='outline outline-2 outline-black rounded-xl px-4 py-2'
      >
        OPEN
      </button>
    </div>
  );
}

export default ClosedAlbumPage;
