import React, { useContext } from 'react';
// Context
import { CardContext } from '../../context/CardContext';
// Components
import Card2 from '../card/Card2';

function OpenedPacketDisplayComponent() {
  const { returnedOpenPack } = useContext(CardContext);
  console.log('returnedOpenPacl', returnedOpenPack);

  return (
    <div className='grid h-full grid-rows-reg overflow-hidden'>
      <article className='h-fit text-center'>
        <h2 className='text-lg font-semibold leading-4 mt-1'>
          CHECK OUT YOUR NEW CARDS!
        </h2>
        <p>They have been automatically added to your album</p>
      </article>

      {/* Return the pack of new cards  */}
      <section className='grid lg:grid-cols-6 lg:grid-rows-2 gap-3 py-2 px-2 h-full overflow-scroll lg:overflow-hidden'>
        {returnedOpenPack.map((card, index) => {
          return <Card2 cardData={card} key={index} />;
        })}
      </section>
    </div>
  );
}

export default OpenedPacketDisplayComponent;
