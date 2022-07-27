import axios, { AxiosPromise } from 'axios';

/**
 *  create users api
 */
export const createUsersApi = (
  app_user_id: string,
  client_id: string,
  client_secret: string,
): AxiosPromise => {
  return axios({
    method: 'POST',
    baseURL: `https://api.1up.health/user-management/v1/user`,
    data: {
      app_user_id,
      client_id,
      client_secret,
    },
  });
};

/**
 *  get users api
 */
export const getUsersApi = (client_id: string, client_secret: string): AxiosPromise => {
  return axios({
    method: 'GET',
    baseURL: `https://api.1up.health/user-management/v1/user?client_id=${client_id}&client_secret=${client_secret}`,
  });
};

/**
 *  get auth data user api
 */
export const getAuthCodeApi = (
  app_user_id: string,
  client_id: string,
  client_secret: string,
): AxiosPromise => {
  return axios({
    method: 'POST',
    baseURL: `https://api.1up.health/user-management/v1/user/auth-code`,
    data: {
      app_user_id,
      client_id,
      client_secret,
    },
  });
};

/**
 *  get auth token with auth data api
 */
export const getTokenApi = (
  client_id: string,
  client_secret: string,
  code: string,
  grant_type: string,
): AxiosPromise => {
  return axios({
    method: 'POST',
    baseURL: `https://auth.1up.health/oauth2/token`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    // OMG!!!!!!!!!!!!!!!!!!!!!!
    data: new URLSearchParams({
      client_id,
      client_secret,
      code,
      grant_type,
    }),
  });
};

/**
 *  get clinicals api
 */
export const getClinicalsApi = (client_id: string, client_secret: string): AxiosPromise => {
  return axios({
    method: 'GET',
    baseURL: `https://api.1up.health/connect/system/clinical?client_id=${client_id}&client_secret=${client_secret}`,
  });
};

/**
 *  connect to clinic api
 */
export const connectToClinicApi = (
  clinic_id: string,
  client_id: string,
  access_token: string,
): AxiosPromise => {
  return axios({
    method: 'POST',
    baseURL: `https://api.1up.health/connect/system/clinical/${clinic_id}?client_id=${client_id}&access_token=${access_token}`,
  });
};

/**
 *  get patient data api
 */
export const getPatientDataApi = (access_token: string): AxiosPromise => {
  return axios({
    method: 'GET',
    baseURL: `https://api.1up.health/dstu2/Patient?access_token=${access_token}`,
  });
};
