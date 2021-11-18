import { useTheme } from '@react-navigation/native';
import { loginIsLoadingSelector } from '@redux/selectors';
import React, { FC, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HaveAccount } from '../../components/HaveAccount';
import { CommonInput } from '../../components/CommonInput';
import { login } from './redux/actionCreators';
import { styles } from './styles';

export const Login: FC<any> = ({ navigation }) => {
  const isLoading = useSelector(loginIsLoadingSelector);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { colors } = useTheme();

  const onLogin = () => {
    dispatch(login(email, password));
  };

  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: colors.background }}>
      {isLoading ? (
        <ActivityIndicator color={colors.primary} />
      ) : (
        <View style={styles.contentWrapper}>
          <Text style={{ ...styles.loginTitle, color: colors.text }}>Login Screen</Text>
          <CommonInput
            value={email}
            onChangeValue={setEmail}
            placeholder={'email'}
            type={'email-address'}
          />
          <CommonInput
            value={password}
            onChangeValue={setPassword}
            placeholder={'password'}
            secured={true}
          />
          <TouchableOpacity onPress={onLogin}>
            <Text style={{ ...styles.button, color: colors.primary }}>Login</Text>
          </TouchableOpacity>
          <HaveAccount screen={'Login'} navigation={navigation} />
        </View>
      )}
    </SafeAreaView>
  );
};
