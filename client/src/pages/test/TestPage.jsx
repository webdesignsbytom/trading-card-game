import React, { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import client from '../../utils/client';
function TestPage() {
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
    <div className='grid h-screen bg-slate-200'>
      <main className='grid items-center px-4 grid-rows-2'>
        <section className='grid grid-cols-5 gap-4 w-full'>
          <div className='grid outline-2 outline outline-black rounded-xl h-full w-full bg-holo-bg bg-repeat bg-center bg-50'>
            1
          </div>
          <div className='grid outline-2 outline outline-black rounded-xl h-full w-full rainbowGradientOne'>
            2
          </div>
          <div className='grid outline-2 outline outline-black rounded-xl h-full w-full rainbowGradientTwo'>
            3
          </div>
          <div className='grid outline-2 outline outline-black rounded-xl h-full w-full radialGradient'>
            4
          </div>
          <div className='grid outline-2 outline outline-black rounded-xl h-full w-full rainbowsCombined'>
            5
          </div>
        </section>

        <section className='grid grid-cols-5 gap-4 w-full'>
          <div className='grid outline-2 outline outline-black rounded-xl h-full w-full textureAndAllGradientsCombined'>
            6
          </div>
          <div className='grid outline-2 outline outline-black rounded-xl h-full w-full allWithBackgroundPosition'>
            7
          </div>
          <div className='grid outline-2 outline outline-black rounded-xl h-full w-full cardShinePlusAfterElement'>
            8
          </div>
          <div className='card'>
            <div className='cardFront'>
              <img
                src='https://images.pokemontcg.io/swsh1/190_hires.png'
                alt='name'
              />
              <div className='cardShinePlusAfterElement'></div>
              <div className='cardGlare'></div>
            </div>
          </div>
          <div className='grid outline-2 outline outline-black rounded-xl h-full w-full'>
            <img
              className='h-full cardShinePlusAfterElement'
              src='https://images.pokemontcg.io/swsh1/190_hires.png'
              alt='test'
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default TestPage;
