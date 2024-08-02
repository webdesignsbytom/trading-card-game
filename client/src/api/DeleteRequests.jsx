import client from '../api/client';

export const deleteUserApiRequestNoReturn = (userData, setDeletedUserData) => {
  client
    .delete(`/users/delete/${userData.id}`)
    .then((res) => {
      setDeletedUserData(true)
    })
    .catch((err) => {
      console.error('Unable to delete user', err);
    });
};

export const deleteUserApiRequest = (user, setAllUsersArray) => {
  client
    .delete(`/users/delete/${user.id}`)
    .then((res) => {
      setAllUsersArray(res.data.data.updatedUserArray);
    })
    .catch((err) => {
      console.error('Unable to delete user', err);
    });
};

export const deleteEventApiRequest = (event, setAllEventsArray) => {
  client
    .delete(`/events/delete/event/${event.id}`)
    .then((res) => {
      setAllEventsArray(res.data.data.updatedEventArray);
    })
    .catch((err) => {
      console.error('Unable to delete event', err);
    });
};
