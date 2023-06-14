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
import client from '../../utils/client';
import { ToggleContext } from '../../context/ToggleContext';

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
      .get(`/con-cards/card/get-by-id/${value}`)
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
    <div className='bg-black main__bg h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid h-full grid-rows-reg overflow-hidden'>
          <section className='p-2 lg:p-4 grid lg:grid-cols-2 h-fit gap-2 lg:gap-6'>
            <article className='grid h-full'>
              <div className='bg-red-500 nav__bg outline outline-4 outline-black rounded p-2'>
              <h1 className='text-center text-4xl font-extrabold text__stroke font-gasoek tracking-wide'>
                <span className='text-blue-600'>TRADING</span>
              </h1>              </div>
            </article>
            <section className='grid h-full'>
              <div className='bg-red-500 font-semibold w-full nav__bg outline outline-4 outline-black rounded p-2 grid lg:justify-end grid-flow-col gap-2 lg:gap-4'>
                <div className=''>
                  <button
                    onClick={goToUpdatedTrade}
                    className='bg-blue-600 hover:bg-blue-800 active:scale-95 main__bg no__highlights py-1 px-1 w-full lg:py-2 lg:px-4 rounded-xl outline outline-2 outline-black'
                  >
                    Updates
                  </button>
                </div>
                <div className=''>
                  <button
                    onClick={toggleOpenTrades}
                    className='bg-blue-600 hover:bg-blue-800 active:scale-95 main__bg no__highlights py-1 px-1 w-full lg:py-2 lg:px-4 rounded-xl outline outline-2 outline-black'
                  >
                    Open Trades
                  </button>
                </div>
                <div>
                  <button
                    onClick={toggleOpenCreateTrade}
                    className='bg-blue-600 hover:bg-blue-800 active:scale-95 main__bg no__highlights py-1 px-1 w-full lg:py-2 lg:px-4 rounded-xl outline outline-2 outline-black'
                  >
                    Create
                  </button>
                </div>
              </div>
            </section>
          </section>

          <div className='grid overflow-hidden'>
            <section className='grid w-full overflow-hidden'>
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
              {openTradeComponentSelected && !tradeItemOpen && (
                <OpenRequestsListComponent />
              )}
              {tradeItemOpen && <OpenTradeComponent />}
            </section>
          </div>
        </main>
      </section>
    </div>
  );
}

export default TradingPage;
