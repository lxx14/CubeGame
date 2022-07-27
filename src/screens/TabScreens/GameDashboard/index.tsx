import {
  connectClinicTestDataSelector,
  getUserAuthCodeDataSelector,
  getUserClinicalsSelector,
  getUsersSelector,
  getUserTokenDataSelector,
  patientDataSelector,
} from '@redux/selectors';
import React, { FC, useCallback, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native-elements';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  clear1upData,
  connectToClinic,
  createUser,
  getAuthCode,
  getClinicals,
  getPatientData,
  getToken,
  getUsers,
} from './redux/actionCreators';
import { styles } from './styles';
import { WebView } from 'react-native-webview';

// my own

// const client_id = 'f28cc2ed33e1f617bd17f0b55f5e10fc';
// const client_secret = 'e49274d596f625a62ed30efc7b3afd09';
// const app_user_id = 'AllClear_4'; // for create new user must be uniq, change by own hands
// const createDataMock = createPatientMock;

// new with redirect

const client_id = 'fd2006d73aecef0558e8e68c0824cdd5';
const client_secret = '108eede96fd2e89043701b15c5c8d342';
const app_user_id = 'HealthId'; // for create new user must be uniq, change by own hands

// From Ed

// const client_id = 'dff427ad97f42cb4534636caa0fc3515';
// const client_secret = '700eed9b5cee20332e293601b21bbe23';
// const app_user_id = 'your_first_user';

// for both accounts

const grant_type = 'authorization_code';
const testClinicId = '4706';

export const GameDashboard: FC = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const users = useSelector(getUsersSelector, shallowEqual);
  const authCode = useSelector(getUserAuthCodeDataSelector, shallowEqual);
  const tokenData = useSelector(getUserTokenDataSelector, shallowEqual);
  const clinicals = useSelector(getUserClinicalsSelector, shallowEqual);
  const testClinicData = useSelector(connectClinicTestDataSelector);
  const patientData = useSelector(patientDataSelector, shallowEqual);

  console.log('users--------->', users);
  console.log('authCode--------->', authCode);
  console.log('tokenData--------->', tokenData);
  console.log('clinicals--------->', clinicals);
  console.log('testClinicData--------->', testClinicData);
  console.log('patientData--------->', patientData);

  const onCreateUser = useCallback(() => {
    dispatch(createUser(app_user_id, client_id, client_secret));
  }, [dispatch]);

  const onReqest = useCallback(() => {
    dispatch(getUsers(client_id, client_secret));
  }, [dispatch]);

  const onGetAuthCode = useCallback(() => {
    dispatch(getAuthCode(app_user_id, client_id, client_secret));
  }, [dispatch]);

  const onGetToken = useCallback(() => {
    dispatch(getToken(client_id, client_secret, authCode?.code, grant_type));
  }, [authCode, dispatch]);

  const onGetClinicals = useCallback(() => {
    dispatch(getClinicals(client_id, client_secret));
  }, [dispatch]);

  const onConnectToClinic = useCallback(
    (clinic_id) => {
      dispatch(connectToClinic(clinic_id, client_id, tokenData?.access_token));
    },
    [dispatch, tokenData],
  );

  const onConnectToTestClinic = useCallback(() => {
    // dispatch(connectToClinic(testClinicId, client_id, tokenData?.access_token, true));
    setVisible(true);
  }, []);

  // const onCreatePatient = useCallback(() => {
  //   dispatch(createPatient(tokenData?.access_token, createDataMock));
  // }, [dispatch, tokenData?.access_token]);

  const onGetPatient = useCallback(() => {
    dispatch(getPatientData(tokenData?.access_token));
  }, [dispatch, tokenData?.access_token]);

  const clearAll = useCallback(() => {
    dispatch(clear1upData());
    setVisible(false);
  }, [dispatch]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onCreateUser}>
        <Text>Create users (optional if there are no users in app)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onReqest}>
        <Text>Request users</Text>
      </TouchableOpacity>
      {users?.link?.length > 0 &&
        users?.link.map((item) => <Text key={item?.url}>url: {item?.url}</Text>)}
      {users?.entry?.length > 0 &&
        users?.entry.map((item) => (
          <View key={item?.oneup_user_id}>
            <Text>-----------------</Text>
            <Text>oneup_user_id: {item?.oneup_user_id}</Text>
            <Text>app_user_id: {item?.app_user_id}</Text>
            <Text>active: {item?.active ? 'true' : 'false'}</Text>
            <Text>-----------------</Text>
          </View>
        ))}
      <TouchableOpacity style={styles.button} onPress={onGetAuthCode}>
        <Text>Get auth code for one of users</Text>
      </TouchableOpacity>
      {authCode?.code?.length > 0 && (
        <View>
          <Text>-----------------</Text>
          <Text>authCode: {authCode?.code}</Text>
          <Text>oneup_user_id: {authCode?.oneup_user_id}</Text>
          <Text>app_user_id: {authCode?.app_user_id}</Text>
          <Text>-----------------</Text>
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={onGetToken}>
        <Text>Get token one for of users</Text>
      </TouchableOpacity>
      {tokenData?.access_token?.length > 0 && (
        <View>
          <Text>-----------------</Text>
          <Text>access_token: {tokenData?.access_token}</Text>
          <Text>token_type: {tokenData?.token_type}</Text>
          <Text>expires_in: {tokenData?.expires_in}</Text>
          <Text>refresh_token: {tokenData?.refresh_token}</Text>
          <Text>-----------------</Text>
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={onGetClinicals}>
        <Text>Get clinicals and connect by tap on it</Text>
      </TouchableOpacity>
      {clinicals?.length > 0 &&
        clinicals?.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={{ borderWidth: 2, borderColor: 'black', margin: 10, padding: 5 }}
            onPress={onConnectToClinic.bind(null, item.id)}>
            <Text>clinic_id: {item.id}</Text>
            <Text>clinic_name: {item?.name ? item?.name : 'name didnt provided'}</Text>
            <Image source={{ uri: item.logo }} style={{ width: 20, height: 20 }} />
            <Text>primary_adress: {item?.locations[0]?.address?.line[0]}</Text>
            <Text>city: {item?.locations[0]?.address?.city}</Text>
            <Text>postalCode: {item?.locations[0]?.address?.postalCode}</Text>
            <Text>state: {item?.locations[0]?.address?.state}</Text>
          </TouchableOpacity>
        ))}
      <TouchableOpacity style={styles.button} onPress={onConnectToTestClinic}>
        <Text>Connect to test clinic</Text>
      </TouchableOpacity>
      {visible && (
        <View>
          {progress > 0 && progress < 1 && (
            <View>
              <ActivityIndicator color={'blue'} size={50} />
            </View>
          )}
          <WebView
            originWhitelist={['*']}
            source={{
              uri: `https://api.1up.health/connect/system/clinical/${testClinicId}?client_id=${client_id}&access_token=${tokenData?.access_token}`,
            }}
            method={'POST'}
            style={{ height: 500 }}
            onError={(error) => {
              console.log('onError------------->: ', error?.nativeEvent);
            }}
            onLoadProgress={({ nativeEvent }) => {
              console.log('onProgress------------->: ', nativeEvent.progress);
              setProgress(nativeEvent.progress);
            }}
            scrollEnabled={true}
          />
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={onGetPatient}>
        <Text>Get Patient</Text>
      </TouchableOpacity>
      {patientData?.entry?.length > 0 && (
        <View>
          <Text>-----------------</Text>
          <Text>name: {patientData?.entry[0]?.resource?.name[0]?.given[0]}</Text>
          <Text>full url: {patientData?.entry[0]?.fullUrl}</Text>
          <Text>gender: {patientData?.entry[0]?.resource?.gender}</Text>
          <Text>birthDate: {patientData?.entry[0]?.resource?.birthDate}</Text>
          <Text>
            careProvider:{' '}
            {patientData?.entry[0]?.resource?.careProvider
              ? patientData?.entry[0]?.resource?.careProvider[0]?.display
              : 'none'}
          </Text>
          <Text>resourceType: {patientData?.entry[0]?.resource?.resourceType}</Text>
          <Text>-----------------</Text>
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={clearAll}>
        <Text>Clear screen data</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
