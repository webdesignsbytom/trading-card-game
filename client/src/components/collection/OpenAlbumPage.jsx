import React, { useContext, useEffect, useState } from 'react';
// Components
import Card from '../card/Card';
// Context
import { UserContext } from '../../context/UserContext';
import { CardContext } from '../../context/CardContext';
// Utils
import LoadingSpinner from '../utils/LoadingSpinner';
import client from '../../api/client';

function OpenAlbumPage() {
  const { user } = useContext(UserContext);
  const { userCardsArray, setUserCardsArray } = useContext(CardContext);

  const [openPageCards, setOpenPageCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(10);

  const [searchQuery, setSearchQuery] = useState({ cardName: '' });
  const [cardNotFound, setCardNotFound] = useState(false);
  const [foundCards, setFoundCards] = useState([]);

  console.log('openPageCards', openPageCards);

  useEffect(() => {}, []);

  const handleTypeChange = () => {};

  const handleSearchChange = (event) => {
    const { value } = event.target;

    setSearchQuery({
      ...setSearchQuery,
      username: value,
    });
  };

  const searchForCard = () => {
    console.log('xxx');
    setCardNotFound(false);

    client
      .get(`/con-cards/card/search-cards-by-name`, searchQuery.cardName)
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
    <div className='bg-black main__bg h-full overflow-hidden grid'>
      <section className='grid grid-rows-reg h-full px-2 gap-4 overflow-hidden'>
        {/* Top bar - search bar */}
        <div className='grid lg:flex lg:justify-between px-1 items-center text-blue-500 w-full'>
          <div className='grid items-center justify-center'>
            <span>Total cards: {user?.cards.length}</span>
          </div>
          <div className='grid p-1 w-full'>
            <div className='grid relative h-fit w-full'>
              <input
                className='rounded px-1 py-1 w-full'
                type='text'
                name='searchCards'
                id='searchCards'
                onChange={handleSearchChange}
                placeholder='Search your collection...'
              />
              <div
                onClick={searchForCard}
                className='absolute grid text-black items-center justify-center h-full w-fit rounded active:scale-95 hover:bg-blue-700 bg-blue-400 px-4 right-0'
              >
                ?
              </div>
            </div>
          </div>

          <section className='grid px-1 lg:justify-end'>
            <select
              id='displayValue'
              name='displayValue'
              onChange={handleTypeChange}
              className='rounded px-2'
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
                <LoadingSpinner />
              </div>
            )}
            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 lg:grid-rows-2 gap-y-4 gap-x-3 p-4 sm:p-1'>
              {userCardsArray.map((card, index) => {
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
