import { useTheme } from '@react-navigation/native';
import React, { FC, useState } from 'react';
import { Keyboard, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './styles';

export const UserBio: FC = () => {
  const { colors } = useTheme();
  const [nickName, setNickName] = useState('Bob');
  const [email, setEmail] = useState('Bob@gmail.com');
  const [aboutMe, setAboutMe] = useState('Empty... Yet:)');

  const handleBlur = (e) => {
    const tap: string = e.target._internalFiberInstanceHandleDEV.type;

    if (!tap.includes('Input')) {
      Keyboard.dismiss();
    }
  };

  return (
    <View onTouchEnd={handleBlur} style={{ ...styles.wrapper, backgroundColor: colors.background }}>
      <Text style={{ ...styles.title, color: colors.text }}>Nick Name:</Text>
      <TextInput
        style={{ ...styles.textInput, color: colors.text, borderColor: colors.border }}
        value={nickName}
        onChangeText={setNickName}
      />
      <Text style={{ ...styles.title, color: colors.text }}>Email:</Text>
      <TextInput
        style={{ ...styles.textInput, color: colors.text, borderColor: colors.border }}
        value={email}
        onChangeText={setEmail}
      />
      <Text style={{ ...styles.title, color: colors.text }}>About me:</Text>
      <TextInput
        style={{ ...styles.textInput, color: colors.text, borderColor: colors.border }}
        value={aboutMe}
        onChangeText={setAboutMe}
        multiline={true}
      />
      <TouchableOpacity onPress={handleBlur}>
        <Text style={{ ...styles.button, color: colors.primary }}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
