import React, { useContext, useEffect, useState } from 'react';
// Components
import Card from '../card/Card';
// Context
import { UserContext } from '../../context/UserContext';
import { CardContext } from '../../context/CardContext';
// Icons
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';

function OpenAlbumPage() {
  const { user } = useContext(UserContext);
  const { userCardsArray, setUserCardsArray } = useContext(CardContext);

  const [openPageCards, setOpenPageCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(10);

  console.log('openPageCards', openPageCards);

  useEffect(() => {}, []);

  const nextPageCards = () => {};

  const prevPageCards = () => {};

  return (
    <div className='bg-black main__bg h-full overflow-hidden grid'>
      <section className='grid grid-rows-reg h-full px-2 gap-4 overflow-hidden'>
        {/* Top bar - search bar */}
        <div className='flex justify-between px-1 items-center text-blue-500'>
          <div className='grid items-center justify-center'>
            {currentIndex - 10 + 1} / {currentIndex}
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
          <div className='grid items-center justify-center'>
            <span>Total cards: 500</span>
          </div>
        </div>

        <div className='grid h-full overflow-hidden'>
          <div className='grid h-full overflow-scroll overflow-x-hidden pr-1'>
            <div className='grid grid-cols-3 lg:grid-cols-5 gap-1 p-1'>
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
