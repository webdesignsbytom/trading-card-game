import React from 'react';
import { useEffect, useState } from 'react';
// Api
import client from '../api/client';
// Utils
import LoggedInUser from '../utils/user/LoggedInUser';
// Data
import { tempUserData } from '../utils/user/TemporaryData';
// Constants
import { GET_USER_API } from '../utils/Constants';

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(tempUserData);
  console.log('user', user);

  const [token, setToken] = useState(
    localStorage.getItem(process.env.REACT_APP_USER_TOKEN) || ''
  );
  const [toggleCookiePolicy, setToggleCookiePolicy] = useState(false);

  useEffect(() => {
    const decodedUserData = LoggedInUser();

    if (decodedUserData !== null) {
      const userId = decodedUserData.id;
      client
        .get(`${GET_USER_API}/${userId}`)
        .then((res) => {
          setUser(res.data.data.user);
        })
        .catch((err) => {
          console.error('Unable to retrieve user data', err);
        });
    }

    const cookie = localStorage.getItem('CookiePolicy');

    if (cookie) {
      setToggleCookiePolicy(true);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        toggleCookiePolicy,
        setToggleCookiePolicy,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
