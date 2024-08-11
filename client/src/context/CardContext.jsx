import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Api
import client from '../api/client';
// Constants
import {
  CARDS_IN_BOX_PAGE_URL,
  GET_ALL_CARDS_API,
  OPEN_BOX_API,
  OPEN_PACK_API,
} from '../utils/Constants';
// Context
import { UserContext } from './UserContext';

export const CardContext = React.createContext();

const CardContextProvider = ({ children }) => {
  const { user, setUser } = useContext(UserContext);
  const [allCardsMasterCopy, setAllCardsMasterCopy] = useState([]);
  const [userCardsArray, setUserCardsArray] = useState([]);

  const [isOpening, setIsOpening] = useState(false);

  const [viewCard, setViewCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [selectedPack, setSelectedPack] = useState({});
  const [selectedBox, setSelectedBox] = useState({});

  const [returnedOpenPack, setReturnedOpenPack] = useState([]);
  const [returnedOpenBox, setReturnedOpenBox] = useState([]);
  const [toggleOpeningPackDiplay, setToggleOpeningPackDiplay] = useState(false);

  console.log('returnedOpenBox', returnedOpenBox);

  let navigate = useNavigate();

  useEffect(() => {
    client
      .get(GET_ALL_CARDS_API)
      .then((res) => {
        const allCards = res.data.data.cards;

        setAllCardsMasterCopy(allCards);
        if (user) {
          // Extract user's card IDs
          const userCardIds = user.cards.map((card) => card.cardId);
          // Filter the full list of cards to find the ones the user owns
          const userOwnedCards = allCards.filter((card) =>
            userCardIds.includes(card.id)
          );
          // Set the userCardsArray with the user's cards
          setUserCardsArray(userOwnedCards);
        }
      })
      .catch((err) => {
        console.error('Unable to retrieve all cards', err);
      });
  }, [user, returnedOpenPack]);

  const toggleOpeningNewPack = (pack) => {
    setSelectedPack(pack);

    const data = { packId: pack.id, userId: user.id };

    client
      .patch(OPEN_PACK_API, data, true)
      .then((res) => {
        setReturnedOpenPack(res.data.data.cards);
        setToggleOpeningPackDiplay(!toggleOpeningPackDiplay);
        setUser(res.data.data.updatedUser);
      })

      .catch((err) => {
        console.error('Unable to open pack', err);
      });
  };

  const toggleOpeningNewBox = (box) => {
    setIsOpening(true)
    setSelectedBox(box);

    const data = { boxId: box.id, userId: user.id };

    client
      .patch(OPEN_BOX_API, data, true)
      .then((res) => {
        console.log('res.data', res.data.data.cards);
        setReturnedOpenBox(res.data.data.cards);
        navigate(CARDS_IN_BOX_PAGE_URL, { state: box });
        setIsOpening(false)
      })

      .catch((err) => {
        console.error('Unable to open box', err);
        setIsOpening(false)
      });
  };

  return (
    <CardContext.Provider
      value={{
        userCardsArray,
        setUserCardsArray,
        toggleOpeningNewPack,
        setReturnedOpenPack,
        returnedOpenPack,
        allCardsMasterCopy,
        returnedOpenBox,
        setReturnedOpenBox,
        toggleOpeningNewBox,
        isOpening,
        setIsOpening,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
