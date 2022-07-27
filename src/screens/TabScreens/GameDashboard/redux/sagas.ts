import { SagaIterator } from '@redux-saga/core';
import { takeLatest, put, call } from 'redux-saga/effects';
import { TYPES } from './actionTypes';
import {
  connectToClinicApi,
  createUsersApi,
  getAuthCodeApi,
  getClinicalsApi,
  getPatientDataApi,
  getTokenApi,
  getUsersApi,
} from '../../../../../src/api/oneUpHealth';
import { Alert } from 'react-native';
import IAction from '@redux/interfaces/IAction';
import {
  setAuthCode,
  setClinicals,
  setClinicTestData,
  setPatientData,
  setToken,
  setUsers,
} from './actionCreators';

/**
 * Create users saga 1up
 */
export function* createUsersSaga({ payload }: IAction<TYPES>): SagaIterator {
  try {
    const { app_user_id, client_id, client_secret } = payload;

    const result = yield call(createUsersApi, app_user_id, client_id, client_secret);
    console.log('result createUsersSaga---------------->', result);

    if (result?.status === 200 || result?.status === 201) {
      yield call(Alert.alert, 'User created!');
    }
  } catch (e) {
    console.log(`createUsersSaga error: ${e.message as string}`, e);
    yield call(Alert.alert, 'wrong reqest');
  }
}

/**
 * Get users saga 1up
 */
export function* getUsersSaga({ payload }: IAction<TYPES>): SagaIterator {
  try {
    const { client_id, client_secret } = payload;

    const result = yield call(getUsersApi, client_id, client_secret);
    console.log('result getUsersSaga---------------->', result);

    if (result?.status === 200) {
      yield put(setUsers(result?.data));
    }
  } catch (e) {
    console.log(`getUsersSaga error: ${e.message as string}`, e);
    yield call(Alert.alert, 'wrong reqest');
  }
}

/**
 * Get auth code for user 1up
 */
export function* getAuthCodeSaga({ payload }: IAction<TYPES>): SagaIterator {
  try {
    const { app_user_id, client_id, client_secret } = payload;

    const result = yield call(getAuthCodeApi, app_user_id, client_id, client_secret);
    console.log('result getAuthCodeSaga---------------->', result);

    if (result?.status === 200) {
      yield put(setAuthCode(result?.data));
    }
  } catch (e) {
    console.log(`getAuthCodeSaga error: ${e.message as string}`, e);
    yield call(Alert.alert, 'wrong reqest');
  }
}

/**
 * Get token for user 1up
 */
export function* getTokenSaga({ payload }: IAction<TYPES>): SagaIterator {
  try {
    const { client_id, client_secret, code, grant_type } = payload;

    const result = yield call(getTokenApi, client_id, client_secret, code, grant_type);
    console.log('result getTokenSaga---------------->', result);

    if (result?.status === 200) {
      yield put(setToken(result?.data));
    }
  } catch (e) {
    console.log(`getTokenSaga error: ${e.message as string}`, e);
    yield call(Alert.alert, 'wrong reqest');
  }
}

/**
 * Get list of clinicals 1up
 */
export function* getClinicalsSaga({ payload }: IAction<TYPES>): SagaIterator {
  try {
    const { client_id, client_secret } = payload;

    const result = yield call(getClinicalsApi, client_id, client_secret);
    console.log('result getClinicalsSaga---------------->', result.data.slice(0, 10));

    if (result?.status === 200) {
      yield put(setClinicals(result?.data?.slice(0, 10)));
    }
  } catch (e) {
    console.log(`getClinicalsSaga error: ${e.message as string}`, e);
    yield call(Alert.alert, 'wrong reqest');
  }
}

/**
 * Connect to clinic 1up
 */
export function* connectToClinicSaga({ payload }: IAction<TYPES>): SagaIterator {
  try {
    const { clinic_id, client_id, access_token, isForTesting } = payload;

    const result = yield call(connectToClinicApi, clinic_id, client_id, access_token);
    console.log('result connectToClinicSaga---------------->', result);

    if (result?.status === 200 && isForTesting) {
      yield put(setClinicTestData(result?.data));
    }
  } catch (e) {
    console.log(`connectToClinicSaga error: ${e.message as string}`, e);
    yield call(Alert.alert, 'cant connect to real clinic');
  }
}

/**
 * Get patient data 1up
 */
export function* getPatientDataSaga({ payload }: IAction<TYPES>): SagaIterator {
  try {
    const { access_token } = payload;

    const result = yield call(getPatientDataApi, access_token);
    console.log('result getPatientDataSaga---------------->', result);

    if (result?.status === 200) {
      yield put(setPatientData(result?.data));
    }
  } catch (e) {
    console.log(`getPatientDataSaga error: ${e.message as string}`, e);
    yield call(Alert.alert, 'wrong reqest');
  }
}

export default [
  takeLatest(TYPES.CREATE_USER, createUsersSaga),
  takeLatest(TYPES.GET_USERS, getUsersSaga),
  takeLatest(TYPES.GET_AUTH_CODE, getAuthCodeSaga),
  takeLatest(TYPES.GET_TOKEN, getTokenSaga),
  takeLatest(TYPES.GET_CLINICALS, getClinicalsSaga),
  takeLatest(TYPES.CONNECT_TO_CLINIC, connectToClinicSaga),
  takeLatest(TYPES.GET_PATIENT, getPatientDataSaga),
];
