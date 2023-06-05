import React, { useContext } from 'react';
// Components
import UnopenedPackets from '../packets/UnopenedPackets';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import OpenedPacketDisplay from '../packets/OpenedPacketDisplay';
// Images
import CovidPack from '../../assets/img/packets/pack1.png';
import ItemsImg from '../../assets/img/invintory/items.png';

function InvintoryOptions() {
  const {
    toggleOpenPackets,
    toggleUnopenedPacketsDisplay,
    toggleOpeningPackDiplay,
  } = useContext(ToggleContext);

  console.log('togglePacketsDisplay', toggleUnopenedPacketsDisplay);

  if (!toggleUnopenedPacketsDisplay && !toggleOpeningPackDiplay) {
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

  if (toggleUnopenedPacketsDisplay && !toggleOpeningPackDiplay) {
    return (
      <section className='grid h-full'>
        <UnopenedPackets />
      </section>
    );
  }

  if (toggleOpeningPackDiplay) {
    return (
      <section className='grid h-full'>
        <OpenedPacketDisplay />
      </section>
    );
  }
}

export default InvintoryOptions;
