import IRootState from '@redux/interfaces/IRootState';

// LOGIN
export const loginIsLoadingSelector = (state: IRootState): boolean => state.login.isLoading;
export const tokenSelector = (state: IRootState): string => state.login.loginData.idToken;
export const emailSelector = (state: IRootState): string => state.login.loginData.email;

// AVATAR
export const avatarSelector = (state: IRootState): string => state.avatar.uri;
