import { Route, Routes } from 'react-router-dom';
// Pages
import HomePage from './pages/home/HomePage';
import CollectionPage from './pages/collection/CollectionPage';
import LoginPage from './users/login/LoginPage';
import RegisterPage from './users/register/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<HomePage />} />
      <Route path='/album' element={<CollectionPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/sign-up' element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
