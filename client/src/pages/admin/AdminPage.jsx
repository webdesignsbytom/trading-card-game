import React, { useContext, useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import UserOverviewAdminComponent from '../../components/admin/UserOverviewAdminComponent';
import CardOverviewAdminComponent from '../../components/admin/CardOverviewAdminComponent';
import ErrorOverviewAdminComponent from '../../components/admin/EventOverviewAdminComponent';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function AdminPage() {
  const { setActiveNav } = useContext(ToggleContext);

  const [userComponentSelected, setUserComponentSelected] = useState(false);
  const [cardComponentSelected, setCardComponentSelected] = useState(true);
  const [errorComponentSelected, setErrorComponentSelected] = useState(false);

  
  useEffect(() => {
    setActiveNav('/admin');
  }, []);

  const openUsersOverview = () => {
    setCardComponentSelected(false);
    setErrorComponentSelected(false);
    setUserComponentSelected(true);
  };

  const openEventOverview = () => {
    setCardComponentSelected(false);
    setUserComponentSelected(false);
    setErrorComponentSelected(true);
  };

  const openCardsOverview = () => {
    setErrorComponentSelected(false);
    setUserComponentSelected(false);
    setCardComponentSelected(true);
  };

  return (
    <div className='bg-black main__bg h-screen grid overflow-hidden'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid p-3 overflow-hidden'>
          <div className='outline outline-red-700 outline-4 rounded-xl p-2 h-full grid grid-rows-reg bg-white main__bg overflow-hidden'>
            <section className='grid grid-cols-reg h-fit'>
              <div className='grid justify-start p-2 items-center text-left'>
                <h2 className='text-2xl font-semibold'>ADMIN</h2>
              </div>

              <div className='grid justify-end grid-flow-col gap-4 items-center'>
                <div>
                  <button
                    onClick={openUsersOverview}
                    className='outline outline-2 outline-black bg-blue-500 hover:bg-blue-700 active:scale-95 p-2 text-white rounded-xl'
                  >
                    USERS
                  </button>
                </div>
                <div>
                  <button
                    onClick={openCardsOverview}
                    className='outline outline-2 outline-black bg-blue-500 hover:bg-blue-700 active:scale-95 p-2 text-white rounded-xl'
                  >
                    CARDS
                  </button>
                </div>
                <div>
                  <button
                    onClick={openEventOverview}
                    className='outline outline-2 outline-black bg-blue-500 hover:bg-blue-700 active:scale-95 p-2 text-white rounded-xl'
                  >
                    EVENTS
                  </button>
                </div>
              </div>
            </section>

            {/* Main */}
            <section className='grid bg-blue-100 rounded-xl mt-2 h-full overflow-hidden'>
              {userComponentSelected && <UserOverviewAdminComponent />}
              {cardComponentSelected && <CardOverviewAdminComponent />}
              {errorComponentSelected && <ErrorOverviewAdminComponent />}
            </section>
          </div>
        </main>
      </section>
    </div>
  );
}

export default AdminPage;
