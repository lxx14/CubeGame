import { SagaIterator } from '@redux-saga/core';
import { takeLatest, put, call } from 'redux-saga/effects';
import { setLoginData } from '../../Login/redux/actionCreators';
import { TYPES } from './actionTypes';
import * as RootNavigation from '@navigation/helpers';
import { ROUTES } from '@navigation/routes';
import { signUpApi } from '../../../../src/api/signUp';
import { Alert } from 'react-native';
import IAction from '@redux/interfaces/IAction';

/**
 * SignUp saga
 */
export function* signUpSaga({ payload }: IAction<TYPES>): SagaIterator {
  try {
    const { email, password } = payload;
    const result = yield call(signUpApi, email, password);

    if (result?.status === 200) {
      yield put(setLoginData(result?.data?.idToken));
      yield call(RootNavigation.navigate, ROUTES.MAIN);
    }
  } catch (e) {
    console.log(`signUpSaga error: ${e.message as string}`, e);
    yield call(Alert.alert, 'wrong email validation');
  }
}

export default [takeLatest(TYPES.SIGN_UP, signUpSaga)];
