import client from '../utils/client';

export const deleteUserApiRequestNoReturn = (userData, setDeletedUserData) => {
  client
    .delete(`/users/delete/${userData.id}`)
    .then((res) => {
      console.log('Deleted user', res.data.data.deletedUser);
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
      console.log('Deleted user', res.data.data.deletedUser);
      setAllUsersArray(res.data.data.updatedUserArray);
    })
    .catch((err) => {
      console.error('Unable to delete user', err);
    });
};

export const deleteEventApiRequest = (event, setAllEventsArray) => {
  console.log('AAAAAAAAA', event);
  client
    .delete(`/events/delete/event/${event.id}`)
    .then((res) => {
      console.log('Deleted event', res.data.data.deletedEvent);
      setAllEventsArray(res.data.data.updatedEventArray);
    })
    .catch((err) => {
      console.error('Unable to delete event', err);
    });
};
