import React, { useContext, useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import CreateTradeComponent from '../../components/trade/CreateTradeComponent';
import OpenRequestsListComponent from '../../components/trade/OpenRequestsListComponent';
import OpenTradeComponent from '../../components/trade/OpenTradeComponent';
// Context
import { UserContext } from '../../context/UserContext';
import { TradingContext } from '../../context/TradingContext';
// API
import client from '../../api/client';
import { ToggleContext } from '../../context/ToggleContext';
import TradingPageHeader from '../../components/trade/TradingPageHeader';

function TradingPage() {
  const { user } = useContext(UserContext);
  const { setActiveNav } = useContext(ToggleContext);
  const { tradeItemOpen } = useContext(TradingContext);

  const [searchQuery, setSearchQuery] = useState({ username: '' });
  const [notFoundUser, setNotFoundUser] = useState(false);
  const [tradingPartner, setTradingPartner] = useState({});
  const [displayCard, setDisplayCard] = useState({});
  const [userCardToTrade, setUserCardToTrade] = useState(false);
  const [openTradeComponentSelected, setOpenTradeComponentSelected] =
    useState(false);

  useEffect(() => {
    setActiveNav('/trading');
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
    console.log('change');
    const { value } = event.target;
    console.log('value', value);

    client
      .get(`/mon-cards/card/get-by-id/${value}`)
      .then((res) => {
        setUserCardToTrade(res.data.data.cardInstance);
        setDisplayCard(res.data.data.card);
      })
      .catch((err) => {
        console.error('Unable to find card', err);
      });
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
              {!openTradeComponentSelected && !tradeItemOpen && (
                <CreateTradeComponent
                  handleChange={handleChange}
                  tradingPartner={tradingPartner}
                  selectUserForTrade={selectUserForTrade}
                  handleChangeCard={handleChangeCard}
                  notFoundUser={notFoundUser}
                  searchForUser={searchForUser}
                  displayCard={displayCard}
                />
              )}
              {/* {openTradeComponentSelected && !tradeItemOpen && (
                <OpenRequestsListComponent />
              )} */}
              {/* {tradeItemOpen && <OpenTradeComponent />} */}
            </section>
          </section>
        </main>
      </section>
    </div>
  );
}

export default TradingPage;
