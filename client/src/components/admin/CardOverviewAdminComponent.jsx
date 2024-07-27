import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// API
import client from '../../api/client';

function CardOverviewAdminComponent() {
  const [allCardsArray, setAllCardsArray] = useState([]);
  const [cardNotFound, setCardNotFound] = useState(false);
  const [cardsFound, setCardsFound] = useState([]);
  const [searchQuery, setSearchQuery] = useState({ cardName: '' });

  let navigate = useNavigate();
  
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

  const openCardEditing = (card) => {
    navigate('/admin/card-edit', { state: card });
  };

  const searchForCard = () => {
    setCardNotFound(false);

    client
      .get(`/con-cards/${searchQuery.cardName}`)
      .then((res) => {
        setCardsFound(res.data.data.cards);
      })
      .catch((err) => {
        console.error('Unable to find User', err);
        if (err.response.statusText === 'Not Found') {
          setCardNotFound(true);
        }
      });
  };
  return (
    <section className='grid h-full overflow-hidden grid-rows-reg px-2 pb-2'>
      <section className='grid grid-flow-col h-fit'>
        <div className='grid justify-start items-center'>
          <h2 className='text-sm lg:text-2xl font-semibold p-2'>Card Overview</h2>
        </div>
        <div className='grid justify-end items-center'>
          <div className='grid relative items-center justify-center p-1'>
            <input
              className='rounded px-1'
              type='text'
              name='searchAlbum'
              id='searchAlbum'
              placeholder='Search all cards...'
            />
            <div onClick={searchForCard} className='absolute h-fit w-fit rounded active:scale-95 hover:bg-blue-700 bg-blue-400 px-2 right-0'>?</div>
          </div>
        </div>
      </section>
      <section className='grid h-full overflow-hidden bg-white'>
        <div className='grid h-full overflow-hidden overflow-y-scroll'>
          {allCardsArray?.map((card, index) => {
            return (
              <div
                key={index}
                onClick={() => openCardEditing(card)}
                className='grid cursor-pointer active:scale-95 text-xs lg:text-base grid-cols-rev items-center border-b-2 border-solid border-black px-2'
              >
                <div>
                  <span>{card.cardName}</span>
                </div>
                <div className='grid grid-flow-col gap-1 lg:gap-4 justify-end'>
                  <div>{card.edition}</div>
                  <div>{card.rarity}</div>
                  <div>{JSON.stringify(card.holographic)}</div>
                  <div>{card.cardType}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}

export default CardOverviewAdminComponent;
