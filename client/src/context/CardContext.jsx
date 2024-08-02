import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
// Api
import client from '../api/client';
// Constants
import { GET_ALL_CARDS_API } from '../utils/Constants';
// Context
import { UserContext } from './UserContext';

export const CardContext = React.createContext();

const CardContextProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [allCardsMasterCopy, setAllCardsMasterCopy] = useState([]);
  const [userCardsArray, setUserCardsArray] = useState([]);

  useEffect(() => {
    client
      .get(GET_ALL_CARDS_API)
      .then((res) => {
        const allCards = res.data.data.cards;
        setAllCardsMasterCopy(allCards);
        // Extract user's card IDs
        const userCardIds = user.cards.map((card) => card.cardId);
        // Filter the full list of cards to find the ones the user owns
        const userOwnedCards = allCards.filter((card) =>
          userCardIds.includes(card.id)
        );
        // Set the userCardsArray with the user's cards
        setUserCardsArray(userOwnedCards);
      })
      .catch((err) => {
        console.error('Unable to retrieve all cards', err);
      });
  }, []);

  return (
    <CardContext.Provider
      value={{
        userCardsArray,
        setUserCardsArray,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
