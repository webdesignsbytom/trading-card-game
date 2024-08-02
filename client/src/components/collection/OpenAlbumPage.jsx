import React, { useContext, useEffect, useState } from 'react';
// Components
import CardSearchAndSelectionContainer from '../search/CardSearchAndSelectionContainer';
import Card2 from '../card/Card2';
// Context
import { UserContext } from '../../context/UserContext';
import { CardContext } from '../../context/CardContext';
// Utils
import LoadingSpinner from '../utils/LoadingSpinner';

function OpenAlbumPage() {
  const { user } = useContext(UserContext);
  const { userCardsArray } = useContext(CardContext);

  const [userCards, setUserCards] = useState([]);

  useEffect(() => {
    setUserCards(userCardsArray);
  }, []);

  const renderCards = (cards) => {
    return cards.map((card, index) => <Card2 key={index} cardData={card} />);
  };

  return (
    <div className='grid px-4 pt-4 overflow-hidden'>
      <section className='grid grid-rows-reg h-full px-2 gap-2 overflow-hidden'>
        {/* Top bar - search bar */}
        <CardSearchAndSelectionContainer allCards={user.cards} />

        <div className='grid h-full overflow-hidden bg-black rounded-tr-xl rounded-tl-xl main__bg border-t-4 border-l-4 border-r-4 border-solid border-white'>
          {/* Main cards display */}
          <section className='grid h-full p-1 w-full'>
            {userCards.length <= 0 ? (
              <div className='grid w-full justify-center items-center text-white text-3xl text-center'>
                <LoadingSpinner />
              </div>
            ) : (
              <div className='grid grid_cols_card gap-y-2 gap-x-2'>
                {renderCards(userCards)}
              </div>
            )}
          </section>
        </div>
      </section>
    </div>
  );
}

export default OpenAlbumPage;
