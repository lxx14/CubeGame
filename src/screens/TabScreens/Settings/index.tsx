import { setLogout } from '@screens/Login/redux/actionCreators';
import React, { FC } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

export const Settings: FC = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(setLogout());
  };

  return (
    <SafeAreaView>
      <Text>Settings</Text>
      <TouchableOpacity onPress={onLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
