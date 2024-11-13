import React, { useEffect, useState } from 'react'
// Api
import client from '../../api/client';
// Constants
import { GET_ALL_CARDS_API } from '../../utils/Constants';
// Components
import CardSearchAndSelectionContainer from '../search/CardSearchAndSelectionContainer'
import Card from '../card/Card';
import LoadingSpinner from '../utils/LoadingSpinner';

function CardsPageMainContainer() {
    const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    client
      .get(GET_ALL_CARDS_API)
      .then((res) => {
        setAllCards(res.data.cards);
      })
      .catch((err) => {
        console.error('Unable to retrieve all cards', err);
      });
  }, []);

  const renderCards = (cards) => {
    return cards.map((card, index) => <Card key={index} cardData={card} />);
  };

  return (
    <main className='grid p-4 h-full overflow-y-scroll'>
    <section className='grid grid-rows-reg gap-2'>
      {/* Search */}
      <CardSearchAndSelectionContainer allCards={allCards} />

      {/* Main cards display */}
      <section className='grid h-full'>
        {allCards.length <= 0 ? (
          <div className='grid w-full justify-center items-center text-white text-3xl text-center'>
            <LoadingSpinner />
          </div>
        ) : (
          <div className='grid grid_cols_card gap-y-2 gap-x-2'>
            {renderCards(allCards)}
          </div>
        )}
      </section>
    </section>
  </main>
  )
}

export default CardsPageMainContainer