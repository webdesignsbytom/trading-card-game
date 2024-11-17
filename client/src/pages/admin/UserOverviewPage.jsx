import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';
// API
import { deleteUserHandlerApiRequestNoReturn } from '../../api/DeleteRequests';
// Constants
import { CompanyName } from '../../utils/Constants';

function UserOverviewPage() {
  const [deletedUserData, setDeletedUserData] = useState(false);
  const { state: userData } = useLocation();

  const buttons = ['USERS', 'CARDS', 'EVENT'];

  const userDetails = [
    { label: 'User ID', value: userData.id },
    { label: 'Username', value: userData.profile.username },
    { label: 'Email', value: userData.email },
    { label: 'Role', value: userData.role },
    { label: 'Active', value: userData.isActive },
    { label: 'Verified', value: userData.isVerified },
    { label: 'Last login', value: userData.lastLoggedIn },
    { label: 'Created At', value: userData.createdAt },
    { label: 'Collected Starter Packs', value: userData.collectedStartedPacks },
  ];

  const profileDetails = [
    { label: 'First Name', value: userData.profile.firstName },
    { label: 'Last Name', value: userData.profile.lastName },
    { label: 'Country', value: userData.profile.country },
    { label: 'Gender', value: userData.profile.gender },
    { label: 'Dob', value: userData.profile.dob },
    { label: 'Private', value: userData.profile.isPrivate },
  ];

  return (
    <>
      <HelmetItem
        PageName='User admin'
        desc={`User admin page of ${CompanyName}.`}
      />

      {/* Page */}
      <div className='bg-black main__bg h-screen grid overflow-hidden'>
        <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
          <Navbar />
          <main className='grid p-3 overflow-hidden'>
            <div className='outline outline-red-700 outline-4 rounded-xl p-2 h-full grid grid-rows-reg bg-white main__bg overflow-hidden'>
              <header className='grid grid-cols-reg h-fit p-2'>
                <h2 className='text-2xl font-semibold'>User Overview</h2>
                <div className='grid justify-end grid-flow-col gap-4'>
                  {buttons.map((btn, idx) => (
                    <button
                      key={idx}
                      className='outline outline-2 outline-black bg-blue-500 hover:bg-blue-700 active:scale-95 p-2 text-white rounded-xl'
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              </header>

              <section className='grid mt-2 w-full'>
                <div className='bg-blue-400 w-1/2 mx-auto p-4 rounded space-y-2'>
                  {userDetails.map((detail, idx) => (
                    <div key={idx}>
                      <span className='font-semibold'>{detail.label}:</span>{' '}
                      {JSON.stringify(detail.value)}
                    </div>
                  ))}

                  <h3 className='mt-4'>Profile</h3>
                  {profileDetails.map((detail, idx) => (
                    <div key={idx}>
                      <span className='font-semibold'>{detail.label}:</span>{' '}
                      {JSON.stringify(detail.value)}
                    </div>
                  ))}

                  <div className='mt-2'>
                    <span className='font-semibold'>Image:</span>
                    <img
                      className='w-24 object-cover mt-1'
                      src={userData.profile.profileimageUrl}
                      alt='profile'
                    />
                  </div>
                </div>

                <div className='mt-4 grid grid-flow-col w-fit gap-4'>
                  <button className='outline outline-2 outline-black p-1 active:scale-95 hover:bg-blue-700 bg-blue-500 text-white font-semibold'>
                    Email User
                  </button>
                  <button
                    onClick={() =>
                      deleteUserHandlerApiRequestNoReturn(
                        userData,
                        setDeletedUserData
                      )
                    }
                    className='outline outline-2 outline-black p-1 active:scale-95 hover:bg-red-900 bg-red-700 text-white font-semibold'
                  >
                    Delete User
                  </button>
                </div>

                {deletedUserData && (
                  <div className='grid text-center outline outline-2 outline-black bg-red-700 mt-2'>
                    <span className='text-white'>USER DELETED</span>
                  </div>
                )}
              </section>
            </div>
          </main>
        </section>
      </div>
    </>
  );
}

export default UserOverviewPage;
