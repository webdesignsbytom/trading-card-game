import React, { useContext, useState, useEffect } from 'react';
// Context
import { CardContext } from '../../context/CardContext';
// Components
import Card2 from '../card/Card2';
import EmptyCardSlot from '../card/EmptyCardSlot';

function OpenedPacketDisplayComponent() {
  const { returnedOpenPack } = useContext(CardContext);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (returnedOpenPack.length > 0) {
      setLoading(false);
      
    }
  }, [returnedOpenPack]);

  const emptyArray = Array(12).fill(0);

  return (
    <div className='grid h-full grid-rows-reg overflow-hidden'>
      <article className='h-fit text-center'>
        <h1 className='text-3xl font-semibold font-fantasy'>
          CHECK OUT YOUR NEW CARDS!
        </h1>
        <h2 className='text-lg font-semibold'>
          They have been automatically added to your album
        </h2>
      </article>

      {/* Return the pack of new cards  */}
      <div className='grid overflow-y-auto items-center'>
        <section className='grid h-fit my-auto md:grid-cols-4 lg:grid-cols-2 lg:grid-rows-3 xl:grid-cols-6 xl:grid-rows-2 gap-3 py-4 px-2 overflow-y-auto'>
        {loading ? (
            emptyArray.map((_, index) => (
              <EmptyCardSlot key={index} />
            ))
          ) : (
            returnedOpenPack.map((card, index) => (
              <Card2 cardData={card} key={index} />
            ))
          )}
        </section>
      </div>
    </div>
  );
}

export default OpenedPacketDisplayComponent;
