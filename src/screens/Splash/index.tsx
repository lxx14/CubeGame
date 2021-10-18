import React, { FC, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { getSplashToken } from '../Login/redux/actionCreators';

export const Splash: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSplashToken());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <Text>CUBE GAME</Text>
    </SafeAreaView>
  );
};
