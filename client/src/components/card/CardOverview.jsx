import React, { useContext } from 'react';
// Components
import Card from './Card';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function CardOverview() {
  const { selectedCard } = useContext(ToggleContext);

  return (
    <div className='grid lg:grid-cols-2'>
      <section className='grid grid-cols-1 grid-rows-1'>
        <Card cardData={selectedCard} />
      </section>
      <section className='hidden lg:grid'>Data</section>
    </div>
  );
}

export default CardOverview;
