import { SagaIterator } from '@redux-saga/core';
import { takeLatest, put, delay, call } from 'redux-saga/effects';
import { setLoginIsLoading, setLoginData } from './actionCreators';
import { TYPES } from './actionTypes';
import * as RootNavigation from '@navigation/helpers';
import { ROUTES } from '@navigation/routes';
import { loginApi } from '../../../../src/api/login';
import { Alert } from 'react-native';
import IAction from '@redux/interfaces/IAction';

/**
 * Login saga
 */
export function* loginSaga({ payload }: IAction<TYPES>): SagaIterator {
  try {
    const { email, password } = payload;

    yield put(setLoginIsLoading(true));
    const result = yield call(loginApi, email, password);

    if (result?.status === 200) {
      yield put(setLoginData(result?.data));
      yield delay(1500);
      yield put(setLoginIsLoading(false));
      yield call(RootNavigation.navigate, ROUTES.MAIN);
    }
  } catch (e) {
    console.log(`loginSaga error: ${e.message as string}`, e);
    yield put(setLoginIsLoading(false));
    yield call(Alert.alert, 'wrong email or password');
  }
}

export default [takeLatest(TYPES.GET_LOGIN_DATA, loginSaga)];
