import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// context
import { ToggleContext } from '../../context/ToggleContext';
import { UserContext } from '../../context/UserContext';
// API
// Images
import CovidPack from '../../assets/img/packets/pack1.png';
import BrexitPack from '../../assets/img/packets/pack2.png';
import ElectionPack from '../../assets/img/packets/pack3.png';
// Constants
import { PACK_TYPE_ALPHA, PACK_TYPE_BETA, PACK_TYPE_GAMMA } from '../../utils/cards/CardGameConstants';

function OpenablePacket({ pack }) {
  console.log('PPSPSWD', pack);

  const { toggleOpeningNewPack } = useContext(ToggleContext);
  const { user } = useContext(UserContext);

  let navigate = useNavigate();

  const openPack = (pack) => {
    navigate('/pack/opened', { state: pack });
    toggleOpeningNewPack(pack);
    console.log('OPEN XXX');
  };


  if (pack) {
    return (
      <div className='w-full grid items-center justify-center'>
        <article className='text-center'>
          <div className='text-xl font-semibold'>
            <h4>Pack type:</h4>
            <h3>{pack?.packType}</h3>
          </div>
          <div>
            {pack.packType === PACK_TYPE_ALPHA && (
              <img src={BrexitPack} alt='Brexit pack' />
            )}
            {pack.packType === PACK_TYPE_BETA && (
              <img src={CovidPack} alt='Covid pack' />
            )}
            {pack.packType === PACK_TYPE_GAMMA && (
              <img src={ElectionPack} alt='Election pack' />
            )}
          </div>
        </article>

        <section className='w-full grid justify-center items-center mt-4'>
          <button
            onClick={() => openPack(pack)}
            className='outline text-xl font-semibold font-poppins outline-2 hover:bg-red-600 active:scale-105 outline-black rounded p-2 bg-red-500 main__bg no__highlights'
          >
            Open Pack
          </button>
        </section>
      </div>
    );
  } else {
    <div>
      NoPACK
    </div>
  }
}

export default OpenablePacket;
