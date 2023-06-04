import React, { useContext } from 'react';
import { ToggleContext } from '../../context/ToggleContext';

function OpenablePacket({ pack }) {
  console.log('PPSPSWD', pack);
  const { toggleOpeningNewPack } = useContext(ToggleContext)

  const openPack = (pack) => {
    toggleOpeningNewPack(pack)
  }

  return (
    <div className='w-full grid items-center justify-center'>
      <article className='text-center'>
        <h4>Pack type:</h4>
        <h3>{pack?.packType}</h3>
        <div>PACK IMAGE</div>
      </article>

      <section className='w-full'>
        <button onClick={() => openPack(pack)} className='outline outline-2 outline-black rounded p-2'>
          Open Pack
        </button>
      </section>
    </div>
  );
}

export default OpenablePacket;
