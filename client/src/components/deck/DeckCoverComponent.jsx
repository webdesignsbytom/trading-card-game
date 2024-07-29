import React from 'react';
// images
import AlphaPack from '../../assets/img/packets/pack2.png';

function DeckCoverComponent() {
  return (
    <div className='grid cursor-pointer'>
      <img src={AlphaPack} alt='Brexit pack' />
    </div>
  );
}

export default DeckCoverComponent;
