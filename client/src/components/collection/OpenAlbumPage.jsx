import React, { useContext, useEffect, useState } from 'react';
// Components
import Card from '../card/Card';
// Context
import { UserContext } from '../../context/UserContext';
import { CardContext } from '../../context/CardContext';

import LoadingSpinner from '../utils/LoadingSpinner';

function OpenAlbumPage() {
  const { user } = useContext(UserContext);
  const { userCardsArray, setUserCardsArray } = useContext(CardContext);

  const [openPageCards, setOpenPageCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(10);

  console.log('openPageCards', openPageCards);

  useEffect(() => {}, []);

  const handleTypeChange = () => {};

  return (
    <div className='bg-black main__bg h-full overflow-hidden grid'>
      <section className='grid grid-rows-reg h-full px-2 gap-4 overflow-hidden'>
        {/* Top bar - search bar */}
        <div className='flex justify-between px-1 items-center text-blue-500'>
          <div className='grid items-center justify-center'>
            <span>Total cards: {user?.cards.length}</span>
          </div>
          <div className='grid items-center justify-center p-1'>
            <input
              className='rounded px-1'
              type='text'
              name='searchAlbum'
              id='searchAlbum'
              placeholder='Search your collection...'
            />
          </div>
          <section className='grid justify-end'>
            <select
              id='country'
              name='country'
              onChange={handleTypeChange}
              className='country__inputs rounded px-2'
              required
            >
              <option defaultValue='Number'>Number</option>
              <option value='Rarity'>Rarity</option>
              <option value='Name A-Z'>Name A-Z</option>
              <option value='Pack Type'>Pack Type</option>
              <option value='Card Type'>Card Type</option>
            </select>
          </section>
        </div>

        <div className='grid h-full overflow-hidden'>
          <div className='grid h-full overflow-scroll overflow-x-hidden pr-1'>
            {userCardsArray.length <= 0 && (
              <div className='grid w-full justify-center items-center text-white text-3xl text-center'>
                <span>LOADING...</span>
                <LoadingSpinner />
              </div>
            )}
            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-1 p-4 sm:p-1'>
              {userCardsArray.map((card, index) => {
                console.log('AAAAA', card);
                return <Card key={index} cardData={card} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OpenAlbumPage;
