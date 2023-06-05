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
  const { userCardsArray, setUserCardsArray } = useContext(CardContext)

  const [openPageCards, setOpenPageCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(10);

  console.log('openPageCards', openPageCards);
  
  useEffect(() => {
  }, []);

  const nextPageCards = () => {

  };

  const prevPageCards = () => {

  };

  return (
    <div className='bg-green-400 grid grid-cols-a1a'>
      <div onClick={prevPageCards} className='grid items-center px-2'>
        <BsFillArrowLeftSquareFill size={25} />
      </div>

      <section className='grid grid-rows-reg px-2 gap-4'>
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

        <div className='grid h-full grid-rows-2 gap-4 py-4'>
          <section className='grid grid-cols-5 gap-4'>
            <article className='grid h-full hover:scale-110 duration-500 cursor-pointer'>
              <Card cardData={userCardsArray[0]} />
            </article>
            <article className='grid h-full hover:scale-110 duration-500 cursor-pointer'>
              <Card cardData={userCardsArray[1]} />
            </article>
            <article className='grid h-full hover:scale-110 duration-500 cursor-pointer'>
              <Card cardData={userCardsArray[2]} />
            </article>
            <article className='grid h-full hover:scale-110 duration-500 cursor-pointer'>
              <Card cardData={userCardsArray[3]} />
            </article>
            <article className='grid h-full hover:scale-110 duration-500 cursor-pointer'>
              <Card cardData={userCardsArray[4]} />
            </article>
          </section>

          <section className='grid grid-cols-5 gap-4'>
            <article className='grid h-full hover:scale-110 duration-500 cursor-pointer'>
              <Card cardData={userCardsArray[5]} />
            </article>
            <article className='grid h-full hover:scale-110 duration-500 cursor-pointer'>
              <Card cardData={userCardsArray[6]} />
            </article>
            <article className='grid h-full hover:scale-110 duration-500 cursor-pointer'>
              <Card cardData={userCardsArray[7]} />
            </article>
            <article className='grid h-full hover:scale-110 duration-500 cursor-pointer'>
              <Card cardData={userCardsArray[8]} />
            </article>
            <article className='grid h-full hover:scale-110 duration-500 cursor-pointer'>
              <Card cardData={userCardsArray[9]} />
            </article>
          </section>
        </div>
      </section>

      <div onClick={nextPageCards} className='grid items-center px-2'>
        <BsFillArrowRightSquareFill size={25} />
      </div>
    </div>
  );
}

export default OpenAlbumPage;
