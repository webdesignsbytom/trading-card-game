import AlphaPackOne from '../../assets/images/packets/mon_cards_alpha_pack_first_edition.png';
import BetaPackOne from '../../assets/images/packets/mon_cards_beta_pack_first_edition.png';
import GamePackOne from '../../assets/images/packets/mon_cards_gamma_pack_first_edition.png';
import AlphaBoxOne from '../../assets/images/packets/mon_cards_alpha_box_set_first_edition.png';
import BetaBoxOne from '../../assets/images/packets/mon_cards_beta_box_set_first_edition.png';
import GammaBoxOne from '../../assets/images/packets/mon_cards_gamma_box_set_first_edition.png';
// Constants
import {
  BOX_TYPE_ALPHA,
  BOX_TYPE_BETA,
  BOX_TYPE_GAMMA,
  NumCardsInBox,
  NumCardsInPack,
  PACK_TYPE_ALPHA,
  PACK_TYPE_BETA,
  PACK_TYPE_GAMMA,
  StandardBoxCost,
  StandardPackCost,
} from './CardGameConstants';

export const ShopSalesItem = [
  {
    category: 'Foil Packs',
    imageUrl: AlphaPackOne,
    items: [
      {
        id: 'a-01',
        name: 'alpha_pack_one',
        title: 'Alpha Pack',
        packType: PACK_TYPE_ALPHA,
        imageUrl: AlphaPackOne,
        price: StandardPackCost,
        numCards: NumCardsInPack,
      },
      {
        id: 'b-01',
        name: 'beta_pack_one',
        title: 'Beta Pack',
        packType: PACK_TYPE_BETA,
        imageUrl: BetaPackOne,
        price: StandardPackCost,
        numCards: NumCardsInPack,
      },
      {
        id: 'g-01',
        name: 'game_pack_one',
        title: 'Game Pack',
        packType: PACK_TYPE_GAMMA,
        imageUrl: GamePackOne,
        price: StandardPackCost,
        numCards: NumCardsInPack,
      },
    ],
  },
  {
    category: 'Boxes',
    imageUrl: AlphaBoxOne,
    items: [
      {
        id: 'aa-01',
        name: 'alpha_box_one',
        title: 'Alpha Box',
        boxType: BOX_TYPE_ALPHA,
        imageUrl: AlphaBoxOne,
        price: StandardBoxCost,
        numCards: NumCardsInBox,
      },
      {
        id: 'bb-01',
        name: 'beta_box_one',
        title: 'Beta Box',
        imageUrl: BetaBoxOne,
        boxType: BOX_TYPE_BETA,
        price: StandardBoxCost,
        numCards: NumCardsInBox,
      },
      {
        id: 'gg-01',
        name: 'gamma_box_one',
        title: 'Gamma Box',
        imageUrl: GammaBoxOne,
        boxType: BOX_TYPE_GAMMA,
        price: StandardBoxCost,
        numCards: NumCardsInBox,
      },
    ],
  },
];
