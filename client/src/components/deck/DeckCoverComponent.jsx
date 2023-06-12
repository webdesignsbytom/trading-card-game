import React from 'react';
// images
import BrexitPack from '../../assets/img/packets/pack2.png';

function DeckCoverComponent() {
  return (
    <div className='grid cursor-pointer'>
      <img src={BrexitPack} alt='Brexit pack' />
    </div>
  );
}

export default DeckCoverComponent;
