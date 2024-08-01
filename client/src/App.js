import { Route, Routes } from 'react-router-dom';
// Pages
import HomePage from './pages/home/HomePage';
import AlbumPage from './pages/album/AlbumPage';
import LoginPage from './users/login/LoginPage';
import RegisterPage from './users/register/RegisterPage';
import Error404 from './pages/error/Error404';
import ShopPage from './pages/shop/ShopPage';
import OpenPacksPage from './pages/packs/OpenPacksPage';
import CardsAvailablePage from './pages/cards/CardsAvailablePage';
import InvintoryPage from './pages/invintory/InvintoryPage';
import InvintoryItemsPage from './pages/invintory/InvintoryItemsPage';
import RewardsPage from './pages/rewards/RewardsPage';
import CardOverviewPage from './pages/cards/CardOverviewPage';
import TradingPage from './pages/trade/TradingPage';
import AdminPage from './pages/admin/AdminPage';
import CardEditPage from './pages/admin/CardEditPage';
import UserOverviewPage from './pages/admin/UserOverviewPage';
import EventOverviewPage from './pages/admin/EventsOverviewPage';
import CardsInPackPage from './pages/packs/CardsInPackPage';
import UnopenedPacketsPage from './pages/packs/UnopenedPacketsPage';
import BattlesOverviewPage from './pages/battles/BattlesOverviewPage';
import OpenBattleActivePage from './pages/battles/OpenBattleActivePage';
import BattleRulesPage from './pages/battles/BattleRulesPage';
import DecksOverviewPage from './pages/decks/DecksOverviewPage';
import DeveloperPage from './pages/dev/DeveloperPage';
import TestPage from './pages/test/TestPage';
import TestCard from './pages/test/TestCard';
// Constants
import {
  HOME_PAGE_URL,
  SHOP_PAGE_URL,
  LOGIN_PAGE_URL,
  SIGN_UP_PAGE_URL,
  ALBUM_PAGE_URL,
  TRADING_PAGE_URL,
  ADMIN_PAGE_URL,
  CARDS_PAGE_URL,
  BATTLES_PAGE_URL,
  INVENTORY_PAGE_URL,
  REWARDS_PAGE_URL,
  UNOPENED_PACKS_URL,
  OPEN_PACKS_PAGE_URL,
  CARDS_IN_PACK_PAGE_URL,
  CARD_OVERVIEW_PAGE_URL,
  INVENTORY_ITEMS_PAGE_URL,
  OPEN_BATTLE_ACTIVE_PAGE_URL,
  BATTLE_RULES_PAGE_URL,
  DECKS_OVERVIEW_PAGE_URL,
  CARD_EDIT_PAGE_URL,
  USER_OVERVIEW_PAGE_URL,
  EVENT_OVERVIEW_PAGE_URL,
  TEST_PAGE_URL,
  TEST_CARD_PAGE_URL,
  DEV_PAGE_URL,
} from './utils/Constants';

function App() {
  return (
    <Routes>
      <Route path={HOME_PAGE_URL} index element={<HomePage />} />
      <Route path={ALBUM_PAGE_URL} element={<AlbumPage />} />
      <Route path={LOGIN_PAGE_URL} element={<LoginPage />} />
      <Route path={SIGN_UP_PAGE_URL} element={<RegisterPage />} />
      <Route path={SHOP_PAGE_URL} element={<ShopPage />} />
      <Route path={OPEN_PACKS_PAGE_URL} element={<OpenPacksPage />} />
      <Route path={CARDS_IN_PACK_PAGE_URL} element={<CardsInPackPage />} />
      <Route path={UNOPENED_PACKS_URL} element={<UnopenedPacketsPage />} />
      <Route path={CARDS_PAGE_URL} element={<CardsAvailablePage />} />
      <Route path={CARD_OVERVIEW_PAGE_URL} element={<CardOverviewPage />} />
      <Route path={INVENTORY_PAGE_URL} element={<InvintoryPage />} />
      <Route path={INVENTORY_ITEMS_PAGE_URL} element={<InvintoryItemsPage />} />
      <Route path={TRADING_PAGE_URL} element={<TradingPage />} />
      <Route path={REWARDS_PAGE_URL} element={<RewardsPage />} />
      <Route path={BATTLES_PAGE_URL} element={<BattlesOverviewPage />} />
      <Route path={OPEN_BATTLE_ACTIVE_PAGE_URL} element={<OpenBattleActivePage />} />
      <Route path={BATTLE_RULES_PAGE_URL} element={<BattleRulesPage />} />
      <Route path={DECKS_OVERVIEW_PAGE_URL} element={<DecksOverviewPage />} />
      <Route path={ADMIN_PAGE_URL} element={<AdminPage />} />
      <Route path={DEV_PAGE_URL} element={<DeveloperPage />} />
      <Route path={CARD_EDIT_PAGE_URL} element={<CardEditPage />} />
      <Route path={USER_OVERVIEW_PAGE_URL} element={<UserOverviewPage />} />
      <Route path={EVENT_OVERVIEW_PAGE_URL} element={<EventOverviewPage />} />
      <Route path={TEST_PAGE_URL} element={<TestPage />} />
      <Route path={TEST_CARD_PAGE_URL} element={<TestCard />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}

export default App;
