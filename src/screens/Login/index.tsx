import { loginIsLoadingSelector } from '@redux/selectors';
import React, { FC } from 'react';
import { ActivityIndicator, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginData } from './redux/actionCreators';

export const Login: FC = () => {
  const isLoading = useSelector(loginIsLoadingSelector);
  const dispatch = useDispatch();
  const onLogin = () => {
    dispatch(getLoginData());
  };

  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator color={'blue'} style={{ paddingBottom: 30 }} />
      ) : (
        <View>
          <Text>Tap Login under</Text>
          <TouchableOpacity onPress={onLogin}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};
