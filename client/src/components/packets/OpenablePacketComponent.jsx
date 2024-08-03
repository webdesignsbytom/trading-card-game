import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// context
import { CardContext } from '../../context/CardContext';
// API
// Images
import AlphaPack from '../../assets/images/packets/mon_cards_alpha_pack_first_edition.png';
import BetaPack from '../../assets/images/packets/mon_cards_beta_pack_first_edition.png';
import GammaPack from '../../assets/images/packets/mon_cards_gamma_pack_first_edition.png';
// Constants
import {
  PACK_TYPE_ALPHA,
  PACK_TYPE_BETA,
  PACK_TYPE_GAMMA,
} from '../../utils/cards/CardGameConstants';
import { CARDS_IN_PACK_PAGE_URL } from '../../utils/Constants';

function OpenablePacketComponent({ pack }) {
  const { toggleOpeningNewPack } = useContext(CardContext);

  let navigate = useNavigate();

  const openPack = (pack) => {
    navigate(CARDS_IN_PACK_PAGE_URL, { state: pack });
    toggleOpeningNewPack(pack);
  };

  if (pack) {
    return (
      <div className='grid grid-rows-rev gap-4 w-full h-1/2 items-center justify-center'>
        <article className='grid grid-rows-reg gap-2 text-center overflow-hidden'>
          <div className='text-xl font-semibold'>
            <h4 className='text-sm uppercase'>Pack type</h4>
            <h3>{pack?.packType}</h3>
          </div>
          <div className='grid h-min my-auto w-full overflow-hidden'>
            {pack.packType === PACK_TYPE_ALPHA && (
              <img
                src={AlphaPack}
                alt={`${PACK_TYPE_ALPHA} foil card pack`}
                onClick={() => openPack(pack)}
                className='lg:w-1/2 h-full object-contain mx-auto hover:brightness-150 duration-300 cursor-pointer'
              />
            )}
            {pack.packType === PACK_TYPE_BETA && (
              <img
                src={BetaPack}
                alt={`${PACK_TYPE_BETA} foil card pack`}
                onClick={() => openPack(pack)}
                className='lg:w-1/2 h-full object-contain mx-auto hover:brightness-150 duration-300 cursor-pointer'
              />
            )}
            {pack.packType === PACK_TYPE_GAMMA && (
              <img
                src={GammaPack}
                alt={`${PACK_TYPE_GAMMA} foil card pack`}
                onClick={() => openPack(pack)}
                className='lg:w-1/2 h-full object-contain mx-auto hover:brightness-150 duration-300 cursor-pointer'
              />
            )}
          </div>
        </article>

        <section className='grid w-full h-full justify-center items-end'>
          <button
            onClick={() => openPack(pack)}
            className='text-sm font-semibold bg-red-500 main__bg font-poppins px-1 py-1 hover:bg-red-600 active:scale-105 rounded border-main-border border-solid border-2 no__highlights cursor-pointer'
          >
            Open Pack
          </button>
        </section>
      </div>
    );
  } else {
    <div>NoPACK</div>;
  }
}

export default OpenablePacketComponent;
