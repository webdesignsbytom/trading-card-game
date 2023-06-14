import React, { useEffect, useState } from 'react';
import client from '../../utils/client';
import Card from '../../components/card/Card';

function TestCard() {
  const [cardData, setCardData] = useState({});

  useEffect(() => {
    client
      .get(`/con-cards/card/get-by-id/1`)
      .then((res) => {
        setCardData(res.data.data.card);
      })
      .catch((err) => {
        console.error('Unable to find card', err);
      });
  }, []);
  return (
    <div className='grid h-screen bg-slate-200 p-2 overflow-hidden'>
      <div className='bg-slate-300 grid items-center justify-center overflow-hidden rounded-xl'>
        <section className='bg-white grid py-5 overflow-hidden h-full justify-center items-center px-6 w-1/2'>
          {/* CARDS */}
          <div className='card'>
            <div className='cardFront'>
              <Card cardData={cardData}/>
              <div className='cardShinePlusAfterElement'></div>
              <div className='cardFrontSecond'></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TestCard;
