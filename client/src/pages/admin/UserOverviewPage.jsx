import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
// API
import { deleteUserApiRequestNoReturn } from '../../api/DeleteRequests';

function UserOverviewPage() {
  const [deletedUserData, setDeletedUserData] = useState(false);

  const location = useLocation();
  const userData = location.state;

  return (
    <div className='bg-black main__bg h-screen grid overflow-hidden'>
      <section className='grid h-full overflow-hidden grid-rows-reg lg:grid-rows-none lg:grid-cols-reg'>
        <Navbar />
        <main className='grid p-3 overflow-hidden'>
          <div className='outline outline-red-700 outline-4 rounded-xl p-2 h-full grid grid-rows-reg bg-white main__bg overflow-hidden'>
            <section className='grid grid-cols-reg h-fit'>
              <div className='grid justify-start p-2 items-center text-left'>
                <h2 className='text-2xl font-semibold'>User Overview</h2>
              </div>

              <div className='grid justify-end grid-flow-col gap-4 items-center'>
                <div>
                  <button className='outline outline-2 outline-black bg-blue-500 hover:bg-blue-700 active:scale-95 p-2 text-white rounded-xl'>
                    USERS
                  </button>
                </div>
                <div>
                  <button className='outline outline-2 outline-black bg-blue-500 hover:bg-blue-700 active:scale-95 p-2 text-white rounded-xl'>
                    CARDS
                  </button>
                </div>
                <div>
                  <button className='outline outline-2 outline-black bg-blue-500 hover:bg-blue-700 active:scale-95 p-2 text-white rounded-xl'>
                    Event
                  </button>
                </div>
              </div>
            </section>

            {/* EDITING */}
            <section className='grid mt-2 w-full'>
              <section className='bg-blue-400 w-1/2 mx-auto p-2 rounded'>
                <div>
                  <div>
                    <span>
                      <span className='font-semibold'>User ID:</span>{' '}
                      {userData.id}
                    </span>
                  </div>
                  <div>
                    <span>
                      <span className='font-semibold'>Username:</span>{' '}
                      {userData.profile.username}
                    </span>
                  </div>
                  <div>
                    <span>
                      <span className='font-semibold'>Email:</span>{' '}
                      {userData.email}
                    </span>
                  </div>
                  <div>
                    <span>
                      <span className='font-semibold'>Role:</span>{' '}
                      {userData.role}
                    </span>
                  </div>
                  <div>
                    <span>
                      <span className='font-semibold'>Active:</span>{' '}
                      {JSON.stringify(userData.isActive)}
                    </span>
                  </div>
                  <div>
                    <span>
                      <span className='font-semibold'>Verified:</span>{' '}
                      {JSON.stringify(userData.isVerified)}
                    </span>
                  </div>
                  <div>
                    <span>
                      <span className='font-semibold'>Last login:</span>{' '}
                      {userData.lastLoggedIn}
                    </span>
                  </div>
                  <div>
                    <span>
                      <span className='font-semibold'>Created At:</span>{' '}
                      {userData.createdAt}
                    </span>
                  </div>
                  <div>
                    <span>
                      <span className='font-semibold'>
                        Collected Starter Packs:
                      </span>{' '}
                      {JSON.stringify(userData.collectedStartedPacks)}
                    </span>
                  </div>
                </div>

                {/* Profile */}
                <section>
                  <div className='mt-2'>
                    <h3>Profile</h3>
                  </div>
                  <div>
                    <span>
                      <span className='font-semibold'>First Name:</span>{' '}
                      {userData.profile.firstName}
                    </span>
                  </div>
                  <div>
                    <span>
                      <span className='font-semibold'>Last Name:</span>{' '}
                      {userData.profile.lastName}
                    </span>
                  </div>
                  <div>
                    <span>
                      <span className='font-semibold'>Country:</span>{' '}
                      {userData.profile.country}
                    </span>
                  </div>
                  <div>
                    <span>
                      <span className='font-semibold'>Gender:</span>{' '}
                      {userData.profile.gender}
                    </span>
                  </div>
                  <div>
                    <span>
                      <span className='font-semibold'>Dob:</span>{' '}
                      {userData.profile.dob}
                    </span>
                  </div>
                  <div>
                    <span>
                      <span className='font-semibold'>Private:</span>{' '}
                      {JSON.stringify(userData.profile.isPrivate)}
                    </span>
                  </div>
                  <div className='grid'>
                    <span className='grid'>
                      <span className='font-semibold'>Image:</span>{' '}
                      <img
                        className='w-24 object-cover'
                        src={userData.profile.profileimageUrl}
                        alt='profile'
                      />
                    </span>
                  </div>
                </section>

                {/* delete */}
                <section className='mt-4 grid grid-flow-col w-fit gap-4'>
                  <div>
                    <button className='outline outline-2 outline-black p-1 active:scale-95 hover:bg-blue-700 bg-blue-500 text-white font-semibold'>
                      Email User
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => deleteUserApiRequestNoReturn(userData, setDeletedUserData)}
                      className='outline outline-2 outline-black p-1 active:scale-95 hover:bg-red-900 bg-red-700 text-white font-semibold'
                    >
                      Delete User
                    </button>
                  </div>

                  <div>
                    {deletedUserData && (
                        <div className='grid text-center outline outline-2 outline-black bg-red-700'>
                           <span className='text-white'>USER DELETED</span>
                        </div>
                    )}
                  </div>
                </section>
              </section>
            </section>
          </div>
        </main>
      </section>
    </div>
  );
}

export default UserOverviewPage;
