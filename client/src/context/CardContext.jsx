import React from 'react';
import { useState } from 'react';

export const CardContext = React.createContext();

const CardContextProvider = ({ children }) => {
  const [userCardsArray, setUserCardsArray] = useState([]);

  return (
    <CardContext.Provider
      value={{
        userCardsArray,
        setUserCardsArray
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
