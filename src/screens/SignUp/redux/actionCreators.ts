import IAction from '@redux/interfaces/IAction';
import { TYPES } from './actionTypes';

/**
 * Get token and login
 */
export const signUpAction = (email: string, password: string): IAction<TYPES> => ({
  type: TYPES.SIGN_UP,
  payload: { email, password },
});
