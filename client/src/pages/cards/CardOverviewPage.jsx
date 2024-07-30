import React from 'react';
import { useLocation } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import Card from '../../components/card/Card';

function CardOverviewPage() {
  const location = useLocation();

  const cardData = location.state;


  return (
    <div className='grid lg:overflow-hidden bg-green-300 main__bg h-screen'>
      <section className='grid h-full lg:overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid overflow-hidden h-full w-full p-2'>
          <div className='grid grid-rows-reg h-full overflow-hidden'>

            <section className='grid w-full my-2 px-2'>
              <article className='grid bg-main-colour py-1 px-4 rounded-xl w-full text-center items-center justify-center main__bg border-2 border-main-border border-solid shadow-lg'>
                <h2 className='font-semibold lg:text-xl'>{cardData?.cardName}</h2>
              </article>
            </section>

            <section className='grid h-full lg:grid-cols-2 py-2 px-2 gap-4 overflow-hidden'>
              <section className='grid h-full w-full overflow-hidden'>
                <Card cardData={cardData} />
              </section>
              <section className='grid h-full bg-white rounded-xl main__bg border-2 border-main-border border-solid shadow-lg overflow-hidden'>
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
