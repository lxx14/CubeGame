import axios, { AxiosPromise } from 'axios';

/**
 *  get something
 */
export const getTestDataApi = (): AxiosPromise => {
  return axios({
    method: 'GET',
    baseURL: `https://jsonplaceholder.typicode.com/todos`,
  });
};
