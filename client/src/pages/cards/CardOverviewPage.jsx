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
    <div className='bg-black main__bg h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid overflow-hidden h-full w-full p-2'>
          <div className='grid grid-rows-reg'>
            <section className='grid items-center justify-center my-2'>
              <article className='bg-white py-2 px-4 text-center grid items-center justify-center w-fit main__bg outline-4 outline outline-blue-600'>
                <h1 className='text-xl font-semibold'>CARD INFORMATION</h1>
                <h2>{cardData?.cardName}</h2>
              </article>
            </section>

            <section className='grid h-1/2 overflow-hidden grid-cols-2 grid-rows-1 py-4 px-2 gap-6'>
              <section className='grid h-full overflow-hidden bg-white main__bg outline outline-4 outline-blue-800 p-4'>
                <Card cardData={cardData} />
              </section>
              <section className='grid h-full bg-white main__bg outline outline-4 outline-blue-800'>
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
