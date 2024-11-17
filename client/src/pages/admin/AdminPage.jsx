import React, { useContext, useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import UserOverviewAdminComponent from '../../components/admin/UserOverviewAdminComponent';
import CardOverviewAdminComponent from '../../components/admin/CardOverviewAdminComponent';
import ErrorOverviewAdminComponent from '../../components/admin/EventOverviewAdminComponent';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Constants
import { ADMIN_PAGE_URL, CompanyName } from '../../utils/Constants';
import { HelmetItem } from '../../components/utils/HelmetItem';

function AdminPage() {
  const { setActiveNav } = useContext(ToggleContext);

  const [selectedComponent, setSelectedComponent] = useState('cards');

  useEffect(() => {
    setActiveNav(ADMIN_PAGE_URL);
  }, []);

  const BUTTON_OPTIONS = [
    { label: 'USERS', action: () => setSelectedComponent('users') },
    { label: 'CARDS', action: () => setSelectedComponent('cards') },
    { label: 'EVENTS', action: () => setSelectedComponent('events') },
  ];

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'users':
        return <UserOverviewAdminComponent />;
      case 'cards':
        return <CardOverviewAdminComponent />;
      case 'events':
        return <ErrorOverviewAdminComponent />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Tab Data */}
      <HelmetItem PageName={'Admin'} desc={`Admin page of ${CompanyName}.`} />

      {/* Page */}
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
                  {BUTTON_OPTIONS.map(({ label, action }) => (
                    <div key={label}>
                      <button
                        onClick={action}
                        className='outline outline-2 outline-black bg-blue-500 hover:bg-blue-700 active:scale-95 p-2 text-white rounded-xl'
                      >
                        {label}
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* Main */}
              <section className='grid bg-blue-100 rounded-xl mt-2 h-full overflow-hidden'>
                {renderSelectedComponent()}
              </section>
            </div>
          </main>
        </section>
      </div>
    </>
  );
}

export default AdminPage;
