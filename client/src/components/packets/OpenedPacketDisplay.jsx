import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Card components
import MemberCard from '../card/MemberCard';
import PolicyCard from '../card/PolicyCard';
import PartyCard from '../card/PartyCard';
import { useLocation } from 'react-router-dom';

function OpenedPacketDisplay() {
  const { returnedOpenPack } = useContext(ToggleContext);

  const location = useLocation();
  // const packData = location.state;

  console.log('XXXX ', returnedOpenPack);
  return (
    <div>
      <article>
        <p>CHECK OUT YOUR CARDS</p>
        <p>They have been automatically added to your album</p>
      </article>

      <section className='grid grid-cols-6 grid-rows-2 gap-2 py-2'>
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
