import { ROUTES } from '@navigation/routes';
import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

interface IProps {
  navigation: any;
  screen: 'Login' | 'Sign Up';
}

export const HaveAccount: FC<IProps> = ({ navigation, screen }) => {
  const { colors } = useTheme();

  const goToScreen = () => {
    screen === 'Login' ? navigation.navigate(ROUTES.SIGN_UP) : navigation.navigate(ROUTES.LOGIN);
  };

  return (
    <Text style={{ ...styles.text, color: colors.text }}>
      Have not Account?{' '}
      <Text onPress={goToScreen} style={{ color: colors.primary }}>
        {screen === 'Login' ? 'Sign Up' : 'Login'}
      </Text>
    </Text>
  );
};
