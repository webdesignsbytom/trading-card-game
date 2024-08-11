import React, { useContext, useEffect, useState } from 'react';
// Api
import client from '../../api/client';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Navbar from '../../components/nav/Navbar';
import LoadingSpinner from '../../components/utils/LoadingSpinner';
import Card from '../../components/card/Card';
import CardSearchAndSelectionContainer from '../../components/search/CardSearchAndSelectionContainer';
// Constants
import { CARDS_PAGE_URL, GET_ALL_CARDS_API } from '../../utils/Constants';

function CardsAvailablePage() {
  const { setActiveNav } = useContext(ToggleContext);

  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    setActiveNav(CARDS_PAGE_URL);
  }, []);

  useEffect(() => {
    client
      .get(GET_ALL_CARDS_API)
      .then((res) => {
        setAllCards(res.data.data.cards);
      })
      .catch((err) => {
        console.error('Unable to retrieve all cards', err);
      });
  }, []);

  const renderCards = (cards) => {
    return cards.map((card, index) => <Card key={index} cardData={card} />);
  };

  return (
    <div className='bg-black main__bg h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <section className='h-full overflow-hidden'>
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
        </section>
      </section>
    </div>
  );
}

export default CardsAvailablePage;
