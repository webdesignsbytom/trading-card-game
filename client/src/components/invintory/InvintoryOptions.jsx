import React, { useContext } from 'react';
// Components
import UnopenedPackets from '../packets/UnopenedPackets';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import OpenedPacketDisplay from '../packets/OpenedPacketDisplay';

function InvintoryOptions() {
  const {
    toggleOpenPackets,
    toggleUnopenedPacketsDisplay,
    toggleOpeningPackDiplay,
  } = useContext(ToggleContext);

  console.log('togglePacketsDisplay', toggleUnopenedPacketsDisplay);

  if (!toggleUnopenedPacketsDisplay && !toggleOpeningPackDiplay) {
    return (
      <section>
        <div className='grid grid-cols-4'>
          <div>
            <span>Card Packs</span>
            <div onClick={toggleOpenPackets}>PACKS IMAGE</div>
          </div>
          <div>
            <span>Items</span>
            <div onClick={toggleOpenPackets}>ITEMS IMAGE</div>
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
