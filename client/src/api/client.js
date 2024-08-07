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
    let headers = {};
    
    if (withToken) {
      headers['Authorization'] = `Bearer ${localStorage.getItem(tokenKey)}`;
    }

    return axios.post(url, data, { headers });
  },

  patch: (path, data, withToken = true) => {
    const url = `${host}${path}`;

    let headers = {};
    
    if (withToken) {
      headers['Authorization'] = `Bearer ${localStorage.getItem(tokenKey)}`;
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
