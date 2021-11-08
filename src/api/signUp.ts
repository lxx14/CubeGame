import axios, { AxiosPromise } from 'axios';
import { API_KEY } from '@env';

/**
 *  Sign up api
 */
export const signUpApi = (email: string, password: string): AxiosPromise => {
  return axios({
    method: 'POST',
    baseURL: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    data: {
      email,
      password,
      returnSecureToken: true,
    },
  });
};
