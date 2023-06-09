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
import RewardsPage from './pages/rewards/RewardsPage';
import CardOverviewPage from './pages/cards/CardOverviewPage';
import TradingPage from './pages/trade/TradingPage';
import AdminPage from './pages/admin/AdminPage';
import CardEditPage from './pages/album/CardEditPage';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<HomePage />} />
      <Route path='/album' element={<AlbumPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/sign-up' element={<RegisterPage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/open-packs' element={<OpenPacksPage />} />
      <Route path='/cards' element={<CardsAvailablePage />} />
      <Route path='/card-overview/:id' element={<CardOverviewPage />} />
      <Route path='/invintory' element={<InvintoryPage />} />
      <Route path='/trade' element={<TradingPage />} />
      <Route path='/rewards' element={<RewardsPage />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route path='/admin/card-edit' element={<CardEditPage />} />
      <Route path='*' element={<Error404 />} />

    </Routes>
  );
}

export default App;
