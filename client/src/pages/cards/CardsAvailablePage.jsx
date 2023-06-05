import React, { useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import client from '../../utils/client';
import Card from '../../components/card/Card';
import LoadingSpinner from '../../components/utils/LoadingSpinner';

function CardsAvailablePage() {
  const [allCardsArray, setAllCardsArray] = useState([]);

  console.log('allCardsArray', allCardsArray);

  useEffect(() => {
    client
      .get(`/con-cards/all-cards`)
      .then((res) => {
        setAllCardsArray(res.data.data.cards);
      })
      .catch((err) => {
        console.error('Unable to retrieve all cards', err);
      });
  }, []);

  const handleTypeChange = () => {};

  return (
    <div className='bg-black main__bg h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <section className='h-full overflow-hidden'>
          <main className='grid p-4 h-full overflow-y-scroll'>
            <section className='grid grid-rows-reg'>
              <div className='grid grid-cols-3 mb-4 outline outline-4 outline-black bg-blue-600 main__bg py-2 px-4'>
                <div className='flex justify-start items-center'>
                  <h3 className='text-sm md:text-xl font-semibold'>Total Cards: {allCardsArray?.length}</h3>
                </div>
                <div className='grid items-center justify-center p-1'>
                  <input
                    className='rounded px-1 py-1'
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

              <section className='grid h-full'>
                {allCardsArray.length <= 0 && (
                  <div className='grid w-full justify-center items-center text-white text-3xl text-center'>
                    <span>LOADING...</span>
                    <LoadingSpinner />
                  </div>
                )}
                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-1 p-4 sm:p-0'>
                  {allCardsArray.map((card, index) => {
                    console.log('AAAAA', card);
                    return <Card key={index} cardData={card} />;
                  })}
                </div>
              </section>
            </section>
          </main>
        </section>
      </section>
    </div>
  );
}

export default CardsAvailablePage;
