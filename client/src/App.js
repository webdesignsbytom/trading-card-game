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
import BuyPackPage from './pages/shop/BuyPackPage';
import TestPage from './pages/test/TestPage';
import TestCard from './pages/test/TestCard';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<HomePage />} />
      <Route path='/album' element={<AlbumPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/sign-up' element={<RegisterPage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/shop/packs' element={<BuyPackPage />} />
      <Route path='/open-packs' element={<OpenPacksPage />} />
      <Route path='/pack/opened' element={<CardsInPackPage />} />
      <Route path='/packs/unopened' element={<UnopenedPacketsPage />} />
      <Route path='/cards' element={<CardsAvailablePage />} />
      <Route path='/card-overview/:id' element={<CardOverviewPage />} />
      <Route path='/invintory' element={<InvintoryPage />} />
      <Route path='/invintory/items' element={<InvintoryItemsPage />} />
      <Route path='/trading' element={<TradingPage />} />
      <Route path='/rewards' element={<RewardsPage />} />
      <Route path='/battles' element={<BattlesOverviewPage />} />
      <Route path='/battle/open-battle' element={<OpenBattleActivePage />} />
      <Route path='/battles/rules' element={<BattleRulesPage />} />
      <Route path='/user/decks' element={<DecksOverviewPage />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route path='/admin/card-edit' element={<CardEditPage />} />
      <Route path='/admin/user-overview' element={<UserOverviewPage />} />
      <Route path='/admin/event-overview' element={<EventOverviewPage />} />
      <Route path='/test' element={<TestPage />} />
      <Route path='/test/card' element={<TestCard />} />
      <Route path='*' element={<Error404 />} />

    </Routes>
  );
}

export default App;
