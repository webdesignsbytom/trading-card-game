import React from 'react';
import { useNavigate } from 'react-router-dom';
// Images
import CovidPack from '../../assets/img/packets/pack1.png';
import ItemsImg from '../../assets/img/invintory/items.png';

function InvintoryOptions() {
  let navigate = useNavigate();

  const toggleOpenPackets = () => {
    navigate('/packs/unopened');
  };

  return (
    <section className='grid'>
      <div className='grid grid-cols-4 mt-4'>
        <div className='p-4 text-center'>
          <span className='text-2xl font-semibold'>Card Packs</span>
          <div className='cursor-pointer mt-4' onClick={toggleOpenPackets}>
            <img src={CovidPack} alt='Covid pack' />
          </div>
        </div>
        <div className='p-4 text-center'>
          <span className='text-2xl font-semibold'>Items</span>
          <div className='cursor-pointer mt-4' onClick={toggleOpenPackets}>
            <img src={ItemsImg} alt='Covid pack' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default InvintoryOptions;
