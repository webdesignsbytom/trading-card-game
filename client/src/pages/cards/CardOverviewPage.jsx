import React from 'react';
import { useLocation } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import Card from '../../components/card/Card';

function CardOverviewPage() {
  const location = useLocation();
  console.log('location', location);
  console.log('location', location.state);
  const cardData = location.state;


  return (
    <div className='bg-black main__bg h-screen grid lg:overflow-hidden'>
      <section className='grid h-full bg-black lg:overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid overflow-hidden h-full w-full p-2'>
          <div className='grid grid-rows-reg h-full overflow-hidden'>
            <section className='grid w-full my-2 px-2'>
              <article className='bg-white py-2 px-4 rounded-xl w-full text-center grid items-center justify-center main__bg outline-4 outline outline-blue-600'>
                <h1 className='text-xl font-semibold'>CARD INFORMATION</h1>
                <h2 className='font-semibold lg:text-xl'>{cardData?.cardName}</h2>
              </article>
            </section>

            <section className='grid h-full lg:grid-cols-2 py-4 px-2 gap-6 overflow-hidden'>
              <section className='grid h-full rounded-xl bg-white main__bg outline outline-4 outline-blue-800 p-4 overflow-hidden'>
                <Card cardData={cardData} />
              </section>
              <section className='grid h-full bg-white rounded-xl main__bg outline outline-4 outline-blue-800 overflow-hidden'>
                data
              </section>
            </section>
          </div>
        </main>
      </section>
    </div>
  );
}

export default CardOverviewPage;
