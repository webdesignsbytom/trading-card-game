import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// context
import { CardContext } from '../../context/CardContext';
// API
// Images
import AlphaBox from '../../assets/images/packets/mon_cards_alpha_box_set_first_edition.png';
import BetaBox from '../../assets/images/packets/mon_cards_beta_box_set_first_edition.png';
import GammaBox from '../../assets/images/packets/mon_cards_gamma_box_set_first_edition.png';
// Constants
import {
  BOX_TYPE_ALPHA,
  BOX_TYPE_BETA,
  BOX_TYPE_GAMMA,
} from '../../utils/cards/CardGameConstants';
import { CARDS_IN_BOX_PAGE_URL } from '../../utils/Constants';

function OpenableBoxComponent({ box }) {
  const { toggleOpeningNewBox } = useContext(CardContext);

  let navigate = useNavigate();

  const openBox = (box) => {
    navigate(CARDS_IN_BOX_PAGE_URL, { state: box });
    toggleOpeningNewBox(box);
  };

  if (box) {
    return (
      <div className='grid grid-rows-rev gap-4 w-full h-1/2 items-center justify-center'>
        <article className='grid grid-rows-reg gap-2 text-center overflow-hidden'>
          <div className='text-xl font-semibold'>
            <h4 className='text-sm uppercase'>Box type</h4>
            <h3>{box?.boxType}</h3>
          </div>
          <div className='grid h-min my-auto w-full overflow-hidden'>
            {box.boxType === BOX_TYPE_ALPHA && (
              <img
                src={AlphaBox}
                alt={`${BOX_TYPE_ALPHA} foil card box`}
                onClick={() => openBox(box)}
                className='lg:w-1/2 h-full object-contain mx-auto hover:brightness-150 duration-300 cursor-pointer'
              />
            )}
            {box.boxType === BOX_TYPE_BETA && (
              <img
                src={BetaBox}
                alt={`${BOX_TYPE_BETA} foil card box`}
                onClick={() => openBox(box)}
                className='lg:w-1/2 h-full object-contain mx-auto hover:brightness-150 duration-300 cursor-pointer'
              />
            )}
            {box.boxType === BOX_TYPE_GAMMA && (
              <img
                src={GammaBox}
                alt={`${BOX_TYPE_GAMMA} foil card box`}
                onClick={() => openBox(box)}
                className='lg:w-1/2 h-full object-contain mx-auto hover:brightness-150 duration-300 cursor-pointer'
              />
            )}
          </div>
        </article>

        <section className='grid w-full h-full justify-center items-end'>
          <button
            onClick={() => openBox(box)}
            className='text-sm font-semibold bg-red-500 main__bg font-poppins px-1 py-1 hover:bg-red-600 active:scale-105 rounded border-main-border border-solid border-2 no__highlights cursor-pointer'
          >
            Open Box
          </button>
        </section>
      </div>
    );
  } else {
    <div>NoBOX</div>;
  }
}

export default OpenableBoxComponent;
