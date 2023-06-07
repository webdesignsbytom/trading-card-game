import React, { useContext, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import Card from '../../components/card/Card';
// Context
import { UserContext } from '../../context/UserContext';
// API
import client from '../../utils/client';
import CardTradeSelector from '../../utils/CardTradeSelector';
import CreateTradeComponent from '../../components/trade/CreateTradeComponent';
import OpenRequestsListComponent from '../../components/trade/OpenRequestsListComponent';

function TradingPage() {
  const { user } = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState({ username: '' });
  const [notFoundUser, setNotFoundUser] = useState(false);
  const [tradingPartner, setTradingPartner] = useState({});
  const [displayCard, setDisplayCard] = useState({});
  const [userCardToTrade, setUserCardToTrade] = useState(false);
  const [openTradeComponentSelected, setOpenTradeComponentSelected] =
    useState(false);

  console.log('tradingPartner', tradingPartner);
  console.log('userCardToTrade', userCardToTrade);
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
        console.log(res.data.data.user);
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
        console.log(res.data.data.card);
        setUserCardToTrade(res.data.data.cardInstance);
        setDisplayCard(res.data.data.card);
      })
      .catch((err) => {
        console.error('Unable to find card', err);
      });
  };

  const toggleOpenTrades = () => {
    setOpenTradeComponentSelected(true);
  }
  
  const toggleOpenTradesToClosed = () => {
    setOpenTradeComponentSelected(false);
  }

  return (
    <div className='bg-black main__bg h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid h-full grid-rows-reg'>
          <section className='p-4 grid grid-cols-2 h-fit gap-6'>
            <article className='grid h-full'>
              <div className='bg-red-500 nav__bg outline outline-4 outline-black rounded p-2'>
                <h1 className='text-3xl font-bold text-center'>Trading</h1>
              </div>
            </article>
            <section className='grid h-full'>
              <div className='bg-red-500 nav__bg outline outline-4 outline-black rounded p-2 grid justify-end grid-flow-col gap-4'>
                <div className=''>
                  <button onClick={toggleOpenTrades} className='bg-blue-600 hover:bg-blue-800 active:scale-95 main__bg no__highlights py-2 px-4 rounded-xl outline outline-2 outline-black'>
                    Open Trades
                  </button>
                </div>
                <div>
                  <button onClick={toggleOpenTradesToClosed} className='bg-blue-600 hover:bg-blue-800 active:scale-95 main__bg no__highlights py-2 px-4 rounded-xl outline outline-2 outline-black'>
                    Create Trade
                  </button>
                </div>
              </div>
            </section>
          </section>

          <div className='grid'>
            <section className='grid grid-rows-1 grid-cols-2x px-4 mb-4 gap-4'>
              {!openTradeComponentSelected && (
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
              {openTradeComponentSelected && <OpenRequestsListComponent />}
            </section>
          </div>
        </main>
      </section>
    </div>
  );
}

export default TradingPage;
