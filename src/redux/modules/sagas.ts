import { all, AllEffect } from 'redux-saga/effects';
import LoginSagas from '@screens/Login/redux/sagas';
import SignUpSagas from '@screens/SignUp/redux/sagas';
import OneUpHealthSagas from '@screens/TabScreens/GameDashboard/redux/sagas';

export function* SagaManager(): Generator<AllEffect<any>> {
  yield all([...LoginSagas, ...SignUpSagas, ...OneUpHealthSagas]);
}
