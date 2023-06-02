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

  useEffect(() => {
    const startingArray = user.cards.slice(0, 10);
    setOpenPageCards(startingArray);
  }, []);

  const nextPageCards = () => {
    let newIndex = currentIndex + 10;
    const newArray = user.cards.slice(currentIndex, newIndex);
    setOpenPageCards(newArray);
    setCurrentIndex(prev => prev + 10);
  };

  const prevPageCards = () => {
    let newIndex = currentIndex - 10;
    const newArray = user.cards.slice(newIndex, currentIndex);
    setOpenPageCards(newArray);
    setCurrentIndex(prev => prev - 10);
  };

  console.log('openPageCards', openPageCards);

  return (
    <div className='bg-green-400 grid grid-cols-a1a'>
      <div onClick={prevPageCards} className='grid items-center px-2'>
        <BsFillArrowLeftSquareFill size={35} />
      </div>

      <section className='grid grid-rows-a11a bg-black px-2 gap-4'>
        <div className='flex justify-between px-1 items-center h-fit outline outline-1 outline-white text-blue-500'>
          <div>
            {currentIndex - 10 + 1} / {currentIndex}
          </div>
          <div>Total cards: 500</div>
        </div>
        <section className='grid grid-cols-5 gap-4'>
          <article className='grid h-full hover:scale-110 duration-500 cursor-pointer'>
            <Card cardData={openPageCards[0]} />
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
        <div className='h-fit outline outline-1 outline-white'>
          Total cards: 500
        </div>
      </section>

      <div onClick={nextPageCards} className='grid items-center px-2'>
        <BsFillArrowRightSquareFill size={35} />
      </div>
    </div>
  );
}

export default OpenAlbumPage;
