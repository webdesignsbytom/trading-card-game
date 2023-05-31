import React, { useEffect, useState } from 'react';
// Components
import Card from '../card/Card';

function OpenAlbumPage({ usersCardCollectionArray }) {
  const [openPageCards, setOpenPageCards] = useState([]);

  useEffect(() => {
    const startingArray = usersCardCollectionArray.slice(0, 9);
    setOpenPageCards(startingArray);
  }, []);

  console.log('openPageCards', openPageCards);
  
  return (
    <div className='bg-green-400 grid'>
      <section className='grid bg-black'>
        <Card />
      </section>
    </div>
  );
}

export default OpenAlbumPage;
