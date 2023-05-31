import React, { useContext } from 'react';
// Components
import Card from './Card';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function CardOverview() {
  const { selectedCard } = useContext(ToggleContext);

  return (
    <div className='grid grid-cols-2'>
      <section>
        <Card cardData={selectedCard} />
      </section>
      <section>Data</section>
    </div>
  );
}

export default CardOverview;
