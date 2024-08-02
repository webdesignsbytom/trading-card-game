import AlphaPackOne from '../../assets/images/packets/mon_cards_alpha_pack_first_edition.png';
import BetaPackOne from '../../assets/images/packets/mon_cards_beta_pack_first_edition.png';
import GamePackOne from '../../assets/images/packets/mon_cards_gamma_pack_first_edition.png';
import AlphaBoxOne from '../../assets/images/packets/mon_cards_alpha_box_set_first_edition.png';
import BetaBoxOne from '../../assets/images/packets/mon_cards_beta_box_set_first_edition.png';
import GammaBoxOne from '../../assets/images/packets/mon_cards_gamma_box_set_first_edition.png';
// Constants
import {
  NumCardsInBox,
  NumCardsInPack,
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
        imageUrl: AlphaPackOne,
        price: StandardPackCost,
        numCards: NumCardsInPack,
      },
      {
        id: 'b-01',
        name: 'beta_pack_one',
        title: 'Beta Pack',
        imageUrl: BetaPackOne,
        price: StandardPackCost,
        numCards: NumCardsInPack,
      },
      {
        id: 'g-01',
        name: 'game_pack_one',
        title: 'Game Pack',
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
        imageUrl: AlphaBoxOne,
        price: StandardBoxCost,
        numCards: NumCardsInBox,
      },
      {
        id: 'bb-01',
        name: 'beta_box_one',
        title: 'Beta Box',
        imageUrl: BetaBoxOne,
        price: StandardBoxCost,
        numCards: NumCardsInBox,
      },
      {
        id: 'gg-01',
        name: 'gamma_box_one',
        title: 'Gamma Box',
        imageUrl: GammaBoxOne,
        price: StandardBoxCost,
        numCards: NumCardsInBox,
      },
    ],
  },
];
