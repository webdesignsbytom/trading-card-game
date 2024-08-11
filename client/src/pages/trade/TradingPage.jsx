import React, { useContext, useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import CreateTradeComponent from '../../components/trade/CreateTradeComponent';
import OpenRequestsListComponent from '../../components/trade/OpenRequestsListComponent';
import OpenTradesComponent from '../../components/trade/OpenTradesComponent';
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
import CardTradeSelector from '../../utils/cards/CardTradeSelector';
// Images
import TradingImage from '../../assets/images/backgrounds/trading_card_monster_cards_user_trade.png';

function TradingPage() {
  const { user } = useContext(UserContext);
  const { setActiveNav } = useContext(ToggleContext);
  const {
    userCardToTrade,
    setUserCardToTrade,
    userTradeCardId,
    setUserTradeCardId,
    toggleOpenTrades,
    openMyTradesComponent,
    tradingDispayComponent,
    setTradingDispayComponent,
  } = useContext(TradingContext);
  const { allCardsMasterCopy } = useContext(CardContext);

  const [searchQuery, setSearchQuery] = useState({ username: '' });
  const [notFoundUser, setNotFoundUser] = useState(false);
  const [tradingPartner, setTradingPartner] = useState({});
  const [displayCard, setDisplayCard] = useState({});
  const [OpenTradesComponentSelected, setOpenTradesComponentSelected] =
    useState(false);

  useEffect(() => {
    setActiveNav(TRADING_PAGE_URL);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTradingDispayComponent('my_trades');
    }, 1500);
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

  const handleChangeCard = (event) => {
    const selectedCard = JSON.parse(event.target.value);

    // Find the card in the master list
    const foundCard = allCardsMasterCopy.find(
      (card) => card.cardName === selectedCard.cardName
    );
    // // Set the found card as the userCardToTrade
    setUserCardToTrade(foundCard || null); // If no card is found, set it to null
    setUserTradeCardId(selectedCard.id); // set id of your card instance
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
            openMyTradesComponent={openMyTradesComponent}
          />

          <section className='grid grid-cols-rev gap-2 w-full h-full overflow-hidden'>
            {tradingDispayComponent === 'my_trades' ? (
              <section className='grid w-full overflow-hidden'>
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
              </section>
            ) : tradingDispayComponent === 'open' ? (
              <OpenTradesComponent />
            ) : null}

            {/* Banner section */}
            <section
              className='hiddem lg:grid border-4 border-main-border border-solid rounded-xl p-2 min-w-[300px]'
              style={{
                backgroundImage: `url(${TradingImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            ></section>
          </section>
        </main>
      </section>
    </div>
  );
}

export default TradingPage;
