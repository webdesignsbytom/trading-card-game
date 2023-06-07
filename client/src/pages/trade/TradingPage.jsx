import React, { useContext, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import Card from '../../components/card/Card';
// Context
import { UserContext } from '../../context/UserContext';
// API
import client from '../../utils/client';
import CardTradeSelector from '../../utils/CardTradeSelector';

function TradingPage() {
  const { user } = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState({ username: '' });
  const [notFoundUser, setNotFoundUser] = useState(false);
  const [tradingPartner, setTradingPartner] = useState({});
  const [displayCard, setDisplayCard] = useState({});
  const [userCardToTrade, setUserCardToTrade] = useState(false);

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

  return (
    <div className='bg-black main__bg h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid h-full grid-rows-reg'>
          <section className='p-4 grid h-fit'>
            <article>
              <div className='bg-red-500 nav__bg outline outline-4 outline-black rounded p-2'>
                <h1 className='text-3xl font-bold text-center'>Trading</h1>
              </div>
            </article>
          </section>

          <section className='grid grid-rows-1 grid-cols-2x px-4 mb-4 gap-4'>
            <section className='bg-red-400 grid grid-rows-a1a main__bg outline outline-4 outline-black rounded-xl p-2'>
              {/* image and search */}
              <div className='grid grid-cols-aa'>
                <div className='top-4 left-4 w-1/2'>
                  <img
                    className='rounded-xl object-cover'
                    src={user?.profile?.profileImage}
                    alt='User profile'
                  />
                </div>

                <section className='grid items-center justify-center gap-4 w-full'>
                  <div className='grid h-fit'>
                    <div className='text-center flex-wrap'>
                      <p>Enter the user name of </p>
                      <p className='-mt-2'>who you wish to trade with</p>
                    </div>
                    <div className='grid items-center justify-center py-1 px-2'>
                      <input
                        onChange={handleChange}
                        className='rounded px-1 py-1'
                        type='text'
                        name='searchUsername'
                        id='searchUsername'
                        placeholder='Search username...'
                        required
                      />
                    </div>
                    {notFoundUser && (
                      <section className='px-4 my-2'>
                        <div className='text-center bg-white nav__bg outline outline-4 outline-black rounded p-2'>
                          <p className='text-red-600 font-semibold text-xl'>
                            User Not Found!
                          </p>
                        </div>
                      </section>
                    )}
                    <div className='grid items-center justify-center p-1'>
                      <button
                        onClick={searchForUser}
                        className='outline outline-2 outline-black bg-blue-600 main__bg py-2 px-4 my-2 rounded-xl'
                        type='submit'
                      >
                        <span className='text-xl font-semibold'>Find User</span>
                      </button>
                    </div>
                  </div>
                </section>
              </div>

              {/* select card to trade */}
              <section className='grid'>
                <div className='grid gap-2 mt-4 mb-2'>
                  <section className='bg-white main__bg py-1 px-2 h-fit rounded w-fit'>
                    <div>
                      <h5>Select a card to trade</h5>
                    </div>
                    <div>
                      <CardTradeSelector handleChange={handleChangeCard} />
                    </div>
                  </section>
                  <section className='grid w-min h-fit px-2'>
                    <Card cardData={displayCard} />
                  </section>
                </div>
              </section>
            </section>

            <section className='bg-red-400 main__bg outline outline-4 outline-black rounded-xl p-2'>
              {tradingPartner?.id && (
                <section>
                  <div>
                    <img
                      className='rounded-xl object-cover'
                      src={tradingPartner.profileImage}
                      alt='Trade partner profile'
                    />
                  </div>
                  <div className='text-center'>
                    <h4 className='text-xl font-semibold'>
                      {tradingPartner?.username}
                    </h4>
                  </div>
                  <div className='grid items-center justify-center p-1'>
                    <button
                      onClick={selectUserForTrade}
                      className='outline outline-2 outline-black bg-blue-600 main__bg py-2 px-4 my-2 rounded-xl'
                      type='submit'
                    >
                      <span className='text-xl font-semibold'>Select User</span>
                    </button>
                  </div>
                </section>
              )}
            </section>
          </section>
        </main>
      </section>
    </div>
  );
}

export default TradingPage;
