import React, { useContext, useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import CreateTradeComponent from '../../components/trade/CreateTradeComponent';
import OpenRequestsListComponent from '../../components/trade/OpenRequestsListComponent';
import OpenTradeComponent from '../../components/trade/OpenTradeComponent';
import TradingPageHeader from '../../components/trade/TradingPageHeader';
// Context
import { UserContext } from '../../context/UserContext';
import { TradingContext } from '../../context/TradingContext';
import { CardContext } from '../../context/CardContext';
import { ToggleContext } from '../../context/ToggleContext';
// API
import client from '../../api/client';
// Constants
import { TRADING_PAGE_URL } from '../../utils/Constants';

function TradingPage() {
  const { user } = useContext(UserContext);
  const { setActiveNav } = useContext(ToggleContext);
  const {
    userCardToTrade,
    setUserCardToTrade,
    userTradeCardId,
    setUserTradeCardId,
  } = useContext(TradingContext);
  const { allCardsMasterCopy } = useContext(CardContext);

  const [searchQuery, setSearchQuery] = useState({ username: '' });
  const [notFoundUser, setNotFoundUser] = useState(false);
  const [tradingPartner, setTradingPartner] = useState({});
  const [displayCard, setDisplayCard] = useState({});
  const [openTradeComponentSelected, setOpenTradeComponentSelected] =
    useState(false);

  useEffect(() => {
    setActiveNav(TRADING_PAGE_URL);
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;

    setSearchQuery({
      ...setSearchQuery,
      username: value,
    });
  };

  const selectUserForTrade = (event) => {
    // send trade request
  };

  const searchForUser = () => {
    setNotFoundUser(false);

    client
      .get(`/users/user/username/${searchQuery.username}`)
      .then((res) => {
        setTradingPartner(res.data.data.user);
      })
      .catch((err) => {
        console.error('Unable to find User', err);
        if (err.response.statusText === 'Not Found') {
          setNotFoundUser(true);
        }
      });
  };

  console.log('allCardsMasterCopy', allCardsMasterCopy);
  console.log('userCardToTrade', userCardToTrade);

  const handleChangeCard = (event) => {
    const selectedCard = JSON.parse(event.target.value);

    console.log('Selected Card Name:', selectedCard.cardName);
    console.log('Selected Card Id:', selectedCard.id);

    // Find the card in the master list
    const foundCard = allCardsMasterCopy.find(
      (card) => card.cardName === selectedCard.cardName
    );

    console.log('Found Card:', foundCard);

    // // Set the found card as the userCardToTrade
    setUserCardToTrade(foundCard || null); // If no card is found, set it to null
    setUserTradeCardId(selectedCard.id); // set id of your card instance
  };

  const toggleOpenTrades = () => {
    setOpenTradeComponentSelected(true);
  };

  const toggleOpenCreateTrade = () => {
    setOpenTradeComponentSelected(false);
  };

  const goToUpdatedTrade = () => {};

  return (
    <div className='bg-secondary-colour main__bg h-screen grid lg:overflow-hidden'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid h-full grid-rows-reg overflow-hidden gap-2 p-4'>
          {/* Header */}
          <TradingPageHeader
            goToUpdatedTrade={goToUpdatedTrade}
            toggleOpenTrades={toggleOpenTrades}
            toggleOpenCreateTrade={toggleOpenCreateTrade}
          />

          <section className='grid w-full h-full overflow-hidden'>
            <section className='grid  w-full overflow-hidden'>
              {!openTradeComponentSelected && (
                <CreateTradeComponent
                  handleChange={handleChange}
                  tradingPartner={tradingPartner}
                  selectUserForTrade={selectUserForTrade}
                  handleChangeCard={handleChangeCard}
                  notFoundUser={notFoundUser}
                  searchForUser={searchForUser}
                  displayCard={displayCard}
                  userCardToTrade={userCardToTrade}
                />
              )}
            </section>
          </section>
        </main>
      </section>
    </div>
  );
}

export default TradingPage;
