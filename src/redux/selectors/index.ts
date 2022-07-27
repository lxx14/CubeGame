import IRootState from '@redux/interfaces/IRootState';
import { IUsersState } from '@screens/TabScreens/GameDashboard/redux/interfaces';

// LOGIN
export const loginIsLoadingSelector = (state: IRootState): boolean => state.login.isLoading;
export const tokenSelector = (state: IRootState): string => state.login.loginData.idToken;
export const emailSelector = (state: IRootState): string => state.login.loginData.email;

// AVATAR
export const avatarSelector = (state: IRootState): string => state.avatar.uri;

// 1 UP HEALTH
export const getUsersSelector = (state: IRootState): IUsersState['users'] => state.oneUpUsers.users;
export const getUserAuthCodeDataSelector = (state: IRootState): IUsersState['authCode'] =>
  state.oneUpUsers.authCode;
export const getUserTokenDataSelector = (state: IRootState): IUsersState['tokenData'] =>
  state.oneUpUsers.tokenData;
export const getUserClinicalsSelector = (state: IRootState): IUsersState['clinicals'] =>
  state.oneUpUsers.clinicals;
export const connectClinicTestDataSelector = (
  state: IRootState,
): IUsersState['testClinicConnectData'] => state.oneUpUsers.testClinicConnectData;
export const patientDataSelector = (state: IRootState): IUsersState['patientData'] =>
  state.oneUpUsers.patientData;
