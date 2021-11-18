import IAction from '@redux/interfaces/IAction';
import { TYPES } from './actionTypes';
import { ILoginState } from './interfaces';

export const initState: ILoginState = {
  loginData: {
    kind: '',
    localId: '',
    email: '',
    displayName: '',
    idToken: '',
    registered: false,
    refreshToken: '',
    expiresIn: '',
  },
  isLoading: false,
};

export default (state: ILoginState = initState, { type, payload }: IAction<TYPES>): ILoginState => {
  switch (type) {
    case TYPES.SET_LOGIN_DATA:
      return {
        ...state,
        loginData: payload.data,
      };
    case TYPES.SET_LOGIN_IS_LOADING:
      return {
        ...state,
        isLoading: payload.isLoading,
      };
    case TYPES.LOGOUT:
      return {
        ...state,
        ...initState,
      };
    default:
      return { ...state };
  }
};
