import IAction from '@redux/interfaces/IAction';
import { TYPES } from './actionTypes';
import { IAvatar } from './interfaces';

export const initState: IAvatar = {
  uri: '',
};

export default (state: IAvatar = initState, { type, payload }: IAction<TYPES>): IAvatar => {
  switch (type) {
    case TYPES.SET_USER_AVATAR:
      return {
        ...state,
        uri: payload.uri,
      };
    default:
      return { ...state };
  }
};
