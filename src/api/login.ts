import axios, { AxiosPromise } from 'axios';
import { API_KEY } from '@env';

/**
 *  Login api
 */
export const loginApi = (email: string, password: string): AxiosPromise => {
  return axios({
    method: 'POST',
    baseURL: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
    data: {
      email,
      password,
      returnSecureToken: true,
    },
  });
};
