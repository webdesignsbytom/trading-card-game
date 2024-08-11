import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
// Api
import client from '../api/client';
// Context
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';

export const TradingContext = React.createContext();

const TradingContextProvider = ({ children }) => {
  const { user } = useContext(UserContext);

  const [selectedTradeItem, setSelectedTradeItem] = useState({});
  const [tradeTypeSelected, setTradeTypeSelected] = useState(null);

  // Create trade
  const [userCardToTrade, setUserCardToTrade] = useState(false);
  const [userTradeCardId, setUserTradeCardId] = useState(false);
  const [createdTrade, setCreatedTrade] = useState({
    createdById: user.id,
    tradingCardId: userTradeCardId || null,
  });

  useEffect(() => {
    setCreatedTrade({
      createdById: user.id,
      tradingCardId: userTradeCardId,
    });
  }, [userTradeCardId]);

  console.log('createdTrade', createdTrade);

  return (
    <TradingContext.Provider
      value={{
        selectedTradeItem,
        setSelectedTradeItem,
        tradeTypeSelected,
        setTradeTypeSelected,
        userCardToTrade,
        setUserCardToTrade,
        userTradeCardId,
        setUserTradeCardId,
      }}
    >
      {children}
    </TradingContext.Provider>
  );
};

export default TradingContextProvider;
