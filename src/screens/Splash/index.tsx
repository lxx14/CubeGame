import React, { FC, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { getSplashToken } from '@screens/Login/redux/actionCreators';
import { useTheme } from '@react-navigation/native';
import { styles } from './styles';

export const Splash: FC = () => {
  const dispatch = useDispatch();
  const { colors } = useTheme();

  useEffect(() => {
    dispatch(getSplashToken());
  }, [dispatch]);

  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: colors.background }}>
      <Text style={{ ...styles.text, color: colors.text }}>CUBE GAME</Text>
    </SafeAreaView>
  );
};
