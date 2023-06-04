import React, { useContext } from 'react';
import { ToggleContext } from '../../context/ToggleContext';
// Card components
import MemberCard from '../card/MemberCard';
import PolicyCard from '../card/PolicyCard';
import PartyCard from '../card/PartyCard';

function OpenedPacketDisplay() {
  const { selectedPack } = useContext(ToggleContext);

  return (
    <div>
      <article>
        <p>CHECK OUT YOUR CARDS</p>
        <p>They have been automatically added to your album</p>
      </article>
      
      <section className='grid grid-cols-6 grid-rows-2'>
        {selectedPack?.cards.map((card, index) => {
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
