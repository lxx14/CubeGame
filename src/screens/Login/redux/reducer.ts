import IAction from '@redux/interfaces/IAction';
import { TYPES } from './actionTypes';
import { ILoginState } from './interfaces';

export const initState: ILoginState = {
  token: '',
  isLoading: false,
};

export default (state: ILoginState = initState, { type, payload }: IAction<TYPES>): ILoginState => {
  switch (type) {
    case TYPES.SET_TOKEN:
      return {
        ...state,
        token: payload.token,
      };
    case TYPES.SET_LOGIN_IS_LOADING:
      return {
        ...state,
        isLoading: payload.isLoading,
      };
    default:
      return { ...state };
  }
};
