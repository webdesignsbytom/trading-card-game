import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// context
import { ToggleContext } from '../../context/ToggleContext';
import { UserContext } from '../../context/UserContext';
// API
// Images
import AlphaPack from '../../assets/images/packets/mon_cards_alpha_box_set_first_edition.png';
import BetaPack from '../../assets/images/packets/mon_cards_beta_box_set_first_edition.png';
import GammaPack from '../../assets/images/packets/mon_cards_gamma_box_set_first_edition.png';
// Constants
import { PACK_TYPE_ALPHA, PACK_TYPE_BETA, PACK_TYPE_GAMMA } from '../../utils/cards/CardGameConstants';

function OpenablePacket({ pack }) {

  const { toggleOpeningNewPack } = useContext(ToggleContext);
  const { user } = useContext(UserContext);

  let navigate = useNavigate();

  const openPack = (pack) => {
    navigate('/pack/opened', { state: pack });
    toggleOpeningNewPack(pack);
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
              <img src={AlphaPack} alt='Brexit pack' />
            )}
            {pack.packType === PACK_TYPE_BETA && (
              <img src={BetaPack} alt='Covid pack' />
            )}
            {pack.packType === PACK_TYPE_GAMMA && (
              <img src={GammaPack} alt='Election pack' />
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
