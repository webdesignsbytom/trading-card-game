import React, { useContext, useEffect, useState } from 'react';
// Api
import client from '../../api/client';
// Context
import { TradingContext } from '../../context/TradingContext';
import { CardContext } from '../../context/CardContext';
// Components
import CreateTradeComponent from './CreateTradeComponent';
import OpenTradesComponent from './OpenTradesComponent';
// Images
import TradingImage from '../../assets/images/backgrounds/trading-card-monster-cards-user-trade.png';

function TradingPageMainContainer() {
  const {
    userCardToTrade,
    setUserCardToTrade,
    setUserTradeCardId,
    tradingDispayComponent,
    setTradingDispayComponent,
  } = useContext(TradingContext);
  const { allCardsMasterCopy } = useContext(CardContext);

  const [searchQuery, setSearchQuery] = useState({ username: '' });
  const [notFoundUser, setNotFoundUser] = useState(false);
  const [tradingPartner, setTradingPartner] = useState({});
  const [displayCard, setDisplayCard] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setTradingDispayComponent('my_trades');
    }, 1500);
  }, []);

  const goToUpdatedTrade = () => {};

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

  return (
    <main className='grid h-full overflow-hidden gap-2 p-4'>
      <div className='grid grid-cols-rev gap-2 w-full h-full overflow-hidden'>
        {tradingDispayComponent === 'my_trades' ? (
          <section className='grid w-full overflow-hidden'>

            {/* Create trade */}
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
            // Open trades
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
      </div>
    </main>
  );
}

export default TradingPageMainContainer;
