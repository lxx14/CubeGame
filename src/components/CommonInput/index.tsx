import { useTheme } from '@react-navigation/native';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { KeyboardTypeOptions, TextInput } from 'react-native';
import { styles } from './styles';

interface IProps {
  value: string;
  onChangeValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
  type?: KeyboardTypeOptions;
  secured?: boolean;
}

export const CommonInput: FC<IProps> = ({ value, onChangeValue, placeholder, type, secured }) => {
  const { colors } = useTheme();

  return (
    <TextInput
      style={{ ...styles.textInput, color: colors.text, borderColor: colors.border }}
      value={value}
      onChangeText={onChangeValue}
      placeholder={placeholder}
      placeholderTextColor={colors.placeholder}
      keyboardType={type ?? 'default'}
      secureTextEntry={secured ?? false}
      autoCapitalize={'none'}
    />
  );
};
