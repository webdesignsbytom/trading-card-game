import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Api
import client from '../../api/client';
// Components
import LeaderboardContainer from './LeaderboardContainer';
import FanstasyButton from '../utils/FantasyButton';
// Constants
import {
  BATTLE_REQUESTS_PAGE_URL,
  BATTLE_USER_SEARCH_API,
  CREATE_BATTLE_REQ_API,
} from '../../utils/Constants';
// Context
import { useUser } from '../../context/UserContext';
// Hooks
import useNavigateToPage from '../../hooks/useNavigateToPage';

function StartNewBattleComponent() {
  const { user } = useUser();

  const [searchQuery, setSearchQuery] = useState({ username: '' });
  const [notFoundUser, setNotFoundUser] = useState(false);
  const [battlePartnerFound, setBattlePartnerFound] = useState(null);

  const navigateToPage = useNavigateToPage();

  const searchForUser = () => {
    setNotFoundUser(false);

    client
      .get(`${BATTLE_USER_SEARCH_API}/${searchQuery.username}`)
      .then((res) => {
        setBattlePartnerFound(res.data.data.battleUser);
      })
      .catch((err) => {
        console.error('Unable to find User', err);
        if (err.response.statusText === 'Not Found') {
          setNotFoundUser(true);
        }
      });
  };

  const handleChange = (event) => {
    const { value } = event.target;

    setSearchQuery({
      ...setSearchQuery,
      username: value,
    });
  };

  const createBattleRequestHandler = (event) => {
    event.preventDefault();

    const battleData = {
      senderId: user.id,
      receiverId: battlePartnerFound.id,
      senderUsername: user.profile.username,
      receiverUsername: battlePartnerFound.username,
    };

    client
      .post(CREATE_BATTLE_REQ_API, battleData)
      .then((res) => {
        navigateToPage(BATTLE_REQUESTS_PAGE_URL);
      })
      .catch((err) => {
        console.error('Unable to create battle request', err);
      });
  };

  const cancelRequest = () => {
    setSearchQuery({ username: '' });
    setNotFoundUser(false);
    setBattlePartnerFound(null);
  };

  return (
    <section className='grid p-4 bg-main-colour main__bg rounded-lg'>
      <section className='grid md:grid-cols-rev'>
        {/* Main container */}
        <section className='grid items-center gap-4 w-full py-4'>
          <div
            className={`grid ${
              battlePartnerFound ? 'grid-rows-2' : 'pb-10'
            } w-full`}
          >
            <section>
              <div className='grid justify-center mb-8'>
                <Link
                  to={BATTLE_REQUESTS_PAGE_URL}
                  className='styled-button px-4 py-2'
                >
                  <span className='text-sm font-semibold'>
                    VIEW OPEN BATTLE REQUESTS
                  </span>
                </Link>
              </div>
              <section className='mb-2'>
                <div className='text-center'>
                  <h3 className='text-xl font-semibold'>
                    Search Users To Fight
                  </h3>
                </div>
              </section>
              <section className='grid h-fit'>
                <div className='text-center flex-wrap'>
                  <p>Enter the user name of </p>
                  <p className='-mt-2'>who you wish to fight with</p>
                </div>

                <div className='grid items-center justify-center py-4 px-2'>
                  <input
                    onChange={handleChange}
                    className='rounded px-1 py-1 w-full'
                    type='text'
                    name='username'
                    id='username'
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
                <div className='grid items-center justify-center my-4'>
                  <button
                    className='styled-button px-4 py-1 text-xl'
                    onClick={searchForUser}
                  >
                    Find User
                  </button>
                </div>
              </section>
            </section>

            {/* Found user and create battle component */}
            {battlePartnerFound && (
              <section className='grid w-full h-full px-10 my-auto'>
                <article className='grid grid-rows-reg bg-white main__bg p-2 border-main-border border-2 border-solid rounded-lg shadow-xl'>
                  <div className='text-center py-1'>
                    <h3 className='font-bold font-fantasy text-2xl'>
                      Create Battle Request
                    </h3>
                  </div>

                  {/* main content */}
                  <div className='grid grid-rows-rev gap-2'>
                    <div className='grid md:grid-cols-[1fr_auto_1fr] w-full'>
                      {/* Player */}
                      <section className='grid w-full'>
                        <div className='grid items-center justify-center text-center w-full text__stroke'>
                          <span className='text-center uppercase font-fantasy text-5xl text-main-colour'>
                            {user?.profile.username}
                          </span>
                        </div>
                      </section>
                      <section className='grid items-center w-fit text__stroke'>
                        <span className='text-center uppercase text-white font-fantasy text-5xl '>
                          VS
                        </span>
                      </section>
                      {/* Opponent */}
                      <section className='grid'>
                        <div className='grid items-center justify-center text-center text__stroke'>
                          <span className='text-center uppercase font-fantasy text-5xl text-red-600'>
                            {battlePartnerFound.username}
                          </span>
                        </div>
                      </section>
                    </div>

                    {/* Buttons */}
                    <div className='grid md:grid-cols-2 gap-2 h-fit justify-between px-10 py-2'>
                      <button
                        className='styled-button px-4 py-1 text-xl'
                        onClick={cancelRequest}
                      >
                        <span className='text-red-600'>Cancel</span>
                      </button>
                      <button
                        className='styled-button px-4 py-1 text-xl'
                        onClick={createBattleRequestHandler}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </article>
              </section>
            )}
          </div>
        </section>

        {/* Leaderboard */}
        <section className='grid w-full h-full'>
          <LeaderboardContainer />
        </section>
      </section>
    </section>
  );
}

export default StartNewBattleComponent;
