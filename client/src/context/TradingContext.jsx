import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
// Api
import client from '../api/client';
// Context
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';
import { CREATE_OPEN_TRADE_API } from '../utils/Constants';

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

  const [tradingDispayComponent, setTradingDispayComponent] = useState(null);

  useEffect(() => {
    setCreatedTrade({
      createdById: user.id,
      tradingCardId: userTradeCardId,
      cardName: userCardToTrade.cardName,
      cardId: userCardToTrade.id,
      creatorUsername: user?.profile?.username,
    });
  }, [userTradeCardId]);

  const createNewOpenTrade = () => {
    client
      .post(CREATE_OPEN_TRADE_API, createdTrade, false)
      .then((res) => {
        console.log(
          'res.data.data.createdOpenTrade',
          res.data.data.createdOpenTrade
        );
        toggleOpenTrades()
      })
      .catch((err) => {
        console.error('Unable to create open trade', err);
      });
  };

  const createTradeResponseOffer = () => {
    console.log('aaaaaaaaa');
  };

  const toggleOpenTrades = () => {
    setTradingDispayComponent('open');
  };

  const openMyTradesComponent = () => {
    setTradingDispayComponent('my_trades');
  };

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
        createNewOpenTrade,
        createTradeResponseOffer,
        toggleOpenTrades,
        openMyTradesComponent,
        tradingDispayComponent,
        setTradingDispayComponent,
      }}
    >
      {children}
    </TradingContext.Provider>
  );
};

export default TradingContextProvider;
