import React from 'react';
// images
import AlphaPack from '../../assets/images/packets/mon_cards_alpha_box_set_first_edition.png';

function DeckCoverComponent() {
  return (
    <div className='grid cursor-pointer'>
      <img src={AlphaPack} alt='Brexit pack' />
    </div>
  );
}

export default DeckCoverComponent;
