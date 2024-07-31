import React, { useContext, useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import Card from '../../components/card/Card';
import LoadingSpinner from '../../components/utils/LoadingSpinner';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Utils
import client from '../../api/client';
// Constants
import { CARDS_PAGE_URL, GET_ALL_CARDS_API } from '../../utils/Constants';

function CardsAvailablePage() {
  const { setActiveNav } = useContext(ToggleContext);

  const [allCards, setAllCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [cardNotFound, setCardNotFound] = useState(false);
  const [foundCards, setFoundCards] = useState([]);

  useEffect(() => {
    setActiveNav(CARDS_PAGE_URL);

    client
      .get(GET_ALL_CARDS_API)
      .then((res) => {
        console.log('res', res.data.data.cards);
        setAllCards(res.data.data.cards);
      })
      .catch((err) => {
        console.error('Unable to retrieve all cards', err);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchForCard = () => {
    setCardNotFound(false);

    client
      .post('/mon-cards/card/search-cards-by-name', { cardName: searchQuery })
      .then((res) => {
        setFoundCards(res.data.data.cards);
      })
      .catch((err) => {
        console.error('Unable to find card', err);
        if (err.response.statusText === 'Not Found') {
          setCardNotFound(true);
        }
      });
  };

  const renderCards = (cards) => {
    return cards.map((card, index) => <Card key={index} cardData={card} />);
  };

  const cardOptions = ['Number', 'Rarity', 'Name A-Z', 'Pack Type', 'Card Type'];

  return (
    <div className='bg-black main__bg h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <section className='h-full overflow-hidden'>
          <main className='grid p-4 h-full overflow-y-scroll'>
            <section className='grid grid-rows-reg'>
              <div className='hidden lg:grid grid-cols-3 mb-4 outline outline-4 outline-red-700 rounded bg-blue-600 main__bg py-2 px-4'>
                <div className='flex justify-start items-center'>
                  <h3 className='text-sm md:text-xl font-semibold'>
                    Total Cards: {allCards.length}
                  </h3>
                </div>
                <div className='grid items-center justify-center p-1 w-full'>
                  <div className='grid grid-flow-col h-fit w-full'>
                    <input
                      className='rounded px-1 py-1 w-full'
                      type='text'
                      name='cardName'
                      id='cardName'
                      value={searchQuery}
                      onChange={handleSearchChange}
                      placeholder='Search the collection...'
                    />
                    <div
                      onClick={searchForCard}
                      className='h-full w-fit rounded grid cursor-pointer items-center justify-center active:scale-95 hover:bg-blue-700 bg-blue-400 px-4 right-0'
                    >
                      ?
                    </div>
                  </div>
                </div>
                <section className='grid justify-end items-center'>
                  <select
                    id='displayValue'
                    name='displayValue'
                    onChange={() => {}}
                    className='rounded p-1 h-fit'
                    required
                  >
                    {cardOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </section>
              </div>
              {/* Phone size */}
              <div className='grid lg:hidden grid-rows-reg mb-4 outline outline-4 outline-black bg-blue-600 main__bg py-2 px-2'>
                <div className='flex justify-center text-center w-full items-center'>
                  <h3 className='text-sm md:text-xl font-semibold'>
                    Total Cards: {allCards.length}
                  </h3>
                </div>
                <div className='flex justify-between'>
                  <div className='grid relative items-center justify-center p-1'>
                    <input
                      className='rounded px-1 py-1'
                      type='text'
                      name='cardName'
                      id='cardName'
                      value={searchQuery}
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
                      onChange={() => {}}
                      className='rounded px-2 h-full'
                      required
                    >
                      {cardOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </section>
                </div>
              </div>

              <section className='grid h-full'>
                {allCards.length <= 0 ? (
                  <div className='grid w-full justify-center items-center text-white text-3xl text-center'>
                    <LoadingSpinner />
                  </div>
                ) : (
                  <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-y-4 gap-x-3 p-4 sm:p-0'>
                    {renderCards(foundCards.length > 0 ? foundCards : allCards)}
                  </div>
                )}
              </section>
            </section>
          </main>
        </section>
      </section>
    </div>
  );
}

export default CardsAvailablePage;
