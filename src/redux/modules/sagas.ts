import { all, AllEffect } from 'redux-saga/effects';
import LoginSagas from '@screens/Login/redux/sagas';

export function* SagaManager(): Generator<AllEffect<any>> {
  yield all([...LoginSagas]);
}
