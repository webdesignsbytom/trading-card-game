import React, { useState } from 'react';
import { useEffect } from 'react';
import client from '../../utils/client';

function CardOverviewAdminComponent() {
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
  
  return (
    <section className='grid h-full grid-rows-reg px-2 pb-2'>
      <section className='grid grid-flow-col h-fit'>
        <div className='grid justify-start items-center'>
          <h2 className='text-2xl font-semibold p-2'>Card Overview</h2>
        </div>
        <div className='grid justify-end items-center'>
          <div className='grid items-center justify-center p-1'>
            <input
              className='rounded px-1'
              type='text'
              name='searchAlbum'
              id='searchAlbum'
              placeholder='Search all cards...'
            />
          </div>
        </div>
      </section>
      <section className='grid overflow-hidden bg-white'>
        <div>CArd</div>
      </section>
    </section>
  );
}

export default CardOverviewAdminComponent;
