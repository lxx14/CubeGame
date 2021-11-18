import IRootState from '@redux/interfaces/IRootState';

// LOGIN
export const loginIsLoadingSelector = (state: IRootState): boolean => state.login.isLoading;
export const tokenSelector = (state: IRootState): string => state.login.token;

// AVATAR
export const avatarSelector = (state: IRootState): string => state.avatar.uri;
