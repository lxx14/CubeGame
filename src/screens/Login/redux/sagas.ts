import { SagaIterator } from '@redux-saga/core';
import { tokenSelector } from '@redux/selectors';
import { takeLatest, put, delay, select, call } from 'redux-saga/effects';
import { setLoginIsLoading, setLoginData } from './actionCreators';
import { TYPES } from './actionTypes';
import * as RootNavigation from '@navigation/helpers';
import { ROUTES } from '@navigation/routes';

/**
 * Login saga
 */
export function* loginSaga(): SagaIterator {
  try {
    yield put(setLoginIsLoading(true));
    yield put(setLoginData('test_token'));
    yield delay(1500);
    yield put(setLoginIsLoading(false));
    yield call(RootNavigation.navigate, ROUTES.MAIN);
  } catch (e) {
    console.log(`loginSaga error: ${e.message as string}`, e);
  }
}

/**
 * Logout saga
 */
export function* logoutSaga(): SagaIterator {
  try {
    yield put(setLoginData(''));
    yield call(RootNavigation.navigate, ROUTES.LOGIN);
  } catch (e) {
    console.log(`logoutSaga error: ${e.message as string}`, e);
  }
}

/**
 * Check token on Splash Screen and navigate to login or to main stack
 */
export function* splashScreenSaga(): SagaIterator {
  try {
    const token = yield select(tokenSelector);
    yield delay(2000);
    if (token) {
      yield call(RootNavigation.navigate, ROUTES.GAME_DASHBOARD);
    } else {
      yield call(RootNavigation.navigate, ROUTES.LOGIN);
    }
  } catch (e) {
    console.log(`logoutSaga error: ${e.message as string}`, e);
  }
}

export default [
  takeLatest(TYPES.GET_LOGIN_DATA, loginSaga),
  takeLatest(TYPES.LOGOUT, logoutSaga),
  takeLatest(TYPES.GET_SPLASH_SCREEN_TOKEN, splashScreenSaga),
];
