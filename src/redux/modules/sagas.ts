import { all, AllEffect } from 'redux-saga/effects';
import LoginSagas from '@screens/Login/redux/sagas';
import SignUpSagas from '@screens/SignUp/redux/sagas';

export function* SagaManager(): Generator<AllEffect<any>> {
  yield all([...LoginSagas, ...SignUpSagas]);
}
