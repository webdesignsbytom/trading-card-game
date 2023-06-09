import React, { useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import UserOverviewAdminComponent from '../../components/admin/UserOverviewAdminComponent';
import CardOverviewAdminComponent from '../../components/admin/CardOverviewAdminComponent';
import ErrorOverviewAdminComponent from '../../components/admin/ErrorOverviewAdminComponent';

function AdminPage() {
    const [userComponentSelected, setUserComponentSelected] = useState(false)
    const [cardComponentSelected, setCardComponentSelected] = useState(true)
    const [errorComponentSelected, setErrorComponentSelected] = useState(false)

  return (
    <div className='bg-black main__bg h-screen grid'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid p-3'>
          <div className='outline outline-red-700 outline-4 rounded-xl p-2 h-full grid grid-rows-reg bg-white main__bg'>
            <section className='grid grid-cols-reg h-fit'>
              <div className='grid justify-start p-2 items-center text-left'>
                <h2 className='text-2xl font-semibold'>ADMIN</h2>
              </div>

              <div className='grid justify-end grid-flow-col gap-4 items-center'>
                <div>
                  <button className='outline outline-2 outline-black bg-blue-500 hover:bg-blue-700 active:scale-95 p-2 text-white rounded-xl'>USERS</button>
                </div>
                <div>
                  <button className='outline outline-2 outline-black bg-blue-500 hover:bg-blue-700 active:scale-95 p-2 text-white rounded-xl'>CARDS</button>
                </div>
                <div>
                  <button className='outline outline-2 outline-black bg-blue-500 hover:bg-blue-700 active:scale-95 p-2 text-white rounded-xl'>ERRORS</button>
                </div>
              </div>
            </section>

            {/* Main */}
            <section className='grid bg-blue-100 rounded-xl mt-2 overflow-hidden'>
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
