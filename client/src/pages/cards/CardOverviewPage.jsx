import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import Card from '../../components/card/Card';
import Card2 from '../../components/card/Card2';

function CardOverviewPage() {
  const location = useLocation();
  const { cardName } = useParams();

  const cardData = location.state;

  return (
    <div className='grid lg:overflow-hidden main__bg min-h-screen w-full'>
      <section className='grid h-full md:overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />

        <main className='grid h-full w-full p-2 md:overflow-hidden'>
          <div className='grid grid-rows-reg h-full w-full md:overflow-hidden'>
            {/* Header - name of monster */}
            <section className='grid w-full my-2 px-2 overflow-hidden'>
              <article className='grid bg-main-colour py-1 px-4 rounded-xl w-full text-center items-center justify-center main__bg border-2 border-main-border border-solid shadow-lg'>
                <h1 className='font-semibold lg:text-2xl font-fantasy tracking-wider'>
                  {cardName}
                </h1>
              </article>
            </section>

            {/* Card and data  */}
            <section className='grid h-full lg:grid-cols-2 py-2 px-2 gap-4 md:overflow-hidden'>
              <section className='grid h-full w-full overflow-hidden'>
                <div className='grid w-fit mx-auto my-auto'>
                  <Card2 cardData={cardData} />
                </div>
              </section>
              <section className='grid w-full h-full p-10 overflow-hidden'>
                <div className='grid w-full h-full bg-white rounded-xl main__bg border-8 border-main-border border-solid shadow-lg overflow-hidden'>data</div>
              </section>
            </section>
          </div>
        </main>
      </section>
    </div>
  );
}

export default CardOverviewPage;
