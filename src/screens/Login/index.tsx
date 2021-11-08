import { ROUTES } from '@navigation/routes';
import { loginIsLoadingSelector } from '@redux/selectors';
import React, { FC, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginData } from './redux/actionCreators';

export const Login: FC<any> = ({ navigation }) => {
  const isLoading = useSelector(loginIsLoadingSelector);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch(getLoginData(email, password));
  };

  const goToSignUp = () => {
    navigation.navigate(ROUTES.SIGN_UP);
  };

  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator color={'blue'} style={{ paddingBottom: 30 }} />
      ) : (
        <View>
          <Text>Tap Login under</Text>
          <TextInput
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
            }}
            value={email}
            onChangeText={setEmail}
            placeholder={'email'}
          />
          <TextInput
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
            }}
            value={password}
            onChangeText={setPassword}
            placeholder={'password'}
          />
          <TouchableOpacity onPress={onLogin}>
            <Text>Login</Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 30 }}>
            Have not Account?<Text onPress={goToSignUp}> Sign Up</Text>
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};
