import React from 'react';
// images
import AlphaPack from '../../assets/images/packets/pack2.png';

function PacketFrontCover() {
  return (
    <div className='grid cursor-pointer'>
      <img src={AlphaPack} alt='Brexit pack' />
    </div>
  );
}

export default PacketFrontCover;
