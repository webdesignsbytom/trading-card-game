import React, { useState } from 'react';
// Api
import client from '../../api/client';
// Constants
import { cardOrderOptions } from '../../utils/cards/CardGameConstants';

function CardSearchAndSelectionContainer({ cardOptions, allCards }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [cardNotFound, setCardNotFound] = useState(false);
  const [foundCards, setFoundCards] = useState([]);

  // Return an array of cards from server

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

  return (
    <section className='grid w-full h-fit overflow-hidden border-4 border-white border-solid rounded shadow-2xl bg-main-colour main__bg'>
      <div className='grid grid-cols-a1a px-2 py-2'>
        <section className='grid items-center'>
          <h3 className='text-sm md:text-2xl font-semibold'>
            Total Cards: <span className='text-yellow-400'>{allCards.length}</span>
          </h3>
        </section>
        <section className='grid items-center justify-center p-1 w-full'>
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
        </section>
        <section className='grid justify-end items-center'>
          <select
            id='displayValue'
            name='displayValue'
            onChange={() => {}}
            className='rounded p-1 h-fit'
            required
          >
            {cardOrderOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </section>
      </div>
    </section>
  );
}

export default CardSearchAndSelectionContainer;
