import React, { useContext } from 'react';
import { ToggleContext } from '../../context/ToggleContext';
import client from '../../utils/client';
import { UserContext } from '../../context/UserContext';

function OpenablePacket({ pack }) {
  console.log('PPSPSWD', pack);
  const { toggleOpeningNewPack } = useContext(ToggleContext);
  const { user } = useContext(UserContext);

  const openPack = (pack) => {
    toggleOpeningNewPack(pack);
    console.log('OPEN XXX');
    const data = { packId: pack.id, userId: user.id };

    client
      .post('/packs/open-pack', data, true)
      .then((res) => {
        console.log('res', res.data);
      })

      .catch((err) => {
        console.error('Unable to open packs', err);
      });
  };

  return (
    <div className='w-full grid items-center justify-center'>
      <article className='text-center'>
        <h4>Pack type:</h4>
        <h3>{pack?.packType}</h3>
        <div>PACK IMAGE</div>
      </article>

      <section className='w-full'>
        <button
          onClick={() => openPack(pack)}
          className='outline outline-2 outline-black rounded p-2'
        >
          Open Pack
        </button>
      </section>
    </div>
  );
}

export default OpenablePacket;
