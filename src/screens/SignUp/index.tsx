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
import { signUpAction } from './redux/actionCreators';

export const SignUp: FC<any> = ({ navigation }) => {
  const isLoading = useSelector(loginIsLoadingSelector);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSignUp = () => {
    dispatch(signUpAction(email, password));
  };

  const goToLogin = () => {
    navigation.navigate(ROUTES.LOGIN);
  };

  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator color={'blue'} style={{ paddingBottom: 30 }} />
      ) : (
        <View>
          <Text>Tap SignUp under</Text>
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
          <TouchableOpacity onPress={onSignUp}>
            <Text>SignUp</Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 30 }}>
            Already have Account?<Text onPress={goToLogin}> Login</Text>
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};
