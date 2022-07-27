import IAction from '@redux/interfaces/IAction';
import { TYPES } from './actionTypes';
import { IUsersState } from './interfaces';

export const initState: IUsersState = {
  users: {},
  authCode: {},
  tokenData: {},
  clinicals: [],
  testClinicConnectData: '',
  patientData: {},
};

export default (state: IUsersState = initState, { type, payload }: IAction<TYPES>): IUsersState => {
  switch (type) {
    case TYPES.SET_USERS:
      return {
        ...state,
        users: payload.users,
      };
    case TYPES.SET_AUTH_CODE:
      return {
        ...state,
        authCode: payload.authData,
      };
    case TYPES.SET_TOKEN:
      return {
        ...state,
        tokenData: payload.tokenData,
      };
    case TYPES.SET_CLINICALS:
      return {
        ...state,
        clinicals: payload.clinicals,
      };
    case TYPES.SET_TEST_CLINIC_DATA:
      return {
        ...state,
        testClinicConnectData: payload.testClinicConnectData,
      };
    case TYPES.SET_PATIENT:
      return {
        ...state,
        patientData: payload.patientData,
      };
    case TYPES.CLEAR_DATA:
      return {
        ...state,
        ...initState,
      };
    default:
      return { ...state };
  }
};
