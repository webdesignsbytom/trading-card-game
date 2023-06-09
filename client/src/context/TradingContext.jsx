import React, { useContext } from 'react';
import { useState } from 'react';
// Api
import client from '../utils/client';
// Context
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';

export const TradingContext = React.createContext();

const TradingContextProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  // Trading
  const [gridColSettings, setGridColSettings] = useState('grid-cols-2x gap-4');
  const [tradeItemOpen, setTradeItemOpen] = useState(false);
  const [selectedTradeItem, setSelectedTradeItem] = useState({});

  const openTradeItem = (trade) => {
    console.log('togtoggleOpenPacketsgle');
    setSelectedTradeItem(trade);
    setTradeItemOpen(true);
    setGridColSettings('grid-cols-2x gap-4')
  };

  const closeTradeItem = () => {
    console.log('togtoggleOpenPacketsgle');
    setTradeItemOpen(false);
  };

  return (
    <TradingContext.Provider
      value={{
        openTradeItem,
        closeTradeItem,
        selectedTradeItem,
        tradeItemOpen,
        gridColSettings,
        setSelectedTradeItem,
        setGridColSettings,
      }}
    >
      {children}
    </TradingContext.Provider>
  );
};

export default TradingContextProvider;
