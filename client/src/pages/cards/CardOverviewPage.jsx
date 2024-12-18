import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import Card from '../../components/card/Card';
import CardDataCard from '../../components/card/CardDataCard';
import { HelmetItem } from '../../components/utils/HelmetItem';
// Constants
import { CompanyName } from '../../utils/Constants';
// Data
import {
  cardOverviewPageAdditionalMeta,
  cardOverviewPageStructuredData,
} from '../../utils/data/PageData';

function CardOverviewPage() {
  const location = useLocation();
  const { cardName } = useParams();

  const cardData = location.state;

  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName={cardData.name || 'Card'}
        desc={
          cardData.description ||
          `Details about ${cardData.name} in ${CompanyName}.`
        }
        keywords={`cards, ${cardData.name}, game cards, ${CompanyName}`}
        additionalMeta={cardOverviewPageAdditionalMeta(cardData)}
        structuredData={cardOverviewPageStructuredData(cardData)}
      />

      {/* Page */}
      <div className='grid lg:overflow-hidden main__bg min-h-screen w-full'>
        <section className='grid h-full md:overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
          <Navbar />

          <main className='grid h-full w-full p-2 md:overflow-hidden'>
            <div className='grid grid-rows-reg h-full w-full md:overflow-hidden'>
              {/* Header - name of monster */}
              <section className='grid w-full my-2 px-2 overflow-hidden'>
                <article className='grid bg-main-colour py-1 px-4 rounded w-full text-center items-center justify-center main__bg border-2 border-main-border border-solid shadow-lg'>
                  <h1 className='font-semibold lg:text-2xl font-fantasy tracking-wider'>
                    {cardName}
                  </h1>
                </article>
              </section>

              {/* Card and data  */}
              <section className='grid h-full lg:grid-cols-2 py-2 px-2 gap-4 md:overflow-hidden'>
                <section className='grid h-full w-full overflow-hidden'>
                  <div className='grid w-fit mx-auto my-auto'>
                    <Card cardData={cardData} />
                  </div>
                </section>
                {/* Data */}
                <section className='grid w-full h-full md:p-10 overflow-hidden'>
                  <CardDataCard cardData={cardData} />
                </section>
              </section>
            </div>
          </main>
        </section>
      </div>
    </>
  );
}

export default CardOverviewPage;
