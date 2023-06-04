import React from 'react';
import { useEffect, useState } from 'react';
// Fetch
import client from '../utils/client';
// Context
export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 'a275cc11-caa5-4b47-b314-d8ff4c68856a',
  });

  const [token, setToken] = useState(
    localStorage.getItem(process.env.REACT_APP_USER_TOKEN) || ''
  );

  const [toggleCookiePolicy, setToggleCookiePolicy] = useState(false);

  console.log('usercontext', user);

  useEffect(() => {
    console.log('STARTER PACKS');
    client
      .get(`/users/user/id/${user.id}`)
      .then((res) => {
        setUser(res.data.data.user);
      })
      .catch((err) => {
        console.error('Unable to retrieve user data', err);
      });
  }, []);

  // useEffect(() => {
  //   const decodedUserData = LoggedInUser();

  //   if (decodedUserData) {
  //     const userId = decodedUserData.id;

  //     client
  //       .get(`/users/${userId}`)
  //       .then((res) => {
  //         setUser(res.data.data.user);
  //       })
  //       .catch((err) => {
  //         console.error('Unable to retrieve user data', err);
  //       });
  //   }

  //   const cookie = localStorage.getItem('CookiePolicy');

  //   if (cookie) {
  //     setToggleCookiePolicy(true);
  //   }
  // }, []);

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
