import React, { useContext, useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import Card from '../../components/card/Card';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Utils
import client from '../../utils/client';
import LoadingSpinner from '../../components/utils/LoadingSpinner';

function CardsAvailablePage() {
  const { setActiveNav } = useContext(ToggleContext);

  const [allCardsArray, setAllCardsArray] = useState([]);
  const [searchQuery, setSearchQuery] = useState({ cardName: '' });
  const [cardNotFound, setCardNotFound] = useState(false);
  const [foundCards, setFoundCards] = useState([]);

  useEffect(() => {
    setActiveNav('/cards');
    console.log('useEFFECT');
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

  const handleSearchChange = (event) => {
    const { value } = event.target;

    setSearchQuery({
      ...setSearchQuery,
      cardName: value,
    });
  };

  const searchForCard = () => {
    console.log('xxx', searchQuery);
    setCardNotFound(false);

    client
      .post(`/con-cards/card/search-cards-by-name`, searchQuery)
      .then((res) => {
        console.log('res', res.data.data);
        setFoundCards(res.data.data.cards);
      })
      .catch((err) => {
        console.error('Unable to find card', err);
        if (err.response.statusText === 'Not Found') {
          setCardNotFound(true);
        }
      });
  };

  return (
    <div className='bg-black main__bg h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <section className='h-full overflow-hidden'>
          <main className='grid p-4 h-full overflow-y-scroll'>
            <section className='grid grid-rows-reg'>
              <div className='hidden lg:grid grid-cols-3 mb-4 outline outline-4 outline-black bg-blue-600 main__bg py-2 px-4'>
                <div className='flex justify-start items-center'>
                  <h3 className='text-sm md:text-xl font-semibold'>
                    Total Cards: {allCardsArray?.length}
                  </h3>
                </div>
                <div className='grid items-center justify-center p-1 w-full'>
                  <div className='grid relative h-fit w-full'>
                    <input
                      className='rounded px-1 py-1 w-full'
                      type='text'
                      name='searchCards'
                      id='searchCards'
                      onChange={handleSearchChange}
                      placeholder='Search the collection...'
                    />
                    <div
                      onClick={searchForCard}
                      className='absolute h-full w-fit rounded active:scale-95 hover:bg-blue-700 bg-blue-400 px-4 right-0'
                    >
                      ?
                    </div>
                  </div>
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
              {/* phone size */}
              <div className='grid lg:hidden grid-rows-reg mb-4 outline outline-4 outline-black bg-blue-600 main__bg py-2 px-2'>
                <div className='flex justify-center text-center w-full items-center'>
                  <h3 className='text-sm md:text-xl font-semibold'>
                    Total Cards: {allCardsArray?.length}
                  </h3>
                </div>
                <div className='flex justify-between'>
                  <div className='grid relative items-center justify-center p-1'>
                    <input
                      className='rounded px-1 py-1'
                      type='text'
                      name='searchCards'
                      id='searchCards'
                      onChange={handleSearchChange}
                      placeholder='Search the collection...'
                    />
                    <div
                      onClick={searchForCard}
                      className='absolute h-fit w-fit rounded active:scale-95 hover:bg-blue-700 bg-blue-400 px-2 right-0'
                    >
                      ?
                    </div>
                  </div>
                  <section className='grid justify-end py-1'>
                    <select
                      id='country'
                      name='country'
                      onChange={handleTypeChange}
                      className='rounded px-2 h-full'
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
              </div>

              <section className='grid h-full'>
                {allCardsArray.length <= 0 && (
                  <div className='grid w-full justify-center items-center text-white text-3xl text-center'>
                    <span>LOADING...</span>
                    <LoadingSpinner />
                  </div>
                )}
                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-y-4 gap-x-3 p-4 sm:p-0'>
                  {foundCards.map((card, index) => {
                    return <Card key={index} cardData={card} />;
                  })}

                  {allCardsArray.map((card, index) => {
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
