import axios from 'axios';

export const signup = (user) =>
  axios({
    url: '/api/users',
    method: 'post',
    data: { user },
  });

export const login = (user) =>
  axios({
    url: '/api/session',
    method: 'post',
    data: { user },
  });

export const logout = () =>
  axios({
    url: '/api/session',
    method: 'delete',
  });
