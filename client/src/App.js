import { Route, Routes } from 'react-router-dom';
// Pages
import HomePage from './pages/home/HomePage';
import CollectionPage from './pages/album/CollectionPage';
import LoginPage from './users/login/LoginPage';
import RegisterPage from './users/register/RegisterPage';
import Error404 from './pages/error/Error404';
import ShopPage from './pages/shop/ShopPage';
import OpenPacksPage from './pages/packs/OpenPacksPage';
import CardsAvailablePage from './pages/cards/CardsAvailablePage';
import InvintoryPage from './pages/invintory/InvintoryPage';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<HomePage />} />
      <Route path='/album' element={<CollectionPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/sign-up' element={<RegisterPage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/open-packs' element={<OpenPacksPage />} />
      <Route path='/cards' element={<CardsAvailablePage />} />
      <Route path='/invintory' element={<InvintoryPage />} />
      <Route path='*' element={<Error404 />} />

    </Routes>
  );
}

export default App;
