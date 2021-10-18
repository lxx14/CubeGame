import { all, AllEffect } from 'redux-saga/effects';
import LoginSagas from '../../../src/screens/Login/redux/sagas';

export function* SagaManager(): Generator<AllEffect<any>> {
  yield all([...LoginSagas]);
}
