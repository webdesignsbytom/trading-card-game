import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// Context
import UserProvider from './context/UserContext';
import ToggleContextProvider from './context/ToggleContext';
import CardContextProvider from './context/CardContext';
import TradingContextProvider from './context/TradingContext';
// Styles
import './styles/index.css';
import './styles/components.css';
import './styles/cards.css';
import './styles/text.css';
import './styles/animations.css';
import './styles/backgrounds.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <ToggleContextProvider>
        <CardContextProvider>
          <TradingContextProvider>
            <App />
          </TradingContextProvider>
        </CardContextProvider>
      </ToggleContextProvider>
    </UserProvider>
  </BrowserRouter>
);
