import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Api
import client from '../../api/client';
// Components
import Navbar from '../../components/nav/Navbar';
import BattlePageHeader from '../../components/battles/BattlePageHeader';
import BattlesRequestsComponent from '../../components/battles/BattlesRequestsComponent';
import { HelmetItem } from '../../components/utils/HelmetItem';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import { useUser } from '../../context/UserContext';
// Constants
import {
  BATTLES_PAGE_URL,
  CompanyName,
  GET_USER_BATTLE_REQ_API,
} from '../../utils/Constants';
// Data
import {
  battlesRequestsPageAdditionalMeta,
  battlesRequestsPageStructuredData,
} from '../../utils/data/PageData';

function BattlesRequestsPage() {
  const { user } = useUser();
  const { setActiveNav } = useContext(ToggleContext);

  const [foundBattleRequests, setFoundBattleRequests] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    setActiveNav(BATTLES_PAGE_URL);
  }, []);

  useEffect(() => {
    client
      .get(`${GET_USER_BATTLE_REQ_API}/${user.id}`)
      .then((res) => {
        console.log(
          'res.data.data.battleRequests',
          res.data.data.battleRequests
        );
        setFoundBattleRequests(res.data.data.battleRequests);
      })
      .catch((err) => {
        console.error('Unable to retrieve all battles for user', err);
      });
  }, []);

  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName='Battle Requests'
        desc={`Manage your battle requests in ${CompanyName}. Accept challenges and engage in thrilling battles.`}
        keywords={`battle requests, multiplayer battles, game challenges, ${CompanyName}`}
        additionalMeta={battlesRequestsPageAdditionalMeta}
        structuredData={battlesRequestsPageStructuredData}
      />

      {/* Page */}
      <div className='h-screen grid md:overflow-hidden w-full'>
        <section className='grid h-full lg:overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
          <Navbar />
          <main className='bg-black main__bg p-4 grid grid-rows-reg gap-2 md:overflow-hidden'>
            {/* Header */}
            <BattlePageHeader />

            <div className='grid h-full bg-white main__bg md:overflow-hidden rounded'>
              {foundBattleRequests < 0 ? (
                <div className='grid items-center justify-center'>
                  <span className='font-fantasy text-5xl tracking-wider'>
                    NO REQUESTS
                  </span>
                </div>
              ) : (
                <BattlesRequestsComponent />
              )}
            </div>
          </main>
        </section>
      </div>
    </>
  );
}

export default BattlesRequestsPage;
