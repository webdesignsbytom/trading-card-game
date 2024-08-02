// EXAMPLE ONLY WRITE YOUR OWN EACH TIME
import axios from 'axios';
const host = process.env.REACT_APP_API_URL;
const tokenKey = process.env.REACT_APP_USER_TOKEN;

const client = {
  get: path => {
    const url = `${host}${path}`;
    const headers = {
      Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
    };

    return axios.get(url, { headers });
  },

  getAll: path => {
    const url = `${host}${path}`;
    return axios.get(url);
  },

  post: (path, data, withToken = true) => {
    const url = `${host}${path}`;
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNmMjg3OTcxLTVkZDAtNDE1Mi1hMzVmLWU2ZjMxYmM5YjY0YyIsImVtYWlsIjoiZGV2QGRldi5jb20iLCJpYXQiOjE2ODU4NDQ5MzIsImV4cCI6MTY4NjIwNDkzMn0.andbmuUS-nyHf1zvnDdBmKjr8Z6wnab8dLU1SInZjWY";
    let headers = {};

    if (withToken) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return axios.post(url, data, { headers });
  },

  patch: (path, data, withToken = true) => {
    const url = `${host}${path}`;
    const token = localStorage.getItem(tokenKey);
    let headers = {};
    if (withToken) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return axios.patch(url, data, { headers });
  },

  delete: path => {
    const url = `${host}${path}`;
    const headers = {
      Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
    };

    return axios.delete(url, { headers });
  },
};

export default client;
