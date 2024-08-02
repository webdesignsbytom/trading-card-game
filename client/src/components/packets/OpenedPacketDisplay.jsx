import React, { useContext, useEffect } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Card components
import MemberCard from '../card/MemberCard';
import PolicyCard from '../card/PolicyCard';
import PartyCard from '../card/PartyCard';

function OpenedPacketDisplay() {
  const { returnedOpenPack, setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/invintory')
  }, [])

  return (
    <div className='grid h-full grid-rows-reg overflow-hidden'>
      <article className='h-fit text-center'>
        <h2 className='text-lg font-semibold leading-4 mt-1'>CHECK OUT YOUR NEW CARDS!</h2>
        <p>They have been automatically added to your album</p>
      </article>

      <section className='grid lg:grid-cols-6 lg:grid-rows-2 gap-3 py-2 px-2 h-full overflow-scroll lg:overflow-hidden'>
        {returnedOpenPack.map((card, index) => {
          if (card.cardType === 'MEMBER') {
            return <MemberCard cardData={card} key={index} />;
          }
          if (card.cardType === 'PARTY') {
            return <PartyCard cardData={card} key={index} />;
          }
          if (card.cardType === 'POLICY') {
            return <PolicyCard cardData={card} key={index} />;
          }
        })}
      </section>
    </div>
  );
}

export default OpenedPacketDisplay;
