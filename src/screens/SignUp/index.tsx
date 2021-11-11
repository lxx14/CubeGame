import { useTheme } from '@react-navigation/native';
import { loginIsLoadingSelector } from '@redux/selectors';
import React, { FC, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CommonInput } from '../../components/CommonInput';
import { HaveAccount } from '../../components/HaveAccount';
import { signUpAction } from './redux/actionCreators';
import { styles } from './styles';

export const SignUp: FC<any> = ({ navigation }) => {
  const isLoading = useSelector(loginIsLoadingSelector);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { colors } = useTheme();

  const onSignUp = () => {
    dispatch(signUpAction(email, password));
  };

  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: colors.background }}>
      {isLoading ? (
        <ActivityIndicator color={colors.primary} />
      ) : (
        <View style={styles.contentWrapper}>
          <Text style={{ ...styles.loginTitle, color: colors.text }}>Sign Up</Text>
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
          <TouchableOpacity onPress={onSignUp}>
            <Text style={{ ...styles.button, color: colors.primary }}>Sign Up</Text>
          </TouchableOpacity>
          <HaveAccount screen={'Sign Up'} navigation={navigation} />
        </View>
      )}
    </SafeAreaView>
  );
};
