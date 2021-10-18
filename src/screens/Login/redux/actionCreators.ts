import IAction from '@redux/interfaces/IAction';
import { TYPES } from './actionTypes';

/**
 * Get token and login
 */
export const getLoginData = (): IAction<TYPES> => ({
  type: TYPES.GET_LOGIN_DATA,
  payload: {},
});

/**
 * Set token
 */
export const setLoginData = (token: string): IAction<TYPES> => ({
  type: TYPES.SET_LOGIN_DATA,
  payload: { token },
});

/**
 * Set loading for login
 */
export const setLoginIsLoading = (isLoading: boolean): IAction<TYPES> => ({
  type: TYPES.SET_LOGIN_IS_LOADING,
  payload: { isLoading },
});

/**
 * Set loading for login
 */
export const setLogout = (): IAction<TYPES> => ({
  type: TYPES.LOGOUT,
  payload: {},
});

/**
 * get token on splash screen
 */
export const getSplashToken = (): IAction<TYPES> => ({
  type: TYPES.GET_SPLASH_SCREEN_TOKEN,
  payload: {},
});
