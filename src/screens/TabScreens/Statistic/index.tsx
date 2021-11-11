import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { styles } from './styles';

export const Statistic: FC = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: colors.text }}>Statistic</Text>
    </SafeAreaView>
  );
};
