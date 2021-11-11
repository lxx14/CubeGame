import { useTheme } from '@react-navigation/native';
import { setLogout } from '@screens/Login/redux/actionCreators';
import React, { FC } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from './styles';

export const Settings: FC = () => {
  const dispatch = useDispatch();
  const { colors } = useTheme();

  const onLogout = () => {
    dispatch(setLogout());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: colors.text }}>Settings</Text>
      <TouchableOpacity onPress={onLogout}>
        <Text style={{ ...styles.button, color: colors.primary }}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
