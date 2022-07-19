import { useTheme } from '@react-navigation/native';
import React, { FC, useCallback } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export const GameDashboard: FC = () => {
  const { colors } = useTheme();

  const onReqest = useCallback(() => {
    console.log('request--------->');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: colors.text }}>GameDashboard</Text>
      <TouchableOpacity style={styles.button} onPress={onReqest}>
        <Text>Request</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
