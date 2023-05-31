import { Route, Routes } from 'react-router-dom';
// Pages
import HomePage from './pages/home/HomePage';
import CollectionPage from './pages/collection/CollectionPage';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<HomePage />} />
      <Route path='/album' element={<CollectionPage />} />
    </Routes>
  );
}

export default App;
