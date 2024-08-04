// Routes
export const HOME_PAGE_URL = '/';
export const SHOP_PAGE_URL = '/shop';
export const LOGIN_PAGE_URL = '/login';
export const SIGN_UP_PAGE_URL = '/sign-up';
export const ALBUM_PAGE_URL = '/album';
export const TRADING_PAGE_URL = '/trading';
export const DEV_PAGE_URL = '/developer';
export const DECKS_OVERVIEW_PAGE_URL = '/user/decks';
export const CARDS_PAGE_URL = '/cards';
export const BATTLES_PAGE_URL = '/battles';
export const FIND_BATTLER_PAGE_URL = '/battles/find-opponents';
export const BATTLE_RULES_PAGE_URL = '/battles/rules';
export const BATTLE_REQUESTS_PAGE_URL = '/battles/battle-requests';
export const INVENTORY_PAGE_URL = '/invintory';
export const REWARDS_PAGE_URL = '/rewards';
export const UNOPENED_PACKS_URL = '/packs/unopened';
export const OPEN_PACKS_PAGE_URL = '/open-packs';
export const CARDS_IN_PACK_PAGE_URL = '/pack/opened';
export const CARD_PAGE_URL = '/card';
export const INVENTORY_ITEMS_PAGE_URL = '/invintory/items';
export const OPEN_BATTLE_ACTIVE_PAGE_URL = '/battle/open-battle';
export const ADMIN_PAGE_URL = '/admin';
export const CARD_EDIT_PAGE_URL = '/admin/card-edit';
export const USER_OVERVIEW_PAGE_URL = '/admin/user-overview';
export const EVENT_OVERVIEW_PAGE_URL = '/admin/event-overview';
export const TEST_PAGE_URL = '/test';
export const TEST_CARD_PAGE_URL = '/test/card';

// Text data
export const SecondaryTitle = 'The Monster Trading Card Game';

// API
export const GET_ALL_CARDS_API = '/mon-cards/get-all-cards';
export const STARTING_PACKS_API = '/packs/create-starter-packs-for-user';
export const GET_USER_API = '/users/get-user-by-id';
export const GET_USER_FOR_LOGIN_API = '/users/login/get-user-by-id';
export const BUY_PACK_API = '/packs/buy-pack-for-user';
export const OPEN_PACK_API = '/users/user/packs/open-pack';
export const LOGIN_API = '/login';
export const REGISTER_API = '/users/register';
export const COLLECT_REWARD_API = '/users/user/rewards/daily-reward/collect';
export const ALL_EVENTS_API = '/events/all-events';
export const COLLECT_STARTER_PACKS_API = '/users/starter-packs/collect';
export const BATTLE_USER_SEARCH_API = '/users/user-search/battle-search'; // :username
export const CREATE_BATTLE_REQ_API = '/battles/battle/create-battle-request';
export const GET_USER_BATTLE_REQ_API =
  '/battles/battle/get-all-user-battle-requests';
export const ACCEPT_BATTLE_REQ_API = '/battles/battle-requests/accept';
export const DELETE_BATTLE_REQ_API = '/battles/battle-requests/delete';