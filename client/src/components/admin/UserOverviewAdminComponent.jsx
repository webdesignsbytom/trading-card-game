import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// API
import client from '../../api/client';
import { deleteUserApiRequest } from '../../api/DeleteRequests'

function UserOverviewAdminComponent() {
  const [allUsersArray, setAllUsersArray] = useState([]);
  const [searchQuery, setSearchQuery] = useState({ username: '' });
  const [foundUser, setFoundUser] = useState({});
  const [notFoundUser, setNotFoundUser] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    client
      .get(`/users/all-users`)
      .then((res) => {
        setAllUsersArray(res.data.data.users);
      })
      .catch((err) => {
        console.error('Unable to retrieve all users', err);
      });
  }, []);

  const handleSearchChange = (event) => {
    const { value } = event.target;

    setSearchQuery({
      ...setSearchQuery,
      username: value,
    });
  };

  const searchForUser = () => {
    setNotFoundUser(false);

    client
      .get(`/users/user/username/${searchQuery.username}`)
      .then((res) => {
        setFoundUser(res.data.data.user);
      })
      .catch((err) => {
        console.error('Unable to find User', err);
        if (err.response.statusText === 'Not Found') {
          setNotFoundUser(true);
        }
      });
  };

  const openUserOverview = (user) => {
    navigate('/admin/user-overview', { state: user });
  }

  return (
    <section className='grid h-full overflow-hidden grid-rows-reg lg:px-2 pb-2'>
      <section className='grid grid-flow-col h-fit'>
        <div className='grid justify-start items-center'>
          <h2 className='text-sm lg:text-2xl font-semibold p-2'>Users Overview</h2>
        </div>
        <div className='grid justify-end items-center'>
          <div className='grid relative items-center justify-center p-1'>
            <input
              className='rounded px-1'
              type='text'
              name='searchUsers'
              id='searchUsers'
              onChange={handleSearchChange}
              placeholder='Search all users...'
            />
            <div onClick={searchForUser} className='absolute h-fit w-fit rounded active:scale-95 hover:bg-blue-700 bg-blue-400 px-2 right-0'>?</div>
          </div>
        </div>
      </section>
      <section className='grid h-full overflow-hidden py-2'>
        <div className='grid h-full overflow-hidden overflow-y-scroll'>
          {allUsersArray?.map((user, index) => {
            return (
              <div
                key={index}
                className='grid grid-cols-2 border-b-2 w-full items-center bg-gray-50 border-black border-solid px-1 lg:px-2 text-xs lg:text-base'
              >
                <div className='grid grid-cols-2'>
                  <span>{user.profile.username}</span>
                  <span>{user.email}</span>
                </div>
                <div className='grid grid-flow-col justify-end px-1 gap-2 w-full'>
                  <span>
                    <button 
                    onClick={() => openUserOverview(user)}
                    className='bg-green-500 px-1 text-white font-semibold outline-black outline outline-2 rounded'>
                      View/Edit
                    </button>
                  </span>
                  <span>
                    <button
                      onClick={() => deleteUserApiRequest(user, setAllUsersArray)}
                      className='bg-red-700 px-1 text-white font-semibold outline-black outline outline-2 rounded'
                    >
                      Delete
                    </button>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}

export default UserOverviewAdminComponent;
