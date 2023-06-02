import React from 'react';
import OpenablePacket from './OpenablePacket';

function UnopenedPackets() {
  return (
    <div className='grid grid-rows-a1a py-6'>
      <div className='flex text-center justify-center'>
        <h4>Unopened Packets</h4>
      </div>
      
      <section className='w-full grid grid-cols-3 items-center justify-center gap-4 my-4'>
        <OpenablePacket />
        <OpenablePacket />
        <OpenablePacket />
      </section>

      <section className='grid gap-5 mt-6 grid-cols-2'>
        <button className='outline outline-2 outline-black rounded p-2'>
          Back
        </button>
        <button className='outline outline-2 outline-black rounded p-2'>
          Next
        </button>
      </section>
    </div>
  );
}

export default UnopenedPackets;
