import React from 'react';
import { useEffect, useState } from 'react';
// Fetch
import client from '../utils/client';
// Context
export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: '',
    username: '',
    isVerified: false,
    cards: [],
  });
  const [token, setToken] = useState(
    localStorage.getItem(process.env.REACT_APP_USER_TOKEN) || ''
  );
  const [toggleCookiePolicy, setToggleCookiePolicy] = useState(false);

  console.log('usercontext', user);

  useEffect(() => {
    client
      .get(`/con-cards/all-cards`)
      .then((res) => {
        setUser({
          ...user,
          cards: res.data.data.cards,
        });
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
