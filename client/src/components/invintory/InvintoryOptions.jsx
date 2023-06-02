import React from 'react';
import UnopenedPackets from '../packets/UnopenedPackets';

function InvintoryOptions({ toggleOpenPackets, togglePacketsDisplay }) {

  if (!togglePacketsDisplay) {
    return (
      <section>
        <div>
          <span>Unopened Packs</span>
          <div onClick={toggleOpenPackets}>PACKS IMAGE</div>
        </div>
      </section>
    );
  }

  if (togglePacketsDisplay) {
    return (
      <section className='grid h-full'>
        <UnopenedPackets />
      </section>
    );
  }
}

export default InvintoryOptions;
