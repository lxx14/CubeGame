import axios, { AxiosPromise } from 'axios';
import useSWR, { useSWRConfig } from 'swr';

/**
 *  get something with axios
 */
export const getTestDataApi = (url: string): AxiosPromise => {
  console.log('getTestDataApi----------->');
  return axios({
    method: 'GET',
    baseURL: url,
  });
};

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 *  get something with SWR hook
 */
export const useGetTestDataWithLoading = (url: string): any => {
  console.log('useGetTestDataWithLoading------------>');
  const { data, error } = useSWR(url, getTestDataApi, {
    revalidateOnMount: true,
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });
  const { cache } = useSWRConfig();

  const isLoading = !error && !data;

  cache?.clear(); // if you want not to cache data from request

  return {
    testDataSWR: data?.data.slice(3, 6),
    isLoadingSWR: isLoading,
    isErrorSWR: error,
  };
};
