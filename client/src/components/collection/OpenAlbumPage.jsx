import React, { useContext, useEffect, useState } from 'react';
// Components
import CardSearchAndSelectionContainer from '../search/CardSearchAndSelectionContainer';
import Card2 from '../card/Card2';
// Context
import { UserContext } from '../../context/UserContext';
// Utils
import LoadingSpinner from '../utils/LoadingSpinner';

function OpenAlbumPage() {
  const { user } = useContext(UserContext);

  const [openPageCards, setOpenPageCards] = useState([]);
  const [foundCards, setFoundCards] = useState([]);

  console.log('openPageCards', openPageCards);

  useEffect(() => {
    setFoundCards(user.cards)
  }, []);

  return (
    <div className='grid px-4 pt-4 overflow-hidden'>
      <section className='grid grid-rows-reg h-full px-2 gap-2 overflow-hidden'>
        {/* Top bar - search bar */}
        <CardSearchAndSelectionContainer allCards={user.cards} />

        <div className='grid h-full overflow-hidden bg-black rounded-tr-xl rounded-tl-xl main__bg border-t-4 border-l-4 border-r-4 border-solid border-white'>
          <div className='grid h-full overflow-y-auto'>
            {foundCards.length <= 0 ? (
              <div className='grid w-full justify-center items-center text-white text-3xl text-center'>
                <LoadingSpinner />
              </div>
            ) : (
              <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 lg:grid-rows-2 gap-y-4 gap-x-3 p-4 sm:p-1'>
                {foundCards.map((card, index) => {
                  return <Card2 key={index} cardData={card} />;
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default OpenAlbumPage;
