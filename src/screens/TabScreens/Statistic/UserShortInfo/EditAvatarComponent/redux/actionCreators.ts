import IAction from '@redux/interfaces/IAction';
import { TYPES } from './actionTypes';

/**
 * Set avatar
 */
export const setUserAvatar = (uri: string): IAction<TYPES> => ({
  type: TYPES.SET_USER_AVATAR,
  payload: { uri },
});
