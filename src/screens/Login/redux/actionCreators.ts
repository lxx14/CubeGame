import IAction from '@redux/interfaces/IAction';
import { TYPES } from './actionTypes';
import { ILoginState } from './interfaces';

/**
 * Get token and login
 */
export const login = (email: string, password: string): IAction<TYPES> => ({
  type: TYPES.GET_LOGIN_DATA,
  payload: { email, password },
});

/**
 * Set token
 */
export const setLoginData = (data: ILoginState): IAction<TYPES> => ({
  type: TYPES.SET_LOGIN_DATA,
  payload: { data },
});

/**
 * Set loading for login
 */
export const setLoginIsLoading = (isLoading: boolean): IAction<TYPES> => ({
  type: TYPES.SET_LOGIN_IS_LOADING,
  payload: { isLoading },
});

/**
 * logout
 */
export const setLogout = (): IAction<TYPES> => ({
  type: TYPES.LOGOUT,
  payload: {},
});
