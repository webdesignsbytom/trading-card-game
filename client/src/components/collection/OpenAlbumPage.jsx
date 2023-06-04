import React, { useContext, useEffect, useState } from 'react';
// Components
import Card from '../card/Card';
// Context
import { UserContext } from '../../context/UserContext';
// Icons
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';

function OpenAlbumPage() {
  const { user } = useContext(UserContext);
  const [openPageCards, setOpenPageCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(10);

  console.log('openPageCards', openPageCards);
  
  useEffect(() => {
    const newCardsList = JSON.parse(user.cards)
    console.log('newcardslist', newCardsList);
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
              <Card cardData={openPageCards[1]} />
            </article>
            <article className='grid h-full hover:scale-110 duration-500 cursor-pointer'>
              <Card cardData={openPageCards[1]} />
            </article>
            <article className='grid h-full hover:scale-110 duration-500 cursor-pointer'>
              <Card cardData={openPageCards[2]} />
            </article>
            <article className='grid h-full hover:scale-110 duration-500 cursor-pointer'>
              <Card cardData={openPageCards[3]} />
            </article>
            <article className='grid h-full hover:scale-110 duration-500 cursor-pointer'>
              <Card cardData={openPageCards[4]} />
            </article>
          </section>

          <section className='grid grid-cols-5 gap-4'>
            <article className='grid h-full hover:scale-110 duration-500 cursor-pointer'>
              <Card cardData={openPageCards[5]} />
            </article>
            <article className='grid h-full hover:scale-110 duration-500 cursor-pointer'>
              <Card cardData={openPageCards[6]} />
            </article>
            <article className='grid h-full hover:scale-110 duration-500 cursor-pointer'>
              <Card cardData={openPageCards[7]} />
            </article>
            <article className='grid h-full hover:scale-110 duration-500 cursor-pointer'>
              <Card cardData={openPageCards[8]} />
            </article>
            <article className='grid h-full hover:scale-110 duration-500 cursor-pointer'>
              <Card cardData={openPageCards[9]} />
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
