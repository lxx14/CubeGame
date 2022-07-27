import IAction from '@redux/interfaces/IAction';
import { TYPES } from './actionTypes';
import { IUsersState } from './interfaces';

/**
 * Create users 1up
 */
export const createUser = (
  app_user_id: string,
  client_id: string,
  client_secret: string,
): IAction<TYPES> => ({
  type: TYPES.CREATE_USER,
  payload: { app_user_id, client_id, client_secret },
});

/**
 * Get users 1up
 */
export const getUsers = (client_id: string, client_secret: string): IAction<TYPES> => ({
  type: TYPES.GET_USERS,
  payload: { client_id, client_secret },
});

/**
 * Set users 1 up
 */
export const setUsers = (users: IUsersState['users']): IAction<TYPES> => ({
  type: TYPES.SET_USERS,
  payload: { users },
});

/**
 * Get auth code for user 1up
 */
export const getAuthCode = (
  app_user_id: string,
  client_id: string,
  client_secret: string,
): IAction<TYPES> => ({
  type: TYPES.GET_AUTH_CODE,
  payload: { app_user_id, client_id, client_secret },
});

/**
 * Set auth code for user 1up
 */
export const setAuthCode = (authData: IUsersState['authCode']): IAction<TYPES> => ({
  type: TYPES.SET_AUTH_CODE,
  payload: { authData },
});

/**
 * Get token code for user 1up
 */
export const getToken = (
  client_id: string,
  client_secret: string,
  code: string,
  grant_type: string,
): IAction<TYPES> => ({
  type: TYPES.GET_TOKEN,
  payload: { client_id, client_secret, code, grant_type },
});

/**
 * Set token for user 1up
 */
export const setToken = (tokenData: IUsersState['tokenData']): IAction<TYPES> => ({
  type: TYPES.SET_TOKEN,
  payload: { tokenData },
});

/**
 * Get clinicals for user 1up
 */
export const getClinicals = (client_id: string, client_secret: string): IAction<TYPES> => ({
  type: TYPES.GET_CLINICALS,
  payload: { client_id, client_secret },
});

/**
 * Set clinicals for user 1up
 */
export const setClinicals = (clinicals: IUsersState['clinicals']): IAction<TYPES> => ({
  type: TYPES.SET_CLINICALS,
  payload: { clinicals },
});

/**
 * Connect to clinic 1up
 */
export const connectToClinic = (
  clinic_id: string,
  client_id: string,
  access_token: string,
  isForTesting = false,
): IAction<TYPES> => ({
  type: TYPES.CONNECT_TO_CLINIC,
  payload: { clinic_id, client_id, access_token, isForTesting },
});

/**
 * Set test clinic data 1up
 */
export const setClinicTestData = (testClinicConnectData: string): IAction<TYPES> => ({
  type: TYPES.SET_TEST_CLINIC_DATA,
  payload: { testClinicConnectData },
});

/**
 * Get patient data 1up
 */
export const getPatientData = (access_token: string): IAction<TYPES> => ({
  type: TYPES.GET_PATIENT,
  payload: { access_token },
});

/**
 * Set patient data 1up
 */
export const setPatientData = (patientData: any): IAction<TYPES> => ({
  type: TYPES.SET_PATIENT,
  payload: { patientData },
});

/**
 * Clear all 1up data
 */
export const clear1upData = (): IAction<TYPES> => ({
  type: TYPES.CLEAR_DATA,
  payload: {},
});
