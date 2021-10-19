import { loginIsLoadingSelector } from '@redux/selectors';
import React, { FC } from 'react';
import { ActivityIndicator, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginData } from './redux/actionCreators';

export const Login: FC = () => {
  const isLoading = useSelector(loginIsLoadingSelector);
  const dispatch = useDispatch();
  const onLogin = () => {
    dispatch(getLoginData());
  };

  return isLoading ? (
    <ActivityIndicator color={'blue'} />
  ) : (
    <SafeAreaView>
      <Text>Main Page</Text>
      <TouchableOpacity onPress={onLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
