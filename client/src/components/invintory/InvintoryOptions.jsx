import React, { useContext } from 'react';
// Components
import UnopenedPackets from '../packets/UnopenedPackets';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import OpenedPacketDisplay from '../packets/OpenedPacketDisplay';

function InvintoryOptions() {
  const { toggleOpenPackets, toggleUnopenedPacketsDisplay, toggleOpeningPackDiplay } = useContext(ToggleContext)

  console.log('togglePacketsDisplay', toggleUnopenedPacketsDisplay);

  if (!toggleUnopenedPacketsDisplay && !toggleOpeningPackDiplay) {
    return (
      <section>
        <div>
          <span>Unopened Packs</span>
          <div onClick={toggleOpenPackets}>PACKS IMAGE</div>
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
